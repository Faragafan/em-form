"use client";

import Banana from "@/components/banana";
import BusinessForm from "@/components/BusinessForm";
import BusinessFormUI from "@/components/BusinessFormUI";
//import { useState } from "react";
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
      <div className="w-full flex items-center justify-center px-40 p-10 bg-bg-enaccess-yellow-green">
        {/* Render BusinessForm component */}
        <BusinessForm />
      </div>
    </>
  );
}
