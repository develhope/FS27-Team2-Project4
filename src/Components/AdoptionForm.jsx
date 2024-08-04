import { useState } from "react";

function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    petName: "",
    reasons: "",
    experience: "",
    petPreference: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted", formData);
    alert(
      "Grazie, abbiamo ricevuto la tua richiesta, ti ricontatteremo presto."
    );
    
  };

  return (
    <section className="my-14 ">
      <div className=" flex bg-light-green justify-center rounded-2xl px-32">
        <div className="px-2 py-10 mx-auto max-w-7xl">
          <div className="text-center">
            <a href="#" className="inline-block">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
            </a>
            <h2 className="mt-6 text-2xl font-bold text-dark-grey sm:text-3xl md:text-4xl">
              Vuoi conoscere uno dei nostri cuccioli?
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">
              Compila il form se vuoi fare la conoscenza dei nostri amici
              pelosi, lo esamineremo e verrai ricontattato al più presto
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="name"
                className="block font-medium text-gray-400 text-sm"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-400"
              >
                Cognome
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                required
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-400"
              >
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-400"
              >
                Indirizzo
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="occupation"
                className="block text-sm font-medium text-gray-400"
              >
                Occupazione
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="petName"
                className="block text-sm font-medium text-gray-400"
              >
                Nome dell'animale
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="reasons"
                className="block text-sm font-medium text-gray-400"
              >
                Motivi per cui vuoi adottare
              </label>
              <textarea
                id="reasons"
                name="reasons"
                rows="4"
                value={formData.reasons}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-400"
              >
                Che esperienza hai con gli animali?
              </label>
              <textarea
                id="experience"
                name="experience"
                rows="4"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="petPreference"
                className="block text-sm font-medium text-gray-400"
              >
                A quali animali sei interessato?
              </label>
              <select
                id="petPreference"
                name="petPreference"
                value={formData.petPreference}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
              >
                <option value="">Seleziona...</option>
                <option value="dogs">Cani</option>
                <option value="cats">Gatti</option>
                <option value="both">Entrambi</option>
              </select>
            </div>

            <div className="col-span-6 flex items-center gap-2">
              <input
                id="agreeTerms"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor="agreeTerms" className="text-xs">
                Accetto i{" "}
                <a href="#" className="text-dark-green text-xs">
                  Termini e Condizioni
                </a>
              </label>
            </div>

            {/* Pulsante di invio */}
            <div className="col-span-6">
              <button
                type="submit"
                className="bg-dark-green text-white py-2 px-4 rounded mt-12 mb-16 hover:bg-light-green hover:shadow-xl"
              >
                Invia
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdoptionForm;
