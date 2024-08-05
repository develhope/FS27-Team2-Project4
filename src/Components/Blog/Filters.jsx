import React from 'react';

const Filters = ({ categories, onFilter, currentFilter }) => {

  const filterCard = (category) => {
    if (category === "cura gatti") return "bg-light-purple";
    if (category === "cura cani") return "bg-light-blue";
    return "bg-light-green";
  };


  return (
    <div className="flex gap-5 justify-center w-full rounded-md border-pink-300" aria-label="Tabs">
      <button
        className={`shrink-0 rounded-lg p-2 text-sm font-medium text-dark-grey hover:bg-light-grey hover:text-dark-grey ${currentFilter === null ? 'bg-light-green text-dark-grey' : ''}`}
        onClick={() => onFilter(null)}
      >
        Tutti
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onFilter(category)}
          className={`shrink-0 rounded-lg p-2 text-sm font-medium text-dark-grey hover:bg-light-grey hover:text-dark-grey ${currentFilter === category ? filterCard(category) : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};


export default Filters;
