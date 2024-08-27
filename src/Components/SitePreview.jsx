import React from 'react';

const PreviewCard = ({ image, title, link }) => (
  <div className="relative group flex justify-center items-center h-full w-full">
    <img
      className="object-center object-cover h-full w-full transition-transform duration-300 ease-in-out transform group-hover:scale-95 group-hover:bg-white group-hover:opacity-90"
      src={image}
      alt={title}
    />
    <a
      href={link}
      className=" text-dark-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-5 z-10 absolute text-base font-medium leading-none text-gray-800 py-4 w-36 bg-pink transition-transform duration-300 ease-in-out transform group-hover:scale-95"
    >
      {title}
    </a>
    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-5 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
  </div>
);

export default function SitePreview() {
  const previews = [
    {
      image: 'https://media.discordapp.net/attachments/1225956010959835257/1277368196453761134/Screenshot_2024-08-25_223114.png?ex=66ce3ad6&is=66cce956&hm=58f13b1df431c347a5fea3481e2a42a981b62323bedfd42e3ac4e738a3f99f47&=&format=webp&quality=lossless&width=1216&height=1138',
      title: 'Shop',
      link: '/shop'
    },
    {
      image: 'https://img.freepik.com/free-photo/elegant-woman-black-suit-with-black-bulldog_1157-33146.jpg?t=st=1724753629~exp=1724757229~hmac=f089403076001639dc0169c80dd9d8b28ab9164022481ca17bf2b6954a262359&w=1800',
      title: 'Community',
      link: '/community'
    },
    {
      image: 'https://img.freepik.com/free-photo/beautiful-pet-portrait-small-dog-cat_23-2149218512.jpg?t=st=1724753549~exp=1724757149~hmac=e98fe4aab115c68f3fad02d87c5e0b5e1c2edad73d118abd59c2f05817a25d2f&w=1480',
      title: 'Volontariato',
      link: '/diventavolontario'
    }
  ];

  return (
    <div className="flex justify-center items-center px-20 mb-20">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl xl:text-4xl font-light leading-7 xl:leading-9 text-dark-green">
              Esplora il nostro sito
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 w-full h-[90vh]">
            
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
