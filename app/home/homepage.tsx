"use client";

import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const router = useRouter(); // Use the router to navigate

  const handleNext = () => {
    router.push("/businessform"); // Redirect to the business form page
  };

  return (
    <>
      <div>
        <Image
          className="w-full flex items-center justify-center p-1"
          src="/image/title_image.png" // Path to your image in the public folder
          alt="Description of the image"
          width={500} // Width of the image
          height={300} // Height of the image
        />
      </div>
      <div className="w-full flex items-center justify-center px-40 p-10 bg-bg-enaccess-yellow-green">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Guided Self-Report Your Venue's Wheelchair Accessibility
          </h1>
          <p className="mt-4">
            Congratulations on taking the first step towards accessibility and inclusion!
            Providing accurate information about your venue's wheelchair accessibility is
            essential for helping your visitors make informed decisions. This guided form is
            designed to assist you in reporting your venue’s accessibility features in detail.
          </p>
          <p className="mt-4">
            Please be as descriptive and honest as possible in your responses to avoid any
            surprises for your visitors. Avoid using subjective terms like "accessible" and
            instead describe specific features, such as "the entrance is step-free and 90cm
            wide."
          </p>
          <p className="mt-4">- EnAccess Maps team :)</p>
          <Button className="mt-6" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}







