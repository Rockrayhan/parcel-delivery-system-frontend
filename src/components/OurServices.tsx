

const OurServices = () => {
  return (
    <div>
      {/* --- Service Description --- */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Services
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Parcel Manager offers a complete solution for sending, tracking, and
          managing parcels. From pick-up to delivery, our system ensures your
          packages are safe, fast, and always traceable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ensure your parcels reach on time with our optimized routes and
              tracking system.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor every parcel with live updates and notifications, keeping
              you informed always.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize safety for every parcel, ensuring careful handling
              and accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
