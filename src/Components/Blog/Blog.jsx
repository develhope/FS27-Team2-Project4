
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Banner from './Banner';
import ArticleCard from './ArticleCard';
import Filters from './Filters';
import articles from './Articles';

const categories = ["cura gatti", "cura cani", "problemi di salute", "altro"];

const Blog = () => {
  const [filter, setFilter] = useState(null);
  const [displayedArticles, setDisplayedArticles] = useState(articles.slice(0, 4));

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleLoadMore = () => {
    const currentLength = displayedArticles.length;
    const moreArticles = articles.slice(currentLength, currentLength + 4);
    setDisplayedArticles([...displayedArticles, ...moreArticles]);
  };

  const filteredArticles = filter
    ? articles.filter(article => article.tags.includes(filter)).slice(0, displayedArticles.length)
    : displayedArticles;

    const { hash } = useLocation();

    useEffect(() => {
      console.log("ciao")
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          console.log(element)
          console.log(hash)
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

  return (
    <div>
      <Banner />
      <Filters 
        categories={categories} 
        onFilter={handleFilter} 
        currentFilter={filter} 
      />
      <div className="articles grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-9">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleLoadMore}
          className="bg-light-green text-white py-4 px-8 rounded-lg hover:bg-dark-green font-semibold"
        >
          Load More
        </button>
      </div>

      <section className="py-14 max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-light-green md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>

              <h3 className="text-3xl text-white font-bold">
                Rimani Aggiornato!
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Iscriviti alla nostra newsletter per ricevere i migliori consigli sulla cura di cani e gatti, articoli esclusivi e ultime novità direttamente nella tua casella di posta. Non perdere nulla!
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center justify-center rounded-lg p-1 sm:max-w-md sm:mx-auto">
                <input
                  type="email"
                  placeholder="Inserisci la tua email"
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button
                  className="p-2 px-3 rounded-r-lg font-medium text-dark-grey bg-pink hover:bg-light-grey active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                >
                  Iscriviti
                </button>
              </form>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


