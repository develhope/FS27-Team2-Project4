

export function AdminProductList() {
  const prodotti = [
    { nome: "Paw T-shirt", prezzo: "20,00 €" },
    { nome: "Paw Shopper Bag", prezzo: "12,00 €" },
    { nome: "Paw fisherman hat", prezzo: "15,00 €" },
    { nome: "Paw felpa", prezzo: "35,00 €" },
    { nome: "Paw calendario", prezzo: "8,00 €" },
    { nome: "Tazza HOP", prezzo: "10,00 €" },
  ];
  return (
    <div>
      <ul>
        {prodotti.map((prodotto, index) => (
          <li key={index} className="text-xs mb-3">
            {prodotto.nome} - {prodotto.prezzo}
          </li>
        ))}
      </ul>
    </div>
  );
}
