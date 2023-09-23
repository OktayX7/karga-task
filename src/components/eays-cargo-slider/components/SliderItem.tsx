// React Imports
import { FC } from "react";

// Package Imports
import Image, { StaticImageData } from "next/image";

// UI Imports
import Button from "../../UI/Button";

// Hook Imports
import useResponsive from "../../../hooks/useResponsive";

interface SliderItemProps {
  image: StaticImageData;
}

const SliderItem: FC<SliderItemProps> = ({ image }) => {
  const { isMobile } = useResponsive();
  return (
    <div className="grid grid-cols-6 gap-4 ">
      <div className="flex flex-col gap-y-8 col-span-3">
        <p className="font-extrabold text-[4rem] leading-[4.688rem] tracking-wide uppercase max-w-2xl">
          We’ll embody the universe that lives in your heart
        </p>
        <p className="text-lightDark font-bold text-2xl leading-7 tracking-wide">
          3D, 2D, Branding and Web.
        </p>
        <Button className="w-[7.563rem]" variant="primary">
          Join Us
        </Button>
      </div>
      <Image
        width={isMobile ? 450 : 600}
        src={image}
        alt="ellipse-mid"
        className="object-contain col-span-3"
      />
    </div>
  );
};

export default SliderItem;
