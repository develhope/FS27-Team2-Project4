import React from "react";
import FAQItem from "./FAQItem";

const FAQPage = () => {
  const faqs = [
    {
      question: "Come posso adottare un animale dal vostro rifugio?",
      answer:
        "Per adottare un animale dal nostro rifugio, puoi visitare la nostra struttura durante gli orari di apertura o consultare il nostro sito web dove troverai le schede dettagliate di tutti gli animali disponibili. Una volta individuato l'animale che ti interessa, il nostro staff ti guiderà attraverso un semplice processo di adozione che include un colloquio conoscitivo e la compilazione di alcuni moduli necessari.",
    },
    {
      question: "Quali sono i requisiti necessari per l'adozione?",
      answer:
        "Richiediamo che gli adottanti abbiano almeno 18 anni e siano in grado di fornire un ambiente sicuro e amorevole per l'animale. Potrebbe essere necessario fornire una prova di residenza e, in alcuni casi, una referenza veterinaria. Il nostro obiettivo è assicurare che ogni animale trovi una casa adatta alle sue esigenze specifiche.",
    },
    {
      question: "Posso diventare volontario presso il rifugio?",
      answer:
        "Assolutamente sì! Siamo sempre alla ricerca di volontari appassionati che possano aiutare con varie attività come la cura quotidiana degli animali, le passeggiate, gli eventi di raccolta fondi e molto altro. Puoi compilare il modulo di richiesta volontariato sul nostro sito web o visitare il rifugio per maggiori informazioni su come puoi contribuire.",
    },
    {
      question: "Quali tipi di donazioni accettate e come posso contribuire?",
      answer:
        "Accettiamo diversi tipi di donazioni, tra cui contributi monetari, cibo per animali, coperte, giocattoli e forniture mediche. Puoi effettuare una donazione direttamente presso il rifugio, tramite il nostro sito web o partecipando ai nostri eventi di raccolta fondi. Ogni contributo, grande o piccolo, fa una grande differenza nella vita degli animali che accudiamo.",
    },
    {
      question: "Cosa devo fare se trovo un animale randagio o smarrito?",
      answer:
        "Se trovi un animale randagio o smarrito, ti consigliamo di portarlo al rifugio il prima possibile o contattare le autorità locali competenti. Il nostro staff procederà a verificare la presenza di un microchip e farà il possibile per rintracciare il proprietario. Nel frattempo, ci assicureremo che l'animale riceva tutte le cure necessarie.",
    },
    {
      question: "Quali sono gli orari di apertura del rifugio e devo prenotare una visita?",
      answer:
        "Il rifugio è aperto dal lunedì al sabato, dalle 9:00 alle 18:00. Non è necessario prenotare una visita, ma se desideri un tour guidato o hai esigenze specifiche, ti consigliamo di contattarci in anticipo per assicurarci di poterti assistere al meglio. Siamo sempre felici di accogliere visitatori e potenziali adottanti!",
    },
  ];

  return (
    <div className="my-10 flex flex-col">
      <h3 className="text-3xl self-start font-bold text-dark-grey px-16">F.A.Q</h3>
      <div className="space-y-4 my-9">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;