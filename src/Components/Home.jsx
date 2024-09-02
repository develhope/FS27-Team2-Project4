import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AdoptionPreview } from "./AdoptionPreview";
import Banner from "./Banner";
import BlogPreview from "./BlogPreview";
import CommunityPreview from "./CommunityPreview";
import FAQPage from "./FAQPage";
import SitePreview from "./SitePreview";


function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    console.log("ciao")
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        console.log(element)
        console.log(hash)
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
      <div className="main-content pb-10 text-center">
        <Banner />
        <BlogPreview />
        <SitePreview />
        <AdoptionPreview />
        <CommunityPreview />
        <FAQPage />
      </div>
    </div>
  );
}

export default Home;
