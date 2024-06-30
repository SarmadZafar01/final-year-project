
import {useRef, useState} from 'react';
import NavBar from '../navb';
import "../navbar.css";
import "./contact.css";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; 
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/userSlice';
import { useSelector} from 'react-redux';

const Contact=()=> {


  const form = useRef();

  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [chat, setchat]= useState("false");

  const handleClick = () => {
    if (user?._id) {
      setchat(true);
    } else {
      toast.error('Please log in to proceed');
      navigate('/login');
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krbjiud', 'template_r9n1u1u', form.current, 'sw6pURLKN4cOtcUwW')
      .then((result) => {
          console.log(result.text);
          toast('message send successfully')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section>
    <div>
      <NavBar />
      <div className="box20">
      <div className="text2">
        Leave a Message
        <p>We Love To Here You</p>
      </div>
      <div className="Mail">
        <form ref={form} onSubmit={sendEmail}>
          <input type="Text" placeholder="Enter Name"  name="user_name"></input>
          <input type="Email" placeholder="Enter Email" name="user_email"></input>
          <input type="Text" placeholder="Subject" name="Subject"></input>
          <div className="Mail2">
          <textarea name="message"> </textarea>
          <button>Send Message</button>
          </div>
        </form>
        {chat && (
        <div className="Cbutton" onClick={ handleClick}>
          <button><Link to="/chat">Chat</Link></button>
        </div>
        )}
      </div>
      </div>
      
    
    </div>
    </section>
  );
}

export default Contact;
