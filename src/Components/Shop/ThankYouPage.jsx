import { useNavigate } from "react-router-dom";

export function Thankyoupage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-20">
      <p className="text-light-blue text-2xl sm:text-3xl md:text-4xl font-bold">
        Grazie per il tuo ordine!
      </p>
      <p className="  ">
        Riceverai il riepilogo alla tua mail con tutte le informazioni sulla
        spedizione.
      </p>
      <button
        className="flex items-center gap-3 bg-light-green rounded-lg text-white font-semibold p-4"
        onClick={() => navigate("/")}
      >
        Torna alla home{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </button>
    </div>
  );
}
