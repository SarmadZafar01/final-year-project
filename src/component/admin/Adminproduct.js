import React, { useEffect, useState } from 'react';
import Adminsiderbar2 from './Adminsiderbar2';
import Adminsearchbar from './adminsearchbar';
import "../admin/Adminproduct.css";
import { Link } from 'react-router-dom';
import HomecardAdmin from './HomeCardAdmin';
import { useSelector } from 'react-redux';
import "../admin/HomeCardAdmin.css";
import Admincategory from './Admincategory';
import UpdateProduct from './adminupdateproduct'; // Import the UpdateProduct component

function AdminProduct() {
  const productData = useSelector((state) => state.product.productList);
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const [loading, setLoading] = useState(true);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  const productsPerPage = 6;
  const totalPages = Math.ceil(productData.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    let filteredData = productData;
    if (selectedCategory) {
      filteredData = filteredData.filter((el) =>
        el.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (searchTerm) {
      filteredData = filteredData.filter((el) =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setDataFilter(filteredData.slice(startIndex, endIndex));
    setLoading(false);
  }, [productData, searchTerm, selectedCategory, currentPage]);

  const handleFilterProduct = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    setCurrentPage(1);
  };

  const handleDeleteProduct = (id) => {
    setDataFilter((prevData) => prevData.filter((product) => product._id !== id));
  };



  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Adminsiderbar2 />
      <Adminsearchbar />
      <div className="AdminPro">Product</div>
      <div className="B11100">
        <button type="button"><Link to="/AddProduct">Create Now</Link></button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="FuatureProduct">
          <div className="CATO">
            {categoryList.length > 0 && (
              <Admincategory
                categories={categoryList}
                onClick={handleFilterProduct}
                selectedCategory={selectedCategory}
              />
            )}
          </div>
          <main>
          
            <div className="products">
              {dataFilter.map((el) => (
                <HomecardAdmin
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                  onDelete={handleDeleteProduct}
                  // Pass the function to the child component
                />
              ))}
            </div>
          </main>
          
          <div className="pagination1">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        
        </div>
      )}
    </>
  );
}

export default AdminProduct;