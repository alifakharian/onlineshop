// import React from "react";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import img1 from "../../../img/mainSlider/1.webp";
// import img2 from "../../../img/mainSlider/2.webp";
// import img3 from "../../../img/mainSlider/3.webp";
// import img4 from "../../../img/mainSlider/4.webp";
// import img5 from "../../../img/mainSlider/5.webp";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// const Mainslider: React.FC = () => {
//   const img: string[] = [img1, img2, img3, img4, img5];

//   return (
//     <Swiper
//       navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
//       modules={[Navigation]}
//       className="mySwiper"
//     >
//       {img.map((elem, index) => (
//         <SwiperSlide key={index}>
//           <img src={elem} alt={`slide-${index}`} />
//         </SwiperSlide>
//       ))}
//       <div className=" gap-1 flex top-[380px] z-30 left-5">
//         <FaChevronCircleLeft  className="text-[28px] "/>
//         <FaChevronCircleRight className="text-[28px] " />
//       </div>
//     </Swiper>
//   );
// };

// export default Mainslider;

import img1 from "../../../img/mainSlider/1.webp";
import img2 from "../../../img/mainSlider/2.webp";
import img3 from "../../../img/mainSlider/3.webp";
import img4 from "../../../img/mainSlider/4.webp";
import img5 from "../../../img/mainSlider/5.webp";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

function Mainslider() {
  const img: string[] = [img1, img2, img3, img4, img5];
  return (
    <>
      <>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {img &&
            img.map((elem, index) => {
              return (
                <div key={index}>
                  <SwiperSlide>
                    <img
                      src={elem}
                      className="w-full smd:h-[400px] object-cover"
                    />
                  </SwiperSlide>
                </div>
              );
            })}
        </Swiper>
      </>
    </>
  );
}

export default Mainslider;
