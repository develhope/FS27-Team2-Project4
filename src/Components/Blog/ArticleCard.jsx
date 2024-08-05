import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ id, image, title, description, tags }) => {
  return (
    <div className="flex flex-col items-center">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col h-[490px] w-80">
        <img alt={title} src={image} className="h-56 w-full object-cover" />

        <div className="bg-white p-4 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg text-gray-900 mb-2">{title}</h3>
            <p className="line-clamp-3 text-sm text-dark-grey mb-4">
              {description}
            </p>
          </div>

            <Link
              to={`/article/${id}`}
              className="mx-auto inline-block text-xs rounded-md border border-gray-700 bg-white text-gray-700 px-4 py-2 hover:bg-gray-700 hover:text-white transition"
            >
              Scopri di più
            </Link>

            <div>
            <div className="flex flex-wrap justify-center tags gap-4 mb-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-dark-grey p-1 bg-light-grey rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;

