import { useState } from "react";
import { toast } from "sonner";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    // Simulated submission
    toast.success("You have successfully subscribed!");

    // Clear input
    setEmail("");
  };

  return (
    <div>
      <div className="bg-gray-900 py-12">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-center">
            <h2 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
              Stay Updated with Our Newsletter
            </h2>

            <p className="mt-4 text-gray-300">
              Subscribe to receive the latest updates on parcel delivery
              features, service improvements, and exclusive offers.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <label htmlFor="Email" className="flex-1">
              <span className="sr-only"> Email </span>

              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded border border-gray-300 shadow-sm bg-slate-700 px-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="h-12 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
