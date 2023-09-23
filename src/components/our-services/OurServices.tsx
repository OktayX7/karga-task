import React from "react";
import OurServiceList from "./components/OurServiceList";
import Title from "../UI/Title";

const OurServices = () => {
  return (
    <div className="bg-ellipse-right bg-no-repeat bg-right-top">
      <div className="px-12 pt-16">
        <Title text="Our Services" className="mb-16" />
        <OurServiceList />
      </div>
    </div>
  );
};

export default OurServices;
