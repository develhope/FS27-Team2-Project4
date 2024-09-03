export function AdminAnimalList() {
  const animali = [
    { nome: "Jacko", età: "2", famiglia: "cane" },
    { nome: "Mia", età: "3", famiglia: "gatto" },
    { nome: "Rocker", età: "1", famiglia: "cane" },
    { nome: "Poppy", età: "3", famiglia: "gatto" },
    { nome: "Simba", età: "2", famiglia: "gatto" },
    { nome: "Sadie", età: "3", famiglia: "cane" },
    { nome: "Oliver", età: "4", famiglia: "gatto" },
    { nome: "Toby", età: "5", famiglia: "cane" },
    { nome: "Whiskers", età: "5", famiglia: "gatto" },
    { nome: "Daisy", età: "6 mesi", famiglia: "cane" },
    { nome: "Bailey", età: "2", famiglia: "cane" },
    { nome: "Luna", età: "1", famiglia: "gatto" },
    { nome: "Lucy", età: "5", famiglia: "cane" },
    { nome: "Rocky", età: "3", famiglia: "cane" },
    { nome: "Molly", età: "4", famiglia: "cane" },
    { nome: "Coco", età: "8 mesi", famiglia: "cane" },
    { nome: "Max", età: "2", famiglia: "cane" },
    { nome: "Buddy", età: "3", famiglia: "cane" },
    { nome: "Bella", età: "3", famiglia: "gatto" },
  ];

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-4">
        {animali.map((animale, index) => (
          <li key={index} className="text-xs mb-3">
            {animale.nome} - {animale.famiglia}
          </li>
        ))}
      </ul>
    </div>
  );
}
