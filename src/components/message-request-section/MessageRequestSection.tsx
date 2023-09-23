import Image from "next/image";
import React from "react";

// Image Imports
import TelephoneImage from "../../../public/assets/Free_iPhone_12_Mockup_3 1.png";

// UI Imports
import Title from "../UI/Title";
import Button from "../UI/Button";

const MessageRequestSection = () => {
  return (
    <div className="bg-lightDark text-white mx-14 rounded-2xl mt-20">
      <div className="grid grid-cols-6 gap-4 px-16">
        <div className="col-span-3 flex flex-col justify-between py-12">
          <Title
            text="Hey! You can send us a message to start working on the project"
            className="text-white"
          />
          <div className="flex items-center">
            <Button className="py-4" variant="primary">
              Start The Project
            </Button>
            <span className="pl-12">
              Or write to us at: info@kargakarga.com
            </span>
          </div>
        </div>
        <div className="col-span-3 pt-6">
          <Image src={TelephoneImage} alt="Telephone Image" />
        </div>
      </div>
    </div>
  );
};

export default MessageRequestSection;
