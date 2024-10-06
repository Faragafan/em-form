"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import BusinessFormUI from "@/components/BusinessFormUI";
import { Button } from "./ui/button";

// Define the form schema
const FormSchema = z.object({
  venueName: z.string().min(1, "Venue name is required"),
  address: z.string().min(1, "Address is required"),
  contactName: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  stepFreeOption: z.enum(["Yes", "No", "Other"]),
  pedPathways: z.enum(["Yes", "No", "Other"]),
  otherDetails: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(), // Use an array of File instead of FileList
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function BusinessForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, setValue, control, register, trigger, formState: { errors } } = methods;

  const onSubmit = (data: FormSchemaType) => {
    console.log("Form submitted:", data);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      // Convert FileList to an array
      const filesArray = Array.from(fileList);
      // Update your state here with filesArray
      // Example: setFiles(filesArray);
    }
  };

  const selectedFiles = methods.watch("files") || null; // Make sure to use FileList or null

  const { FirstPage, SecondPage, NextButton, PrevButton } = BusinessFormUI;

  const handleNextPage = async () => {
    // Validate the first page fields
    const isValid = await trigger(["venueName", "address", "phoneNumber"]);
    if (isValid) {
      setCurrentPage((prev) => prev + 1); // Proceed to the next page
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentPage === 1 && <FirstPage />}
        {currentPage === 2 && errors.venueName === undefined && errors.address === undefined && errors.phoneNumber === undefined && (
          <SecondPage
            handleFileChange={handleFileChange}
            files={selectedFiles}
            control={control} // Pass control to SecondPage
            register={register} // Pass register to SecondPage
          />
        )}
        <div className="flex justify-between">
          {currentPage > 1 && <PrevButton onClick={() => setCurrentPage((prev) => prev - 1)} />}
          {currentPage < 2 && (
            <NextButton onClick={handleNextPage} /> // Use the custom next page handler
          )}
          {currentPage === 2 && <Button type="submit">Submit</Button>}
        </div>
      </form>
    </FormProvider>
  );
}




