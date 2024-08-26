import manuel from "../assets/images/manuel.jpg";
import Alessandro from "../assets/images/Alessandro.jpg"
import Aurora from "../assets/images/aurora.jpg"

const teamMembers = [
  {
    name: "Astrid",
    role: "Fondatrice",
    imageUrl: "path/to/astrid.jpg",
    description: 'Astrid è il cuore e l’anima del Rifugio degli Animali. Con una passione inesauribile per il benessere degli animali, ha trasformato il suo sogno in realtà fondando il rifugio nel 2010. Grazie alla sua leadership e dedizione, il rifugio è diventato un faro di speranza per centinaia di animali bisognosi, garantendo loro una seconda possibilità di trovare una casa amorevole.',
  },
  {
    name: "Francesca",
    role: "Responsabile Comunicazioni",
    imageUrl: "path/to/francesca.jpg",
    description: 'Francesca è la voce del Rifugio degli Animali, responsabile di diffondere il nostro messaggio di amore e cura per gli animali a un pubblico sempre più vasto. Con una grande esperienza nella comunicazione e una passione per le cause sociali, gestisce con efficacia le nostre campagne sui social media, coordina le relazioni con i media e assicura che ogni storia degli animali del rifugio raggiunga il cuore delle persone. Grazie al suo lavoro, il rifugio ha potuto sensibilizzare e coinvolgere la comunità, aumentando le adozioni e il supporto ai nostri progetti.',
  },
  {
    name: "Alessandro",
    role: "Responsabile Adozioni",
    imageUrl: Alessandro,
    description: 'Alessandro è il pilastro dietro il processo di adozione del Rifugio degli Animali. Con un incredibile dedizione e una profonda empatia, si assicura che ogni animale trovi la famiglia giusta. Alessandro lavora instancabilmente per conoscere ogni animale, comprendere le loro esigenze uniche e abbinarli a famiglie amorevoli e compatibili. Grazie al suo impegno, centinaia di animali hanno trovato case sicure e affettuose, trasformando il loro futuro in una storia di successo.',
  },
  {
    name: "Manuel",
    role: "Coordinatore Adozioni a Distanza",
    imageUrl: manuel,
    description: 'Manuel è il nostro Coordinatore delle Adozioni a Distanza, responsabile di gestire e ottimizzare il programma che consente ai sostenitori di contribuire al benessere degli animali attraverso supporto economico mirato. Con grande attenzione ai dettagli e abilità organizzative, Manuel gestisce le richieste di adozione a distanza, fornisce aggiornamenti regolari ai sostenitori e garantisce che ogni contributo venga utilizzato in modo efficace per migliorare le vite degli animali. Il suo lavoro non solo aiuta a mantenere il rifugio operativo, ma costruisce anche una comunità di sostenitori coinvolti e appassionati, creando un legame speciale tra gli animali e i loro adottanti a distanza.',
  },
  {
    name: "Aurora",
    role: "Consulente Comportamentale per Animali",
    imageUrl: Aurora ,
    description: 'Aurora è la nostra esperta consulente comportamentale, dedicata a comprendere e migliorare il benessere emotivo e comportamentale degli animali del rifugio. Con una formazione avanzata in etologia e un innata empatia, lavora a stretto contatto con gli animali per identificare e trattare problematiche comportamentali, contribuendo a prepararli per una vita serena e stabile nelle loro future case. Aurora sviluppa e implementa programmi di riabilitazione, collabora con il team per migliorare le condizioni di vita degli animali e offre consulenze specializzate per garantire che ogni animale possa esprimere il suo vero potenziale.',
  },
  {
    name: "Antonio",
    role: "Volontario",
    imageUrl: "path/to/antonio.jpg",
    description: 'Antonio è un prezioso volontario del Rifugio degli Animali, che contribuisce quotidianamente con entusiasmo e dedizione. Con il suo spirito altruista e il suo amore per gli animali, Antonio si occupa di diverse attività fondamentali, come la cura e l’alimentazione degli animali, la pulizia degli spazi e l’assistenza durante le visite dei potenziali adottanti. La sua presenza costante e il suo impegno aiutano a garantire che il rifugio funzioni senza intoppi e che ogni animale riceva le attenzioni e le cure di cui ha bisogno. Antonio è un esempio di generosità e passione, giocando un ruolo chiave nel mantenere un ambiente positivo e amorevole per tutti gli ospiti del rifugio.',
  },
];

export default function About() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto text-center">
        <div className="bg-light-green py-10 px-6 mb-10 rounded-lg shadow-lg mt-0">
          <h1 className="text-dark-purple text-5xl font-bold mb-4">
            Benvenuti al Rifugio degli Animali
          </h1>
          <p className="text-dark-grey text-lg py-12">
            Il Rifugio degli Animali è nato dalla passione di un gruppo di amici
            che condividevano un sogno comune: offrire una seconda possibilità
            agli animali abbandonati e maltrattati. Fondato nel 2010, il nostro
            rifugio è cresciuto da un piccolo gruppo di volontari a una comunità
            dedicata di persone che si impegnano ogni giorno per garantire che
            ogni animale riceva l'amore, le cure e l'attenzione che merita.
            <br />
            
            Il nostro progetto è più di un semplice rifugio; è un luogo di
            speranza e rinascita. Qui, ogni animale trova una famiglia
            temporanea che lo aiuta a superare le ferite del passato e a
            prepararsi per un futuro migliore. Crediamo fermamente che ogni
            animale abbia diritto a una vita dignitosa e felice, e ci sforziamo
            di educare il pubblico sull'importanza dell'adozione e del rispetto
            per tutte le forme di vita.
            
            <br />
            Grazie al sostegno dei nostri volontari e donatori, continuiamo a
            crescere e a fare la differenza, un animale alla volta. Unisciti a
            noi in questa missione e contribuisci a creare un mondo dove ogni
            coda scodinzola di gioia e ogni cuore batte per l'amore.
          </p>
        </div>

        <h2 className="text-dark-green text-4xl font-bold mb-8">Contatti</h2>
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs m-4 p-6">
            <h3 className="text-dark-purple text-2xl font-semibold mb-4">
              Sede del Rifugio
            </h3>
            <p className="text-dark-grey text-lg">Via dei Mici Felici, 15</p>
            <p className="text-dark-grey text-lg">20122 Milano, Italia</p>
            <div className="flex justify-center mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 w-8 mx-2"
                  src="path/to/facebook-logo.png"
                  
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 w-8 mx-2"
                  src="path/to/instagram-logo.png"
                  
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 w-8 mx-2"
                  src="path/to/twitter-logo.png"
                
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-dark-green text-4xl font-bold mb-8">Chi Siamo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-dark-purple text-2xl font-semibold">
                  {member.name}
                </h3>
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