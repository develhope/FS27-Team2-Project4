import React, { useState, useEffect } from 'react';
import adopt from "../assets/images/homepagedopt.jpg"
import blog from "../assets/images/homepageblog.jpg"

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: adopt,
      title: 'Il tuo cuore è pronto per un nuovo amore? ',
      subtitle: 'Scopri i nostri animali in cerca di casa e trova il tuo amico perfetto!',
      buttonText: 'Scopri di più',
      buttonLink: './adozioni',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/962745661688774656/1278105403984580608/image.png?ex=66cf97ea&is=66ce466a&hm=ee459c38f3c578381999ed6636e001f0717fb930218a6a53b3bed21044597d44&',
      title: 'Fai la differenza!',
      subtitle: 'Contribuisci a migliorare la vita dei nostri amici a quattro zampe. Ogni donazione è preziosa.',
      buttonText: 'Dona Ora',
      buttonLink: './donate',
    },
    {
      image: blog,
      title: 'Non sai da dove iniziare? ',
      subtitle: 'Visita il nostro blog per trovare articoli e suggerimenti pratici per accogliere e curare i tuoi animali con amore.',
      buttonText: 'Scopri di più',
      buttonLink: './blog',
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[32rem] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ 
            backgroundImage: `url(${slide.image})`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="h-full w-full flex items-center justify-center text-center p-4">
            <div className="bg-white p-8 bg-opacity-50 drop-shadow-2xl hover:bg-opacity-80">
              <p className="text-5xl text-dark-green drop-shadow-lg font-bold mb-4">{slide.title}</p>
              <p className="text-2xl text-dark-grey drop-shadow-lg mb-10">{slide.subtitle}</p>
              <a href={slide.buttonLink} className="bg-pink text-dark-grey px-4 py-2 rounded-lg drop-shadow-lg hover:bg-dark-green hover:text-light-grey">
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-purple-800' : 'bg-purple-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
