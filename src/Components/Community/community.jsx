import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Laura Russo",
    role: "Volontaria",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Aiutare gli animali di House of Paws è stata un'esperienza trasformativa. Ogni giorno sento di fare la differenza nella vita di questi esseri meravigliosi.",
    rating: 5
  },
  {
    name: "Giovanni Ricci",
    role: "Adottante",
    image: "https://images.unsplash.com/photo-1603415526960-f59dd7bfa3e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Adottare il mio gatto attraverso House of Paws è stata un'esperienza fantastica. Il processo è stato semplice e il personale è stato incredibilmente di supporto.",
    rating: 5
  },
  {
    name: "Chiara Neri",
    role: "Volontaria",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Partecipare come volontaria in House of Paws è stata una delle scelte migliori della mia vita. Vedere gli animali trovare una famiglia amorevole è impagabile.",
    rating: 5
  },
  {
    name: "Federico Bianchi",
    role: "Sostenitore",
    image: "https://images.unsplash.com/photo-1603791452906-9d7a0db0f514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "House of Paws è un'organizzazione meravigliosa. Sono felice di poter contribuire a migliorare la vita di tanti animali bisognosi.",
    rating: 4
  },
  {
    name: "Elena Verdi",
    role: "Veterinaria",
    image: "https://images.unsplash.com/photo-1599058918145-8af98b2f764a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Essere la veterinaria di riferimento per House of Paws è un privilegio. Mi assicuro che ogni animale riceva le migliori cure possibili.",
    rating: 5
  }
];

const reviews = [
  {
    name: "Paolo Marini",
    role: "Adottante",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a98222?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Il cane che abbiamo adottato da House of Paws è diventato parte integrante della nostra famiglia. Grazie per averci aiutato a trovare il nostro nuovo amico a quattro zampe.",
    rating: 5
  },
  {
    name: "Martina Ferrari",
    role: "Sostenitrice",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Supporto House of Paws da diversi anni. Sono una realtà affidabile e trasparente che lavora instancabilmente per il benessere degli animali.",
    rating: 4
  },
  {
    name: "Riccardo Rossi",
    role: "Adottante",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Abbiamo adottato un gatto di tre anni da House of Paws e non potremmo essere più felici. L'organizzazione ci ha guidato attraverso tutto il processo.",
    rating: 5
  },
  {
    name: "Alessandro Conti",
    role: "Volontario",
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Essere un volontario in House of Paws mi ha fatto capire quanto amore e dedizione ci siano in questa organizzazione. È un onore farne parte.",
    rating: 5
  },
  {
    name: "Silvia De Luca",
    role: "Veterinaria",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    text: "Come veterinaria, collaborare con House of Paws è una garanzia di qualità. L'amore per gli animali è al centro di tutto ciò che fanno.",
    rating: 5
  }
];

const events = [
  {
    title: "Giornata di Adozione",
    date: "25 Agosto 2024",
    description: "Unisciti a noi per una giornata dedicata all'adozione di cani e gatti in cerca di una nuova casa. Vieni a conoscere i nostri ospiti e trova il tuo nuovo amico a quattro zampe!",
    image: "src/assets/images/giornataAdozioni.webp"
  },
  {
    title: "Evento di Raccolta Fondi",
    date: "10 Settembre 2024",
    description: "Partecipa al nostro evento di raccolta fondi per sostenere House of Paws. Ci saranno giochi, cibo e divertimento per tutta la famiglia!",
    image: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
  },
  {
    title: "Seminario sulla Cura degli Animali",
    date: "15 Ottobre 2024",
    description: "Partecipa al nostro seminario con esperti veterinari che parleranno della cura quotidiana degli animali e delle migliori pratiche per il loro benessere.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
  }
];

const resources = [
  {
    title: "Guida all'Adozione",
    description: "Scarica la nostra guida gratuita che ti aiuterà a prepararti all'adozione di un nuovo animale domestico.",
    link: "/resources/adoption-guide"
  },
  {
    title: "Suggerimenti per la Cura degli Animali",
    description: "Scopri i migliori suggerimenti per prenderti cura del tuo cane o gatto, dalla nutrizione all'esercizio fisico.",
    link: "/resources/pet-care-tips"
  },
  {
    title: "Supporto Veterinario",
    description: "Consulta il nostro elenco di veterinari consigliati per assicurarti che il tuo animale riceva le cure migliori.",
    link: "/resources/veterinary-support"
  }
];

function Community() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#526742] lg:text-5xl">
            Unisciti alla nostra comunità di amanti degli animali
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-700 mx-auto">
            Condividi la tua passione per cani e gatti, scopri le storie dei nostri ospiti di House of Paws in cerca di casa, e sostieni la nostra missione di trovare loro una famiglia amorevole.
          </p>
        </div>

        {/* Sezione Testimonianze */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#526742] text-center mb-4 sm:mb-6">Testimonianze</h3>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm h-full">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      alt={testimonial.role}
                      src={testimonial.image}
                      className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base sm:text-lg font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Sezione Recensioni */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#526742] text-center mb-4 sm:mb-6">Recensioni</h3>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2">
                <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm h-full">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      alt={review.role}
                      src={review.image}
                      className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base sm:text-lg font-medium text-gray-900">{review.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                    {review.text}
                  </p>
                  <div className="mt-3 sm:mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Sezione Eventi */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#526742] text-center mb-4 sm:mb-6">Eventi</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
                <img
                  alt={event.title}
                  src={event.image}
                  className="h-40 sm:h-48 w-full rounded-lg object-cover"
                />
                <h4 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-gray-900">{event.title}</h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sezione Risorse */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#526742] text-center mb-4 sm:mb-6">Risorse</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <div key={index} className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">{resource.title}</h4>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="mt-3 sm:mt-4 inline-block text-sm sm:text-base text-[#526742] font-semibold hover:underline"
                >
                  Scopri di più
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Community;
