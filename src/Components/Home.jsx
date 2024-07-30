import Banner from "./Banner";
import ChatBot from "./ChatBot";

function Home() {
  return (
    <div>
      <div className="main-content p-10 text-center mt-20">
        <Banner/>
        <ChatBot />
      </div>
    </div>
  );
}

export default Home;
