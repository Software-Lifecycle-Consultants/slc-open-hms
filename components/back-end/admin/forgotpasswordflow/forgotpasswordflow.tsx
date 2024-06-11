"use client";
import React, { useState } from "react";
import Step1 from "@/components/forgotpasswordflow/Step1";
import Step2 from "@/components/forgotpasswordflow/Step2";
import Step3 from "@/components/forgotpasswordflow/Step3";
import Step4 from "@/components/forgotpasswordflow/Step4";

// Define the shape of form data
interface FormData {
  [key: string]: string;
}

const ForgotpasswordFlow: React.FC = () => {
  // State to track the current step of the ForgotpasswordFlow
  const [step, setStep] = useState<number>(1);
  // State to store form data across steps
  const [formData, setFormData] = useState<FormData>({});

  // Function to move to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Function to handle form data changes across steps
  const handleFormDataChange = (data: FormData) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {/* Render Step1 component if step is 1 */}
      {step === 1 && (
        <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />
      )}
      {/* Render Step2 component if step is 2 */}
      {step === 2 && (
        <Step2 onNext={handleNextStep}  email={formData.email}/>
      )}
      {step === 3 && (
        <Step3 onNext={handleNextStep} onChange={handleFormDataChange} />
      )}
      {/* Render Step4 component if step is 4 */}
      {step === 4 && <Step4 />}
    </div>
  );
};

export default ForgotpasswordFlow;
