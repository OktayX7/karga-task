"use client";
// React Imports
import { useState, FC } from "react";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="accordion ">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 mb-3 bg-cardBg rounded-2xl cursor-pointer"
        >
          <div
            className="accordion-title flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-xl leading-10 text-lightDark">
              {item.question}
            </span>
            <span>
              <FontAwesomeIcon
                icon={activeItem === index ? faMinus : faPlus}
                color="#0B1519"
              />
            </span>
          </div>
          <div>
            {activeItem === index && <p className="pt-5">{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
