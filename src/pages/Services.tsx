import OurMission from "@/components/OurMission";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";

const Services = () => {
  return (
    <div className="">
      {/* --- Page Header --- */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-semibold mb-4"> Our Services </h2>
        </div>
      </section>

      <OurServices />

      <OurMission />

      <OurTeam />
    </div>
  );
};

export default Services;
