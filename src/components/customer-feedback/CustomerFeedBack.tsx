import React from "react";
import Slider from "./components/Slider";
import Title from "../UI/Title";

const CustomerFeedBack = () => {
  return (
    <div className="bg-ellipse-left bg-no-repeat bg-left-top pt-20">
      <div className="px-12">
        <Title text="Customer Feedback" className="pb-12" />
        <Slider />
      </div>
    </div>
  );
};

export default CustomerFeedBack;
