// BusinessFormUI.tsx

"use client";

import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import React from "react";
import { Button } from "@/components/ui/button";

// First Page Component
const FirstPage = () => {
  return (
    <>
      {/* Field for Venue Name */}
      <FormField
        name="venueName"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Venue Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter Venue Name"
                className ="text-lg py-8" 
                {...field} 
              />
            </FormControl>
            <FormDescription className="text-lg">The name of your business venue.</FormDescription>
            <div className="py-4" />
            <FormMessage />
          </FormItem>
        </div>
        )}
      />
      {/* Field for Address */}
      <FormField
        name="address"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Venue Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter Address" className ="text-lg py-8"  {...field}/>
            </FormControl>
            <FormDescription className="text-lg" >The address of your business venue.</FormDescription>
            <div className="py-4" />
            <FormMessage />
          </FormItem>
        </div>
        )}
      />
     <FormField
        name="contactName"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Contact Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter name (optional)" className ="text-lg py-8"  {...field} />
            </FormControl>
            <FormMessage />
            <div className="py-4" />
          </FormItem>
        </div>
        )}
      />

      <FormField
        name="position"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Position</FormLabel>
            <FormControl>
              <Input placeholder="Enter Position (optional)" className ="text-lg py-8"  {...field} />
            </FormControl>
            <FormMessage />
            <div className="py-4" />
          </FormItem>
        </div>
        )}
      />

      <FormField
        name="email"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter Email" className ="text-lg py-8"  {...field} />
            </FormControl>
            <FormDescription className="text-lg">
              This email must match your venue's contact email for confirmation.
            </FormDescription>
            <div className="py-4" />
            <FormMessage />
          </FormItem>
        </div>
        )}
      />

      <FormField
        name="phoneNumber"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter phone number" className ="text-lg py-8"  {...field} />
            </FormControl>
            <FormDescription className="text-lg">The phone number of your business venue.</FormDescription>
            <FormMessage />
            <div className="py-4" />
          </FormItem>
        </div>
        )}
      />
    </>
  );
}

// Second Page Component
interface SecondPageProps {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    files: File[] | null; // Change to File[] | null
    control: any; // Adjust type according to your use
    register: any; // Adjust type according to your use
  }
  

const SecondPage: React.FC<SecondPageProps> = ({ handleFileChange, files, control, register }) => {
  return (
    <div className="px-24">
      {/* Question 1 */}
      <FormField
        control={control}
        name="stepFreeOption"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">Q1. Are there step-free entrance options available at your venue?</FormLabel>
            <FormDescription className="text-lg">This includes entrances that are flat or have a ramp that meets accessibility standards.</FormDescription>
            <FormControl>
              <div className="space-y-2">
                <div>
                  <input type="radio" id="yes" value="Yes" checked={field.value === "Yes"} onChange={() => field.onChange("Yes")} />
                  <label className="text-lg px-2 font-medium" htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input type="radio" id="no" value="No" checked={field.value === "No"} onChange={() => field.onChange("No")} />
                  <label className="text-lg px-2 font-medium" htmlFor="no">No</label>
                </div>
                <div>
                  <input type="radio" id="other" value="Other" checked={field.value === "Other"} onChange={() => field.onChange("Other")} />
                  <label className="text-lg px-2 font-medium" htmlFor="other">Other:</label>
                  {field.value === "Other" && (
                    <Input placeholder="Please specify" {...register("otherDetails")} className="ml-2 mt-2 text-lg py-8" />
                  )}
                </div>
              </div>
            </FormControl>
            <FormMessage />
            <div className="py-6" />
          </FormItem>
        </div>
        )}
      />




            {/* Field for if no to step-free entrance */}
            <FormField
              control={control}
              name="ifNoStepFreeEntry"
              render={({ field }) => (
            <div className="question-container">
                <FormItem>
                  <FormLabel className="text-lg">
                    Q1a. If "No", please describe the accessibility features or
                    barriers at your venue entrance:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter description" className="text-lg py-8" {...field} />
                  </FormControl>
                  <FormMessage />
                  <div className="py-6" />
                </FormItem>
            </div>
              )}
            />


