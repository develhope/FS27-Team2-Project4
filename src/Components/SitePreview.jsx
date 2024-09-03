import React from 'react';
import volontariato from "../assets/images/homepagevolontariato.jpg";
import community from "../assets/images/homepagecommunity.jpg";
import shop from "../assets/images/ORSEQL12.jpg";

const PreviewCard = ({ image, title, link }) => (
  <div className="relative group flex justify-center items-center h-full w-full">
    <img
      className="object-center object-cover h-full w-full transition-transform duration-300 ease-in-out transform group-hover:scale-95 group-hover:bg-white group-hover:opacity-90"
      src={image}
      alt={title}
    />
    <a
      href={link}
      className=" text-dark-grey flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-5 z-10 absolute text-base font-medium leading-none text-gray-800 py-4 w-36 bg-pink transition-transform duration-300 ease-in-out transform group-hover:scale-95"
    >
      {title}
    </a>
    <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-5 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
  </div>
);

export default function SitePreview() {
  const previews = [
    {
      image: shop,
      title: 'Shop',
      link: '/shop'
    },
    {
      image: community,
      title: 'Community',
      link: '/community'
    },
    {
      image: volontariato,
      title: 'Volontariato',
      link: '/diventavolontario'
    }
  ];

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-20 mb-20">
      <div className="2xl:mx-auto 2xl:container py-12">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-7 sm:leading-9 text-dark-green">
              Esplora il nostro sito
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 w-full">
            <div className="lg:col-span-1 lg:row-span-2">
              <PreviewCard
                image={previews[0].image}
                title={previews[0].title}
                link={previews[0].link}
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-1">
              <PreviewCard
                image={previews[1].image}
                title={previews[1].title}
                link={previews[1].link}
              />
            </div>
            <div className="lg:col-span-1 lg:row-span-1">
              <PreviewCard
                image={previews[2].image}
                title={previews[2].title}
                link={previews[2].link}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
