import React from "react";
import ArticleCard from "./Blog/ArticleCard";
import articles from "./Blog/Articles";

export default function BlogPreview() {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-black relative">
      <div className="container mx-auto flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-dark-green mb-4 sm:text-4xl lg:text-5xl">
          <span className=" block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">
            {" "}
            Suggerimenti e Curiosità per tutti gli Amanti degli Animali
          </span>
        </h2>
        <p className="mb-10 text-lg text-dark-grey">
          Immergiti nel nostro blog e scopri articoli interessanti e consigli
          utili per rendere felici e sani i tuoi amici a quattro zampe.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {previewArticles.map((articolo) => (
            <ArticleCard
              key={articolo.id}
              id={articolo.id}
              image={articolo.image}
              title={articolo.title}
              description={articolo.description}
              tags={articolo.tags}
            />
          ))}
        </div>
        <div className="text-center">
          <a
            href="./Blog"
            className="bg-light-green text-white px-4 py-2 rounded-lg hover:bg-dark-green"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  );
}