<FormField
        control={control}
        name="pedPathways"
        render={({ field }) => (
        <div className="question-container">
          <FormItem>
            <FormLabel className="text-lg">
              Q2. Are the pedestrian pathways leading to the entrance flat, wide and obstruction-free?
            </FormLabel>
            <FormControl>
              <div className="space-y-2">
                <div>
                  <input
                    type="radio"
                    id="yes-ped"
                    value="Yes"
                    checked={field.value === "Yes"}
                    onChange={() => field.onChange("Yes")}
                  />
                  <label className="text-lg px-2 font-medium" htmlFor="yes-ped">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no-ped"
                    value="No"
                    checked={field.value === "No"}
                    onChange={() => field.onChange("No")}
                  />
                  <label className="text-lg px-2 font-medium" htmlFor="no-ped">No</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other-ped"
                    value="Other"
                    checked={field.value === "Other"}
                    onChange={() => field.onChange("Other")}
                  />
                  <label className="text-lg px-2 font-medium" htmlFor="other-ped">Other:</label>
                  {field.value === "Other" && (
                    <Input
                      placeholder="Please specify"
                      {...register("otherDetails")}
                      className="ml-2 mt-2 text-lg py-8"
                    />
                  )}
                </div>
              </div>
            </FormControl>
            <FormMessage />
            <div className="py-6" />
          </FormItem>
        </div>
        )}
      />


        {/* Field for if no to pedPathways*/}
        <FormField
          control={control}
          name="ifNoPedPathways"
          render={({ field }) => (
        <div className="question-container">
            <FormItem>
              <FormLabel className="text-lg">
                Q2a. If "No", please describe any accessibility barriers or
                features on the pathway leading to the entrance:
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter description" className="text-lg py-8" {...field} />
              </FormControl>
              <FormDescription className="text-lg">
                Provide specific details such as the number of steps, narrow
                pathways, uneven surfaces, or temporary obstructions like
                construction work. For example, "The pathway has a slight
                incline and an uneven surface near the entrance."
              </FormDescription>
              <FormMessage />
              <div className="py-6" />
            </FormItem>
        </div>
          )}
        />

        {/* Field for addtionalComments*/}
        <FormField
          control={control}
          name="additionalComments"
          render={({ field }) => (
        <div className="question-container">
            <FormItem>
              <FormLabel className="text-lg">
                Leave any additional comments about entrance/pathway
                accessibility here:
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter comments" className="text-lg py-8" {...field} />
              </FormControl>
              <FormMessage />
              <div className="py-6" />
            </FormItem>
        </div>
          )}
        />


     {/* File Upload Section */}
     <div className="w-full flex justify-center py-4">
        <div className="max-w-lg p-6 bg-gray-100 border rounded-lg shadow-md py-4 mb-4"> {/* Add mb-4 here for margin below */}
          <h2 className="text-lg font-medium text-center">Please upload photos of the entrance:</h2>
          <p className="text-gray-600 text-center">
            Photos should clearly show the entrance from the ground level up to the door, including any ramps, steps, or bumps.
          </p>
          <p className="text-sm text-gray-500 mt-2 text-center">Upload up to 5 supported files. Max 10 MB per file.</p>
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
          
          {/* Selected Files */}
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

      {/* Extra padding below the upload section */}
      <div className="py-6" /> {/* This adds padding below the entire upload box */}
    </div>
  );
};

// Button Components
const NextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
        <Button onClick={onClick}>Next</Button>
  );
};

const PrevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
            <Button onClick={onClick}>Previous</Button>
      );
    };

// Default Export
const BusinessFormUI = {
  FirstPage,
  SecondPage,
  NextButton,
  PrevButton,
};

export default BusinessFormUI;







