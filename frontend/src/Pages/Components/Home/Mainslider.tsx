import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { fistSlider } from "../../hooks/userbannerSlider";
import Loading from "../Products/Loading";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Mainslider() {
  const { data, isLoading, isError } = fistSlider();
  if (isLoading) return <Loading />;
  if (isError) return <Loading />;

  return (
    <>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".next-custom",
            prevEl: ".prev-custom",
          }}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data &&
            data.map((elem) => (
              <SwiperSlide key={elem.alt}>
                <img
                  src={elem.baner}
                  className="w-full smd:h-[400px] object-cover"
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div
          className="prev-custom absolute font-black text-[30px] top-[45%] left-2 z-10 w-10 h-10 
                   bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer
                    dark:bg-blue-600"
        >
          <GrFormPrevious />
        </div>
        <div
          className="next-custom absolute top-[45%] text-[30px] right-2 z-10 w-10 h-10 
                   bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer
                    dark:bg-blue-600"
        >
          <MdNavigateNext />
        </div>
      </div>
    </>
  );
}

export default Mainslider;
