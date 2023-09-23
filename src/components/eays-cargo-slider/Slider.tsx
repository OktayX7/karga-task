"use client";
// React Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import easyCargo from "../../../public/assets/slider-img.png";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderItem from "./components/SliderItem";
import "./style/slider.css";
import Button from "../UI/Button";

const Slider = () => {
  const tabs = [
    'Illustrations for the book "Red Sands of Durnwood"',
    "“UARMY” Mobile Card game",
    "“Easy Cargo” Brand identity",
    "UARMY Mobile Card game",
  ];

  return (
    <div className="px-10 lg:px-20">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            const tabText = tabs[index];
            return `<span class="${className} relative"><span class="bullet-text absolute text-sm">${tabText}</span></span>`;
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={{
          nextEl: ".custom-next-button", // Özel sonraki butonunun seçici
          prevEl: ".custom-prev-button", // Özel önceki butonun seçici
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="eays-cargo-slider"
      >
        {[0, 1, 2, 3].map((index) => (
          <SwiperSlide key={index} className="">
            <SliderItem image={easyCargo} />
          </SwiperSlide>
        ))}
        <div className=" flex gap-4 absolute bottom-5 left-[20%] lg:bottom-[13%] lg:left-0  z-50">
          <Button className="rounded-full bg-cardBg hover:bg-slate-200 px-3 py-2 hover:bg-opacity-70 custom-prev-button">
            <FontAwesomeIcon color="#0B1519" icon={faArrowLeft} />
          </Button>
          <Button className="rounded-full bg-cardBg hover:bg-slate-200 px-3 py-2 hover:bg-opacity-70 custom-next-button">
            <FontAwesomeIcon color="#0B1519" icon={faArrowRight} />
          </Button>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
