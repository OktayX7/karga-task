import React from "react";
import OurServiceItem from "./OurServiceItem";
import OurService1 from "../../../../public/assets/our-service-1.png";
import OurService2 from "../../../../public/assets/our-service-2.png";
import OurService3 from "../../../../public/assets/our-service-3.png";

const OurServiceList = () => {
  const OurServices = [
    {
      id: 1,
      title: "Chart Design",
      img: OurService1,
      description: 'Development of the character "Music teacher"',
    },
    {
      id: 2,
      title: "Environment Art",
      img: OurService2,
      description: 'Concept art environment for the novel "Capital"',
    },
    {
      id: 3,
      title: "2D-illustrations",
      img: OurService1,
      description: 'Illustration for the comic "Star Girl"',
    },
    {
      id: 4,
      title: "3D-modeling",
      img: OurService3,
      description: "3D character concept",
    },
    {
      id: 5,
      title: "Book design",
      img: OurService2,
      description: 'Design of the book "Red Sands of Durnwood"',
    },
    {
      id: 6,
      title: "Ux/Ui design",
      img: OurService3,
      description: "Website for art studio “Manco Art”",
    },
    {
      id: 7,
      title: "Branding",
      img: OurService2,
      description: 'Corporate style "VESPA"',
    },
    {
      id: 8,
      title: "NFT-collection",
      img: OurService1,
      description: 'NFT collection "Dream"',
    },
  ];

  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {OurServices.map((item, index) => (
        <OurServiceItem item={item} key={index} />
      ))}
    </div>
  );
};

export default OurServiceList;
