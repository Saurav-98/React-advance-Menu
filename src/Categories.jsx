import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      <button
        key="all"
        className="filter-btn"
        onClick={() => filterItems('all')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="filter-btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
