
import { AdoptionPreview } from "./AdoptionPreview";
import Banner from "./Banner";
import BlogPreview from "./BlogPreview";
import CommunityPreview from "./CommunityPreview";
import FAQPage from "./FAQPage";
import SitePreview from "./SitePreview";

function Home() {

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
