import React from 'react';

const Filters = ({ categories, onFilter, currentFilter }) => {

  const filterCard = (category) => {
    if (category === "cura gatti") return "bg-light-purple text-white font-semibold";
    if (category === "cura cani") return "bg-light-blue text-white font-semibold";
    return "bg-light-green text-white font-semibold";
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center w-full rounded-md border-pink-300 p-4 md:gap-5" aria-label="Tabs">
      <button
        className={`shrink-0 rounded-lg py-2 px-4 text-xs md:text-sm font-medium text-dark-grey hover:bg-light-grey hover:text-dark-grey ${currentFilter === null ? 'bg-light-green text-white font-semibold' : ''}`}
        onClick={() => onFilter(null)}
      >
        Tutti
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onFilter(category)}
          className={`shrink-0 rounded-lg py-2 px-4 text-xs md:text-sm font-medium text-dark-grey hover:bg-light-grey hover:text-dark-grey ${currentFilter === category ? filterCard(category) : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;

