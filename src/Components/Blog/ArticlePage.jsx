import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import articles from "./Articles";
import { ErrorPage } from "./ErrorPage";

function ArticlePage({ setTag }) {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));


  useEffect(() => {
    console.log(article.tags)
    if (article.tags.includes("cura gatti")) {
      setTag("gatti");
    } else if (article.tags.includes("cura cani")) {
      setTag("cani");
    } else {
      setTag("")
    }
    return () => {setTag("")}
  }, []);

  // const bgColor = article.tags.includes("cura gatti")
  //   ? "bg-dark-purple"
  //   : article.tags.includes("cura cani")
  //   ? "bg-dark-blue"
  //   : "bg-light-green";

  // const textColor =
  //   article.tags.includes("cura gatti") || article.tags.includes("cura cani")
  //     ? "text-light-grey"
  //     : "text-dark-grey";

  // const elementText =
  //   article.tags.includes("cura gatti") || article.tags.includes("cura cani")
  //     ? "hover:text-yellow"
  //     : "hover:text-pink";

  // const elementBg =
  //   article.tags.includes("cura gatti") || article.tags.includes("cura cani")
  //     ? "bg-yellow"
  //     : "bg-pink";

  const renderContent = () => {
    switch (article.id) {
      case 2:
        return (
          <div>
            <div className="mx-5 my-3 text-sm">
              <a href="" className="text-red-600 font-bold tracking-widest">
                {article.tags[0]}
              </a>
            </div>
            <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none my-8">
              {article.title}
            </div>

            <div className="mx-5">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="px-5 flex ">{article.content}</div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="mx-5 my-3 text-sm">
              <a href="" className="text-red-600 font-bold tracking-widest">
                {article.tags[0]}
              </a>
            </div>
            <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none my-8">
              {article.title}
            </div>

            <div className="mx-5">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="px-5 flex ">{article.content}</div>
          </div>
        );
      default:
        return <ErrorPage />;
    }
  };

  return (
    <div className="relative">
      <main className="w-full md:w-2/4 mx-auto justify-center">
        {renderContent()}
      </main>
    </div>
  );
}

export default ArticlePage;
