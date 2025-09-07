import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useProducts } from "../../hooks/userProduct";
import ProductItem from "../Products/ProductItem";

function Slider() {
  const { data } = useProducts();

  return (
    <>
      <div className=" bg-gray-200 dark:bg-slate-600">
        <Swiper
          slidesPerView={1}
          // navigation={true}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
            1020: { slidesPerView: 3, spaceBetween: 10 },
            1290: { slidesPerView: 4, spaceBetween: 2 },
          }}
          modules={[Pagination]}
          className="mySwiper pt-3"
        >
          {data &&
            data.map((elem) => {
              return (
                <>
                  <SwiperSlide className="p-10" key={elem.id}>
                    <div className="w-[84%]">
                      <ProductItem elem={elem} />
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
