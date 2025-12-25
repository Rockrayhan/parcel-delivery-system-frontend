import {
  Award,
  MapPin,
  Users,
  Package,
  Clock,
} from "lucide-react";

const stats = [
  {
    value: "26+",
    label: "Awards Won",
    icon: Award,
  },
  {
    value: "65+",
    label: "States Covered",
    icon: MapPin,
  },
  {
    value: "689K+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "130M+",
    label: "Goods Delivered",
    icon: Package,
  },
  {
    value: "130M+",
    label: "Business Hours",
    icon: Clock,
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trusted Parcel Delivery Network
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Proven reliability, nationwide coverage, and millions of successful
            deliveries you can count on.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
