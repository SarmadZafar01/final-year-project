import React, { useEffect, useState } from "react";
import NavBar from "../navb";
import Hero from "./hero";
import Select from "./Select";
import Model2 from "./model2";
import "./home.css";
import "./HomeCard.css";
import Footer from "../fotter";
import { useSelector } from "react-redux";
import Homecard from "./Homecard";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  const searchTerm = useSelector((state) => state.product.searchTerm);

  const categoryList = [...new Set(productData.map((el) => el.category))];
  const productsPerPage = 12; // Number of products to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(productData.length / productsPerPage);

  // Display the first page initially
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of products to display based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  // Display products based on pagination
  const [dataFilter, setDataFilter] = useState(productData.slice(startIndex, endIndex));

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const filter = productData.filter(
        (el) => el.category.toLowerCase() === selectedCategory.toLowerCase()
      ).slice(startIndex, endIndex);
      setDataFilter(filter);
    } else if (searchTerm) {
      const filter = productData.filter(
        (el) => el.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(startIndex, endIndex);
      setDataFilter(filter);
    } else {
      setDataFilter(productData.slice(startIndex, endIndex));
    }
  }, [selectedCategory, productData, searchTerm, currentPage]);

  const handleFilterProduct = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <NavBar />
      <Hero />
      <Select />
    
      <div className="Filter">
        {categoryList.length > 0 && (
          <Model2
            categories={categoryList}
            onClick={handleFilterProduct}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
      <main>
        <div className="products">
          {dataFilter.map((el) => (
            <Homecard key={el.id} id={el._id} image={el.image} name={el.name} price={el.price} />
          ))}
        </div>
      </main>
      <Footer />
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Home;
