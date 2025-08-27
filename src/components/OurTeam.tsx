const OurTeam = () => {
  return (
    <div>
      {/* --- Team Info --- */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-primary text-4xl font-bold text-center mb-6">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          A dedicated team of logistics and tech enthusiasts working together to
          make parcel delivery simple and reliable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <img
              src="/team1.png"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Alice Johnson</h3>
            <p className="text-gray-600 dark:text-gray-300">CEO & Founder</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <img
              src="/team2.png"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Bob Smith</h3>
            <p className="text-gray-600 dark:text-gray-300">Operations Head</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <img
              src="/team3.png"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Clara Lee</h3>
            <p className="text-gray-600 dark:text-gray-300">Tech Lead</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <img
              src="/team4.png"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">David Kim</h3>
            <p className="text-gray-600 dark:text-gray-300">Customer Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
