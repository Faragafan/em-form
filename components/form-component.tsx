"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema using Zod for validation.
const formSchema = z.object({
  venueName: z.string().min(2, {
    message: "Venue Name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  contactName: z.string().optional(),
  position: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  phoneNumber: z.string().optional(),
  stepFreeOption: z.enum(["Yes", "No", "Other"]),
  otherDetails: z.string().optional(),
  ifNoStepFreeEntry: z.string().optional(),
  pedPathways: z.enum(["Yes", "No", "Other"]),
  ifNoPedPathways: z.string().optional(),
  additionalComments: z.string().optional(),
});

export function BusinessForm() {
  // File upload state
  const [files, setFiles] = useState<FileList | null>(null);

  // Define your form using `useForm` hook and `zodResolver` for validation.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      venueName: "",
      address: "",
      stepFreeOption: undefined, // Initially no selection
      pedPathways: undefined,
    },
  });

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Field for Venue Name */}
        <FormField
          control={form.control}
          name="venueName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Venue Name" {...field} />
              </FormControl>
              <FormDescription>
                The name of your business venue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Venue Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Address" {...field} />
              </FormControl>
              <FormDescription>
                The address of your business venue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for contact name*/}
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name (optional)" {...field} />
              </FormControl>
              <FormDescription>
                The contact name of your business venue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for position */}
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Enter Position (optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
              <FormDescription>
                This email must match your venue's contact email for
                confirmation
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for phone number*/}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormDescription>
                The phone number of your business venue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for step free entrance*/}
        <FormField
          control={form.control}
          name="stepFreeOption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Q1. Are there step-free entrance options available at your
                venue?
              </FormLabel>
              <FormDescription>
                This includes entrances that are flat or have a ramp that meets
                accessibility standards. A compliant ramp should have a maximum
                slope of 1:12 and be at least 90cm wide.
              </FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <div>
                    <input
                      type="radio"
                      id="yes"
                      value="Yes"
                      checked={field.value === "Yes"}
                      onChange={() => field.onChange("Yes")}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="no"
                      value="No"
                      checked={field.value === "No"}
                      onChange={() => field.onChange("No")}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="other"
                      value="Other"
                      checked={field.value === "Other"}
                      onChange={() => field.onChange("Other")}
                    />
                    <label htmlFor="other">Other:</label>
                    {field.value === "Other" && (
                      <Input
                        placeholder="Please specify"
                        {...form.register("otherDetails")} // Register the "otherDetails" field
                        className="ml-2 mt-2"
                      />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for if no to step free entrance*/}
        <FormField
          control={form.control}
          name="ifNoStepFreeEntry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Q1a. If "No", please describe the accessibility features or
                barriers at your venue entrance:
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter dedscription" {...field} />
              </FormControl>
              <FormDescription>
                Provide details such as the number of steps, presence of a
                portable ramp, assistance options, or alternate accessible
                entrances. For example, "There are three steps at the main
                entrance, but we have a portable ramp available upon request,"
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for pedestrian pathways*/}
        <FormField
          control={form.control}
          name="pedPathways"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Q2. Are the pedestrian pathways leading to the entrance flat,
                wide and obstruction-free?
              </FormLabel>
              <FormDescription>
                Accessible pedestrian pathways should be at least 1.2 meters
                wide, have a smooth, non-slip surface, and be free from
                obstacles such as uneven pavement, steps, or steep inclines.
                Please consider any potential barriers like bollards, street
                furniture, or construction work that may obstruct the pathway.
              </FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <div>
                    <input
                      type="radio"
                      id="yes"
                      value="Yes"
                      checked={field.value === "Yes"}
                      onChange={() => field.onChange("Yes")}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="no"
                      value="No"
                      checked={field.value === "No"}
                      onChange={() => field.onChange("No")}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="other"
                      value="Other"
                      checked={field.value === "Other"}
                      onChange={() => field.onChange("Other")}
                    />
                    <label htmlFor="other">Other:</label>
                    {field.value === "Other" && (
                      <Input
                        placeholder="Please specify"
                        {...form.register("otherDetails")} // Register the "otherDetails" field
                        className="ml-2 mt-2"
                      />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for if no to pedPathways*/}
        <FormField
          control={form.control}
          name="ifNoPedPathways"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Q2a. If "No", please describe any accessibility barriers or
                features on the pathway leading to the entrance:
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter dedscription" {...field} />
              </FormControl>
              <FormDescription>
                Provide specific details such as the number of steps, narrow
                pathways, uneven surfaces, or temporary obstructions like
                construction work. For example, "The pathway has a slight
                incline and an uneven surface near the entrance."
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field for addtionalComments*/}
        <FormField
          control={form.control}
          name="additionalComments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Leave any additional comments about entrance/pathway
                accessibility here:
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter comments" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex justify-center">
          <div className="max-w-lg p-6 bg-gray-100 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-center">
              Please upload photos of the entrance:
            </h2>
            <p className="text-gray-600 text-center">
              Photos should clearly show the entrance from the ground level up
              to the door, including any ramps, steps, or bumps.
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Upload up to 5 supported files. Max 10 MB per file.
            </p>
            <div className="mt-4 flex justify-center">
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center px-4 py-2 text-blue-600 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                Add File
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {files && (
              <div className="mt-4">
                <h3 className="font-semibold">Selected Files:</h3>
                <ul className="list-disc pl-6">
                  {Array.from(files).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
