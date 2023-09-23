import React from "react";
import Title from "../UI/Title";

const MancoArt = () => {
  return (
    <div className="bg-ellipse-left bg-no-repeat bg-left py-20">
      <div className="px-12 flex justify-between py-20">
        <Title
          text="MANCO ART — Ukrainian Game Art Outsourcing Studio"
          className="w-4/12"
        />
        <p className="text-lightDark font-medium text-2xl leading-6 w-5/12">
          What does it mean? It's simple: we take over the implementation of
          your project in part or in full - from concepts to the finished art
          product. Our company employs a staff of qualified specialists in the
          field of digital drawing.
        </p>
      </div>
    </div>
  );
};

export default MancoArt;
