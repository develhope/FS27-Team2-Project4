import React from 'react';

const DiventaVolontario = () => {
  return (
    <div className="w-full text-center">
      <div className="bg-gray-200 p-10">
        <h1 className="m-0">Main info about the page</h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="p-10 bg-white">
        <h2 className="mb-5">Diventa Volontario</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="p-10 bg-gray-100">
        <h3 className="mb-3">Vuoi diventare Volontario?</h3>
        <p>Compila il form per essere ricontattato</p>
        <form className="flex flex-col items-center">
          <label htmlFor="name" className="mt-3 mb-1">Nome</label>
          <input type="text" id="name" name="name" required className="w-4/5 max-w-md p-2 mb-4 border" />

          <label htmlFor="surname" className="mt-3 mb-1">Cognome</label>
          <input type="text" id="surname" name="surname" required className="w-4/5 max-w-md p-2 mb-4 border" />

          <label htmlFor="email" className="mt-3 mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-4/5 max-w-md p-2 mb-4 border" />

          <label htmlFor="message" className="mt-3 mb-1">Messaggio</label>
          <textarea id="message" name="message" required className="w-4/5 max-w-md p-2 mb-4 border"></textarea>

          <button type="submit" className="py-2 px-4 bg-green-500 text-white cursor-pointer hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiventaVolontario;