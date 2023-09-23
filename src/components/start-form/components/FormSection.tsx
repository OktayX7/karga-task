import Title from "@/components/UI/Title";
import React from "react";
import FormikForm from "./FormikForm";

const FormSection = () => {
  return (
    <div>
      <div className="flex flex-col pt-7 gap-5">
        <Title
          text="Let's start your project!"
          className="text-white max-w-sm"
        />
        <p className="text-[#F6F8FF] font-medium leading-10 tracking-wide">
          Leave your contact details and we will contact you
        </p>
      </div>
      <div className="pt-6">
        <FormikForm />
      </div>
    </div>
  );
};

export default FormSection;
