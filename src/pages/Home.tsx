import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Faqs from "@/components/Faqs";
import NewsLetter from "@/components/NewsLetter";
import OurMission from "@/components/OurMission";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import StatsSection from "@/components/StatsSection";


const Home = () => {
    return (
        <div>
          <Banner/>
          <OurServices/>
          <StatsSection/>
          <OurMission/>
          <Faqs/>
          <OurTeam/>
          <NewsLetter/>

          <div className=" py-16">

          <ContactForm />
          </div>
        </div>
    );
};

export default Home;