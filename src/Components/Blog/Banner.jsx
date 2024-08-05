import React from "react";

const Banner = () => {
  return (
    <section
      class="px-4 py-36 mx-auto w-full  mb-6"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/41/85/67/4185675f9d6a55df8af325f28c481093.jpg')",
      }}
    >
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <h1 class="mb-3 text-4xl font-bold text-dark-green md:text-5xl md:leading-tight md:font-extrabold">
          Benvenuti al nostro Blog
        </h1>
        <p class="mb-6 text-lg text-dark-grey md:text-xl md:leading-normal">
          Scopri il nostro angolo dedicato alla cura di cani e gatti. Offriamo
          articoli e consigli utili per garantire benessere e felicità ai tuoi
          amici pelosi. Unisciti a noi per avere accesso a risorse preziose e
          aggiornamenti importanti per la loro salute!
        </p>
      </div>
    </section>
  );
};

export default Banner;
