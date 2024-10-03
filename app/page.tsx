import Banana from "@/components/banana";
import { BusinessForm } from "@/components/form-component";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        {/* Image component with the correct self-closing tag */}
        <Image className="w-full flex items-center justify-center p-1"
          src="/image/title_image.png"  // Path to your image in the public folder
          alt="Description of the image"
          width={500}  // Width of the image
          height={300} // Height of the image
        />
      </div>
      <div className="w-full flex items-center justify-center p-10 bg-slate-200">
        {/* Render BusinessForm component */}
        <BusinessForm />
      </div>
    </>
  );
}