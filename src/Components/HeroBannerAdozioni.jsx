import heroAdoption from "../assets/images/hero-adoption.jpg";
import heroAdoptionGatti from "../assets/images/hero-adoption-cat.jpg";
import heroAdoptionCani from "../assets/images/hero-adoption-dog.jpg";
import heroAdoptionCuore from "../assets/images/hero-adoption-cuore.jpg";
import { useEffect, useState } from "react";

export function HeroBannerAdozioni({ filterCard }) {
  const [backgroundImage, setBackgroundImage] = useState(heroAdoption);
  const [displayCaption, setDisplayCaption] = useState("0");

  useEffect(() => {
    if (filterCard === "gatto") {
      setBackgroundImage(heroAdoptionGatti);
      setDisplayCaption("0");
    } else if (filterCard === "cane") {
      setBackgroundImage(heroAdoptionCani);
      setDisplayCaption("0");
    } else if (filterCard === "cuore") {
      setBackgroundImage(heroAdoptionCuore);
      setDisplayCaption("0");
    } else if (filterCard === "tutti") {
      setBackgroundImage(heroAdoption);
      setDisplayCaption("1");
    }
    console.log(displayCaption);
  }, [filterCard, displayCaption, backgroundImage]);

  return (
    <section
      className="relative bg-contain bg-center bg-no-repeat h-96"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div style={{ opacity: displayCaption }}>
        <div className="absolute inset-0 bg-white/75 sm:bg-white/0 "></div>
        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:flex-col lg:items-center lg:px-8">
          <div className="lg:flex outline p-3 rounded-3xl outline-white">
            <h1 className="text-lg font-extrabold sm:text-5xl text-dark-green">
              NON COMPRARE, ADOTTA!
              <br />
              <strong className="font-extrabold text-[#92aa7f]">
                Adotta un animale e trasforma una vita.
              </strong>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
