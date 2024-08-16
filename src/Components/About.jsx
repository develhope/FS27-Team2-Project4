import React from 'react';

const teamMembers = [
  {
    name: 'Astrid',
    role: 'Fondatrice',
    imageUrl: 'path/to/astrid.jpg',
    description: 'scrivere qualcosa su di noi',
  },
  {
    name: 'Francesca',
    role: 'Volontaria',
    imageUrl: 'path/to/francesca.jpg',
    description: 'scrivere qualcosa su di noi',
  },
  {
    name: 'Alessandro',
    role: 'Volontario',
    imageUrl: 'path/to/ale.jpg',
    description: 'scrivere qualcosa su di noi',
  },
  {
    name: 'Manuel',
    role: 'Volontario',
    imageUrl: 'path/to/manuel.jpg',
    description: 'scrivere qualcosa su di noi',
  },
  {
    name: 'Aurora',
    role: 'Volontaria',
    imageUrl: 'path/to/aurora.jpg',
    description: 'scrivere qualcosa su di noi',
  },
  {
    name: 'Antonio',
    role: 'Volontario',
    imageUrl: 'path/to/antonio.jpg',
    description: 'scrivere qualcosa su di noi',
  },
];

export default function About() {
  return (
    <div className="bg-light-grey py-10">
      <div className="container mx-auto text-center">
        <div className="bg-light-green py-10 px-6 mb-10 rounded-lg shadow-lg mt-0">
          <h1 className="text-dark-purple text-5xl font-bold mb-4">Benvenuti al Rifugio degli Animali</h1>
          <p className="text-dark-grey text-lg py-12"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <h2 className="text-dark-green text-4xl font-bold mb-8">Chi Siamo</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="max-w-xs m-4 bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-dark-purple text-2xl font-semibold">{member.name}</h3>
                <p className="text-soft-grey text-sm">{member.role}</p>
                <p className="text-dark-grey mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}