import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Img from "../../../../public/assets/our-service-1.png";

interface OurServiceItemProps {
  item: {
    id: number;
    title: string;
    img: StaticImageData;
    description: string;
  };
}

const OurServiceItem: FC<OurServiceItemProps> = ({ item }) => {
  const { title, img, description } = item;
  return (
    <div className="bg-[#f5f5f5] px-5 py-10 rounded-2xl mx-auto">
      <h2 className="text-4xl font-medium tracking-wide leading-10">{title}</h2>
      <Image
        src={img}
        alt="Chart Design"
        className="mt-6 mb-4"
        width={400}
        height={230}
      />
      <p className="font-normal text-lightDark text-opacity-50 leading-6">
        {description}
      </p>
    </div>
  );
};

export default OurServiceItem;
