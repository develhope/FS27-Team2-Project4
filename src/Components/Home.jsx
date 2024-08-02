import Banner from "./Banner";
import FAQPage from "./FAQPage";

function Home() {
  return (
    <div>
      <div className="main-content p-10 text-center mt-20">
        <Banner />
        <FAQPage />
      </div>
    </div>
  );
}

export default Home;
