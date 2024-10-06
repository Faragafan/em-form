// app/businessform/page.tsx

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import BusinessFormUI from "@/components/BusinessFormUI";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import the useRouter hook

// Define the form schema
const FormSchema = z.object({
  venueName: z.string().nonempty("Venue name is required"),
  address: z.string().nonempty("Address is required"),
  contactName: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  stepFreeOption: z.enum(["Yes", "No", "Other"]),
  pedPathways: z.enum(["Yes", "No", "Other"]),
  otherDetails: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function BusinessForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, control, register, watch, formState } = methods;
  const router = useRouter(); // Use the router to navigate

  const onSubmit = (data: FormSchemaType) => {
    console.log("Form submitted:", data);
    // Redirect after submission
    router.push("/thank-you"); // Change to your desired redirect page
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      router.push("/home/homepage"); // Go back to the home page
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Update the 'files' value in the form
      const filesArray = Array.from(files);
      methods.setValue("files", filesArray); // Update the form value
    }
  };

  const selectedFiles = watch("files") || []; // Use watch to get the selected files

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentPage === 1 && <BusinessFormUI.FirstPage />}
        {currentPage === 2 && (
          <BusinessFormUI.SecondPage
            control={control}
            register={register}
            handleFileChange={handleFileChange} // Pass the handleFileChange function
            files={selectedFiles} // Pass the selected files
          />
        )}
        <div className="flex justify-between">
          <Button onClick={handlePrev} type="button">
            Previous
          </Button>
          {currentPage < 2 && (
            <Button onClick={handleNext} type="button">
              Next
            </Button>
          )}
          {currentPage === 2 && (
            <Button type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}






