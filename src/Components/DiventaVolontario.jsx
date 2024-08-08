import React from 'react';

const DiventaVolontario = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form submitted');
  };

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="p-10 bg-gray-100">
        <h3 className="mb-2.5">Vuoi diventare Volontario?</h3>
        <p>Compila il form per essere ricontattato</p>
        
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mt-2.5 mb-1.5">Nome</label>
          <input type="text" id="name" name="name" required className="w-4/5 max-w-xs p-2.5 mb-3.5 border" />

          <label htmlFor="surname" className="mt-2.5 mb-1.5">Cognome</label>
          <input type="text" id="surname" name="surname" required className="w-4/5 max-w-xs p-2.5 mb-3.5 border" />

          <label htmlFor="email" className="mt-2.5 mb-1.5">Email</label>
          <input type="email" id="email" name="email" required className="w-4/5 max-w-xs p-2.5 mb-3.5 border" />

          <label htmlFor="message" className="mt-2.5 mb-1.5">Messaggio</label>
          <textarea id="message" name="message" required className="w-4/5 max-w-xs p-2.5 mb-3.5 border"></textarea>

          <button
          type="submit"
          style={{
          display: 'block', 
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          marginTop: '20px',
          border: '2px solid yellow'
        }}
    >
    Submit
    </button>

     </form>
    </div>
   </div>
  );
};

export default DiventaVolontario;