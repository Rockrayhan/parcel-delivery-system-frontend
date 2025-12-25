import { useGetAllServicesQuery } from "@/redux/features/services/services.api";
import ServiceCard from "@/components/ServiceCard";
import { SkeletonCard } from "./provider/SkeletonCard";

const OurServices = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);

  return (
    <div className="py-10">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-primary text-4xl font-bold text-center mb-6">
          Our Services
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Parcel Manager offers a complete solution for sending, tracking, and
          managing parcels with speed and reliability.
        </p>

        {isLoading && (
          <SkeletonCard/>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.map((service: any) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
