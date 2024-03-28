import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold m-4 mb-4">Contact Us</h1>
      <p className="text-lg m-4 mb-4">
        Have questions or feedback? We'd love to hear from you! Reach out to us
        via email or connect with us on social media to stay updated with our
        latest content and announcements.
      </p>
      <div className="flex m-4 items-center space-x-4">
        <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <a href="mailto:contact@example.com" className="ml-2">
            contact@example.com
          </a>
        </div>
        <div className="bg-gray-200  p-4 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM17.65 15.36a9 9 0 11-11.3 0 4.5 4.5 0 016.36 0m-2.64-2.64a4.5 4.5 0 000-6.36"
            />
          </svg>
          <a href="https://twitter.com/example" className="ml-2">
            @example
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
