import React from 'react';
import "./model2.css";

const Model2 = ({ categories, onClick, selectedCategory }) => {
  return (
    <>
      <div className="select">
        Category
        <div className="name">
          <form className="box2">
            {categories.map((category) => (
              <div key={category}>
                <label>{category}</label>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => onClick(category)}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default Model2;
