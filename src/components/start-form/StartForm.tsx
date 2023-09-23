import React from "react";
import FormSection from "./components/FormSection";
import Image from "next/image";
import FormImage from "../../../public/assets/form-img.png";

const StartForm = () => {
  return (
    <div className="bg-primary text-white start-form mt-16">
      <div className="grid grid-cols-6 p-14">
        <div className="col-span-3 pr-44">
          <FormSection />
        </div>
        <Image
          src={FormImage}
          alt="Form Image"
          width={600}
          height={600}
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default StartForm;
