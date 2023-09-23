//Ract Imports
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface PersonItemProps {
  person: {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
  };
}

const PersonItem: FC<PersonItemProps> = ({ person }) => {
  const { name, image, description } = person;

  return (
    <div className="mx-auto">
      <Image src={image} alt="Picture of the author" width={440} height={378} />
      <h3 className="font-bold text-3xl leading-9 text-lightDark my-3">
        {name}
      </h3>
      <p className="text-2xl leading-9 text-lightDark">{description}</p>
    </div>
  );
};

export default PersonItem;
