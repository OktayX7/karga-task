// components/FaqSection.js

import React from "react";
import Accordion from "./components/Accordion";
import Title from "../UI/Title";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What is outsourcing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!",
    },
    {
      question: "What do I need to get started on my project?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!",
    },
    {
      question: "How does the process of working on a project work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!",
    },
    {
      question: "Why is it beneficial to outsource the art component?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!",
    },
  ];

  return (
    <div className="bg-ellipse-left bg-no-repeat bg-left-top bg-auto">
      <div className="px-16 pt-20">
        <Title text="faq" className="pb-8" />

        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default FaqSection;
