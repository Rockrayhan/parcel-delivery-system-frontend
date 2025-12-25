import { ShieldCheck, Truck, Clock } from "lucide-react";

const OurMission = () => {
  return (
    <section className="relative overflow-hidden  py-28 text-white">
      {/* Background Accent */}


      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-primary text-4xl font-bold text-center mb-6">
          Our Mission
        </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission is to simplify parcel logistics through a secure,
            transparent, and easy-to-use delivery management system — enabling
            businesses and individuals to send and receive packages with
            complete confidence.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reliability */}
          <div className="rounded-2xl bg-gray-800/70 p-8 border border-gray-700 backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Truck className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Reliable Delivery Network
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We ensure every parcel moves through a dependable and monitored
              delivery process — reducing delays and improving delivery accuracy
              across regions.
            </p>
          </div>

          {/* Transparency */}
          <div className="rounded-2xl bg-gray-800/70 p-8 border border-gray-700 backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Full Transparency & Security
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Real-time tracking, status history, and role-based access ensure
              complete visibility and secure handling at every stage of the
              delivery journey.
            </p>
          </div>

          {/* Efficiency */}
          <div className="rounded-2xl bg-gray-800/70 p-8 border border-gray-700 backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Speed & Operational Efficiency
            </h3>

            <p className="text-gray-400 leading-relaxed">
              From parcel creation to final delivery, our platform is optimized
              to save time, streamline workflows, and scale effortlessly with
              growing logistics demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
