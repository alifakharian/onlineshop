import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../hooks/userProduct";
import Loading from "./Loading";
import { Params } from "./SingleprUi";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

function Singelproductimg() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const { slug } = useParams<Params>();
  const { data, isLoading } = useSingleProduct(slug);
  const gallary = data?.galery;

  if (isLoading) return <Loading />;

  return (
    <div className="mt-10">
      {/* اسلایدر اصلی */}
      <div className="relative">
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper2 w-[400px] rounded-xl"
        >
          {gallary &&
            gallary.map((elem) => {
              return (
                <>
                  <SwiperSlide>
                    <img src={elem.image} />
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>

      {/* اسلایدر Thumbnail */}
      <div className="relative p-5 dark:bg-slate-600 bg-stone-300 rounded-lg m-3">
        <Swiper
          navigation={{
            nextEl: ".next",
            prevEl: ".preview",
          }}
          onSwiper={setThumbsSwiper}
          // pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {gallary &&
            gallary.map((elem) => {
              return (
                <SwiperSlide>
                  <img
                    className="rounded-full  dark:border-blue-600 border-rose-600  size-[100px]"
                    src={elem.image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="next absolute font-black text-[30px] top-[45%] left-2 z-10 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer dark:bg-blue-600">
          <GrFormPrevious />
        </div>
        <div className="preview absolute top-[45%] text-[30px] right-2 z-10 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer dark:bg-blue-600">
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
}

export default Singelproductimg;
