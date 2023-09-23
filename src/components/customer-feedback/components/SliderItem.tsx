"use client";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SliderItemProps {
  item: {
    id: number;
    image: StaticImageData;
    name: string;
    date: string;
    description: string;
  };
}

const SliderItem: FC<SliderItemProps> = ({ item }) => {
  const { image, name, date, description } = item;

  return (
    <div className="bg-cardBg rounded-2xl min-h-[600px] lg:min-h-[550px] xl:min-h-[500px] min-w-min">
      <div className="px-5 pt-5 pb-8">
        <div className="flex items-center gap-6">
          <Image src={image} alt={name} width={72} height={72} />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl leading-9 text-lightDark">
              {name}
            </h3>
            <span className="text-lg leading-7 text-lightDark text-opacity-30">
              {date}
            </span>
          </div>
        </div>
        <p className="text-2xl leading-8 text-lightDark text-opacity-80 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SliderItem;
