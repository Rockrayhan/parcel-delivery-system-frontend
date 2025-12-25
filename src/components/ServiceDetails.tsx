import { Link, useParams } from "react-router";
import { useGetAllServicesQuery, useGetServiceByIdQuery } from "@/redux/features/services/services.api";
import { SkeletonCard } from "./provider/SkeletonCard";
import Faqs from "./Faqs";
import ServiceCard from "./ServiceCard";
const ServiceDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetServiceByIdQuery(id as string);
  const { data: allServices } = useGetAllServicesQuery(undefined);

  const service = data?.data;

  // Filter out current service
  const otherServices = allServices?.data?.filter(
    (item: any) => item._id !== id
  );

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div>
      {/* --- Page Header --- */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-semibold mb-4">
            {service?.title}
          </h2>
        </div>
      </section>

      {/* --- Main Content --- */}
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 py-16">
        <img
          src={service?.img_url}
          alt={service?.title}
          className="w-full h-[350px] object-cover rounded-xl shadow"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">
            {service?.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {service?.description}
          </p>
        </div>
      </div>

      {/* FAQs */}
      <Faqs />

      {/* 🔥 Other Services */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-10 text-primary">
          Other Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherServices?.slice(0, 4).map((service: any) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

