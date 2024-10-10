import PageLayout from "@/components/BusinessForm"; // Example layout component

export default function CongratsPage() {
  return (
    <> {/* Apply your main layout */}
      <div className="flex flex-col items-center justify-center h-screen px-6"> {/* Apply padding for smaller screens */}
        <div className="bg-white shadow-lg p-8 rounded-md max-w-3xl text-center"> {/* Styling for card-like appearance */}
          <h1 className="text-4xl font-extrabold mb-6 text-green-600"> {/* Text color for headings */}
            Congratulations!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Congratulations on taking the first step towards accessibility and inclusion! 
            Providing accurate information about your venue's wheelchair accessibility is essential 
            for helping your visitors make informed decisions. This guided form is designed to assist 
            you in reporting your venue’s accessibility features in detail.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Please be as descriptive and honest as possible in your responses to avoid any surprises 
            for your visitors. Avoid using subjective terms like "accessible" and instead describe specific 
            features, such as "the entrance is step-free and 90cm wide."
          </p>
          <p className="mt-8 text-xl font-semibold text-gray-900">
            - The EnAccess Maps Team :)
          </p>
        </div>
      </div>
    </>
  );
}
