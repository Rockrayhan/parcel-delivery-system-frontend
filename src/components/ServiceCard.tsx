import { Link } from "react-router";


interface ServiceCardProps {
  service: {
    _id: string;
    title: string;
    img_url: string;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      
      {/* Image Wrapper */}
      <div className="overflow-hidden">
        <img
          src={service.img_url}
          alt={service.title}
          className="w-full h-44 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {service.description}
        </p>

        <Link
          to={`/services/${service._id}`}
          className="mt-auto inline-block text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
