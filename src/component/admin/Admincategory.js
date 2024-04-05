// Admincategory.jsx
import React from 'react';
import "../admin//admincategory.css";

function Admincategory({ categories, onClick, selectedCategory }) {
  return (
    <div>
      <form>
        <select onChange={(e) => onClick(e.target.value)} value={selectedCategory || "other"}>
          <option value={"other"}>ALL Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Admincategory;
