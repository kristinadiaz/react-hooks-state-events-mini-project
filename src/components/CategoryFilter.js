import React from "react";

function CategoryFilter({ categories, handleClick  }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => 
      <button 
      onClick={handleClick}
      key={category}
      >
        {category}
      </button>
      )}
    </div>
  );
}

export default CategoryFilter;
