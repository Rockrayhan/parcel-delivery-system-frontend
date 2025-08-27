import Banner from "@/components/Banner";
import Faqs from "@/components/Faqs";
import NewsLetter from "@/components/NewsLetter";
import OurMission from "@/components/OurMission";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";


const Home = () => {
    return (
        <div>
          <Banner/>
          <OurServices/>
          <OurMission/>
          <Faqs/>
          <OurTeam/>
          <NewsLetter/>
        </div>
    );
};

export default Home;