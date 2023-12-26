// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { GiSpiderWeb } from "react-icons/gi";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "the creation of dynamic and responsive websites tailored to meet your business needs. We specialize in building robust and scalable website",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "A web developer focuses on writing code and programming to build the technical aspects of those digital products.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Copywriting involves crafting persuasive and engaging written content to communicate a message effectively.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "SEO is the practice of optimizing website code, structure, and content to enhance visibility and ranking on search engines .",
  },
  {
    icon:<GiSpiderWeb />,
    title:"Data Scrapping",
    description:"Data scraping is the process of extracting data from websites by utilizing automated scripts, typically for analysis,integration into other applications."
  }
];
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] mb- h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,1.15)] transition-all duration-300">
              {/*icon */}
              <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
              {/*title and desc */}
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/*arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

