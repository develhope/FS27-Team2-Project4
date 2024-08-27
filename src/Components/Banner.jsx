import React, { useState, useEffect } from 'react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/isolated-shot-ginger-cat-looking-retriever-dog-looking-camera-white-surface_181624-43633.jpg?t=st=1724739570~exp=1724743170~hmac=21853cabfb0452693676efb414a7a6dc4332089da30b804057fca50f611ceaca&w=1800',
      title: 'Il tuo cuore è pronto per un nuovo amore? ',
      subtitle: 'Scopri i nostri animali in cerca di casa e trova il tuo amico perfetto!',
      buttonText: 'Scopri di più',
      buttonLink: './adozioni',
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-dog-front-legs_23-2148423572.jpg?t=st=1724739414~exp=1724743014~hmac=bc38b25c26c0258cebd01b57c3050f60dd42f956c02a974d3f1c53d78faca107&w=2000',
      title: 'Fai la differenza!',
      subtitle: 'Contribuisci a migliorare la vita dei nostri amici a quattro zampe. Ogni donazione è preziosa.',
      buttonText: 'Dona Ora',
      buttonLink: './donate',
    },
    {
      image: 'https://img.freepik.com/free-photo/chubby-domestic-cat-leaning-brown-puppy-lying-white-surface_181624-45927.jpg?t=st=1724727389~exp=1724730989~hmac=98bc05d91ce22d6d40bf84d317513d1739688321e69ea0b988c362aa7481a3e2&w=1800',
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
