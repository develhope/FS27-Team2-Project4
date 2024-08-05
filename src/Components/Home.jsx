import Banner from "./Banner";
import FAQPage from "./FAQPage";

function Home() {
  return (
    <div>
      <div className="main-content pb-10 text-center">
        <Banner />
        <FAQPage />
      </div>
    </div>
  );
}

export default Home;
