const Faqs = () => {
  return (
    <div className="py-24">
      <h3 className="text-primary text-4xl font-bold text-center">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4 max-w-5xl mx-auto my-12">
        {/* FAQ 1 */}
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              How can I track my parcel in real time?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            You can track your parcel using the unique tracking ID provided at
            the time of booking. Simply go to the “Track Parcel” page, enter
            your tracking ID, and you’ll see the latest status and location
            updates of your shipment.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Who can create and manage parcels in the system?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Senders can create new parcel requests and monitor their delivery
            progress. Admins have full control over all parcels, including
            updating delivery status, assigning receivers, and resolving
            issues. Receivers can view parcel details and delivery updates.
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              What happens if my parcel is delayed or has an issue?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            If a parcel is delayed or faces any delivery issue, its status will
            be updated accordingly in the system. You can view detailed status
            logs, and our support team or admin will take the necessary action
            to resolve the issue as quickly as possible.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Faqs;
