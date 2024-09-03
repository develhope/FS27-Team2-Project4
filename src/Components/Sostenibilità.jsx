import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Sostenibilità() {
  const { hash } = useLocation();

  useEffect(() => {
    console.log("ciao");
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        console.log(element);
        console.log(hash);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <section className="bg-pink text-dark-grey">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-dark-green">
            La tua scelta, il loro futuro.
          </h2>

          <p className="mt-4 text-gray-300">
            In House of Paws, crediamo in un futuro più sostenibile per gli
            animali e per il pianeta. Attraverso iniziative di adozione
            consapevole, programmi di sterilizzazione e un'alimentazione
            responsabile, lavoriamo ogni giorno per migliorare la vita dei
            nostri amici a quattro zampe. Scegliendo di sostenerci, contribuisci
            a creare un mondo più giusto e compassionevole
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 " >
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Scegli la sostenibilità
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Scopri perché l'adozione è la scelta più responsabile per te e per
              gli animali. Conosci le storie di chi ha già adottato e come
              questo gesto abbia cambiato la vita di tutti.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Dietro le quinte del rifugio
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Entra nel nostro rifugio e scopri come ci prendiamo cura dei
              nostri ospiti. Dalla cura veterinaria all'affetto dei volontari,
              ogni animale riceve l'attenzione che merita.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Rispettiamo gli animali
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Scopri come le nostre attività sono orientate alla sostenibilità
              ambientale. Dalle scelte alimentari per gli animali alla riduzione
              degli sprechi, facciamo del nostro meglio per proteggere il
              pianeta.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Insieme per un futuro migliore
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Scopri i nostri progetti speciali dedicati alla tutela
              dell'ambiente e al benessere animale. Dalla raccolta di fondi per
              la sterilizzazione alla promozione di iniziative di adozione
              consapevole, siamo sempre impegnati a fare la differenza.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Moda con la coda
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Il nostro shop offre una vasta gamma di prodotti eco-friendly e
              realizzati con materiali sostenibili. Acquistando le nostre
              magliette, tazze e accessori, contribuirai direttamente al
              sostegno dei nostri animali e ad un futuro più sostenibile per
              tutti.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-dark-green">
              Più di un semplice acquisto
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Il tuo modo di vestire può trasformare la vita di un animale. Con
              ogni acquisto, doni una cuccia, un pasto o un giocattolo a un
              amico peloso che ne ha bisogno.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
