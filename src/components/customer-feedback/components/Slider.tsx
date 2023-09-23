"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Image Imports
import Img1 from "../../../../public/assets/customer-1.png";
import Img2 from "../../../../public/assets/customer-2.png";
import Img3 from "../../../../public/assets/customer-3.png";

// Component Imports
import SliderItem from "./SliderItem";

// Hook Imports
import useResponsive from "../../../hooks/useResponsive";

const Slider = () => {
  const FeedBackList = [
    {
      id: 1,
      image: Img1,
      name: "High voltage mayonnaise",
      date: "March 11, 2020 at 23:03",
      description:
        "A long time ago I came across this wonderful artist and have never been disappointed with his work. He accurately conveys on paper everything you want him to depict, makes edits to the work without any problems and offers his ideas, which are often quite successful. However, I definitely and strongly recommend working with this creative person!)",
    },
    {
      id: 2,
      image: Img2,
      name: "Bohdan Dubina",
      date: "Apr 20, 2020 at 23:07",
      description:
        "He is a wonderful artist, a master of his craft, and he completed the work on time, in just a couple of days, and at the highest level. He implements all ideas exactly. Communicates with clients politely. The best!",
    },
    {
      id: 3,
      image: Img3,
      name: "Albert Schmel",
      date: "Apr 20, 2020 at 23:07",
      description:
        "It's not the first time I've ordered art and I can say one thing: this person's work is done with a conscience. Thank you very much for the work done and I will continue to order only from you",
    },
    {
      id: 4,
      image: Img1,
      name: "High voltage mayonnaise",
      date: "March 11, 2020 at 23:03",
      description:
        "A long time ago I came across this wonderful artist and have never been disappointed with his work. He accurately conveys on paper everything you want him to depict, makes edits to the work without any problems and offers his ideas, which are often quite successful. However, I definitely and strongly recommend working with this creative person!)",
    },
    {
      id: 5,
      image: Img2,
      name: "Bohdan Dubina",
      date: "Apr 20, 2020 at 23:07",
      description:
        "He is a wonderful artist, a master of his craft, and he completed the work on time, in just a couple of days, and at the highest level. He implements all ideas exactly. Communicates with clients politely. The best!",
    },
    {
      id: 6,
      image: Img3,
      name: "Albert Schmel",
      date: "Apr 20, 2020 at 23:07",
      description:
        "It's not the first time I've ordered art and I can say one thing: this person's work is done with a conscience. Thank you very much for the work done and I will continue to order only from you",
    },
  ];

  const { isMobile } = useResponsive();

  return (
    <Swiper
      slidesPerView={isMobile ? 1 : 3}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {FeedBackList.map((item) => (
        <SwiperSlide key={item.id}>
          <SliderItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
