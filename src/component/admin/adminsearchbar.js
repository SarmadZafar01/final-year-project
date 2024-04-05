// Adminsearchbar.jsx
import React, { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/productSlice';
import "../admin/adminsearchbar.css";

function Adminsearchbar() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className="TopBar">
      <form>
        <input
          type="text"
          placeholder="Search Item"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <div className="Icon">
          <CiLogout />
        </div>
      </form>
    </div>
  );
}

export default Adminsearchbar;
