const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const http = require("http");
const { Server }= require("socket.io")
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();
const crypto = require('crypto');
const useragent = require('express-useragent');
const geoip = require('geoip-lite');

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(useragent.express());

const PORT = process.env.PORT || 8080;

//Socket



const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
  },
});

io.on("connection",(socket)=>{
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data)=>{
    socket.join(data);
    console.log(`User With Id: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data)=>{
    socket.to(data.room).emit("receive_message", data);
    //console.log(data);
  });

  socket.on("disconnect",()=>{
    console.log("User Disconnected", socket.id);
  });
});

// MongoDB connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));




// UserSchema
const userSchema = mongoose.Schema({
  FullName: String,
  Email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);



// API 
app.get("/", (req, res) => {
  res.send("Server is running");
});

// signup

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { FullName, Email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ Email }).exec();

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered", alert: false });
    }

    // *character long password with combination of alphabet and number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long and include both letters and numbers",
        alert: false
      });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    const newUser = new userModel({ FullName, Email, password: hashedPassword });
    await newUser.save();

    const mailOptions = {
      from: "sarmadzafar12@gmail.com",
      to: Email,
      subject: "Account Created",
      text: `Welcome ${FullName} To Quantum Car Bits Your Account (${Email}) With This Gmail Has Been Created.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({ message: "Successfully signed up", alert: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//login
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { Email, password } = req.body;

  try {
    const user = await userModel.findOne({ Email }).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found", alert: false });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password", alert: false });
    }

    // If password is valid, proceed with login
    const datasend = {
      _id: user._id,
      FullName: user.FullName,
      Email: user.Email
    };
    console.log(datasend);
    res.status(200).json({ message: "Login successful", alert: true, data: datasend });

    // Generate a random token for password reset
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() +900000; // Token expires in 1 hour

    // Get user IP address and perform GeoIP lookup
    const ipAddress = req.ip;
  
   
    let locationInfo = "";
    if (ipAddress === "::1") {
      locationInfo = "Location: Pakistan, Lahore\n"; // Provide a default message for localhost
    } else {
      const geo = geoip.lookup(ipAddress);
      if (geo && geo.city && geo.country) {
        locationInfo = `Location: ${geo.city}, ${geo.country}\n`;
      } else {
        locationInfo = "Location: Unknown\n";
      }
    }

    // Get user agent information
    const userAgent = req.useragent;
    const browserInfo = userAgent ? `${userAgent.browser} ${userAgent.version}, ${userAgent.os}` : "Unknown";

    // Prepare email content
    const resetLink = `http://localhost:3000/forgotpassword`;
    const mailOptions = {
      from: "sarmadzafar12@gmail.com",
      to: Email,
      subject: "Account Login",
      text: `Welcome ${user.FullName}. You have successfully logged in to your account at ${new Date()}.\n
      ${locationInfo}
      Browser: ${browserInfo}\n\n
      If you didn't do that, please click on the following link to reset your password:\n
      ${resetLink}\n\n
      Ignore this message if you logged into your account.`,
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




//Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sarmadzafar12@gmail.com", 
    pass: "fncoxzpedurlqhzx", 
  },
});


//ChangePassword
app.post("/changepassword", async (req, res) => {
  const { Email, newPassword } = req.body;

  try {
    const user = await userModel.findOne({ Email }).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found", alert: false });
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long and include both letters and numbers",
        alert: false
      });
    }

    // Hash the new password before updating
    const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the number of salt rounds

    // Update user's password with the hashed password
    user.password = hashedPassword;
    await user.save();

    // Generate a password reset token
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 900000; // Token expires in 1 hour
    await user.save();

    const ipAddress = req.ip;
  
   
    let locationInfo = "";
    if (ipAddress === "::1") {
      locationInfo = "Location: Pakistan, Lahore\n"; // Provide a default message for localhost
    } else {
      const geo = geoip.lookup(ipAddress);
      if (geo && geo.city && geo.country) {
        locationInfo = `Location: ${geo.city}, ${geo.country}\n`;
      } else {
        locationInfo = "Location: Unknown\n";
      }
    }

    // Get user agent information
    const userAgent = req.useragent;
    const browserInfo = userAgent ? `${userAgent.browser} ${userAgent.version}, ${userAgent.os}` : "Unknown";

    // Send email with password reset link
    const resetLink = `http://localhost:3000/forgotpassword`;
    const mailOptions = {
      from: "sarmadzafar12@gmail.com",
      to: Email,
      subject: "Password Change Notification",
      text: `Hello ${user.FullName}, Your Password has been changed successfully.\n\n
       ${locationInfo}
      Browser: ${browserInfo}\n\n
        If you did not make this change, please click on the following link to reset your password:\n
        ${resetLink}\n\n
        Ignore this message if you initiated the password change.`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Password changed successfully", alert: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//resetpasswordtoken
app.get("/resetpassword/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    }).exec();

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }

    // Render a page where users can enter a new password
    res.render('resetpassword', { token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Assuming you have a POST route to handle password reset form submission
app.post("/resetpassword/:token", async (req, res) => {
  const token = req.params.token;
  const { newPassword } = req.body;

  try {
    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    }).exec();

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }

    // Validate and hash the new password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long and include both letters and numbers",
        alert: false
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash the new password

    // Update user's password and clear reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//product Section
const schemaProduct = mongoose.Schema({
  name: String,
  price: String,
  category: String,
  description: String,
  image: String
});

const productModel = mongoose.model("product", schemaProduct)


//Upload product API
app.post("/uploadproduct", async (req, res) => {
  console.log(req.body)

  const data = await productModel(req.body)
  const datasave = await data.save()
  res.send({ message: "Upload Successfully" })
})


//Feth Product
app.get("/product", async (req, res) => {

  const data = await productModel.find({})
  res.send(JSON.stringify(data))
})


//delete product

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await productModel.deleteOne({ _id: id });
    if (data.deletedCount === 1) {
      res.send({ success: true, message: "Data deleted successfully" });
    } else {
      res.status(404).send({ success: false, message: "Product not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting data" });
  }
});


//Update API
app.put("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, category, description, image } = req.body;

    // Validate that productId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    // Find the existing product by ID
    const existingProduct = await productModel.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product properties
    existingProduct.name = name;
    existingProduct.price = price;
    existingProduct.category = category;
    existingProduct.description = description;
    existingProduct.image = image;

    // Save the updated product to the database
    const updatedProduct = await existingProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



//paymentt scchema
const paymentSchema = new mongoose.Schema({
  userAddress: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
  },
  productsInCart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  summaryDetails: {
    totalQty: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  isDelivered: { type: Boolean, default: false },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);


//Payment API
app.post('/processPayment', async (req, res) => {
  try {
    // Extract payment details from the request body
    const { userAddress, productsInCart, summaryDetails } = req.body;


    // Create a new payment document
    const payment = new Payment({
      userAddress,
      productsInCart,
      summaryDetails,
    });

    // Save the payment to the database
    const savedPayment = await payment.save();

   

    const mailOptions = {
      from: "sarmadzafar12@gmail.com",
      to: userAddress.email, // Use user's email from userAddress
      subject: "Payment Cash On Deliver",
      text: "Your Order Has Been Placed",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: 'Payment processed successfully', paymentId: savedPayment._id });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//cancle Order API
app.post("/cancelOrder", async (req, res) => {
  try {
    const { orderId } = req.body;

    // Validate that orderId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ error: "Invalid order ID format" });
    }

    // Find the existing order by ID
    const existingOrder = await Payment.findById(orderId);

    if (!existingOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Check if the order is already delivered
    if (existingOrder.isDelivered) {
      return res.status(400).json({ error: "Cannot cancel a delivered order" });
    }

    // Implement your cancellation logic here (e.g., update order status, refund, etc.)

    // Update the order status to cancelled
    existingOrder.isCancelled = true;
    await existingOrder.save();

    // Remove the order document from the database
    await Payment.findByIdAndDelete(orderId);

    // Send an email to notify the user about order cancellation
    const mailOptions = {
      from: "sarmadzafar12@gmail.com",
      to: existingOrder.userAddress.email, // Use user's email from existingOrder.userAddress
      subject: "Order Cancellation Notification",
      text: "Your order has been cancelled successfully.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Order cancelled successfully", alert: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Contact Schema
const contactSchema = mongoose.Schema({
  user_name: String,
  user_email: String,
  subject: String,
  message: String,
});

const ContactModel = mongoose.model("Contact", contactSchema);

app.post("/sendmessage", async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  try {
    // Validate if required fields are present
    if (!user_name || !user_email || !message) {
      return res.status(400).json({ message: "Please fill out all required fields" });
    }

    // Create a new contact document
    const newContact = new ContactModel({
      user_name,
      user_email,
      subject,
      message,
    });

    // Save the contact message to the database
    await newContact.save();

    // Optionally, send a confirmation email to the user
    const mailOptions = {
      from: "your-email@example.com",
      to: user_email,
      subject: "Message Received",
      text: `Dear ${user_name},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nYour Team`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error); // Log the specific error
        // Respond with success message anyway as the contact message is saved
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




server.listen(PORT, () => console.log("Server is running at port: " + PORT));
