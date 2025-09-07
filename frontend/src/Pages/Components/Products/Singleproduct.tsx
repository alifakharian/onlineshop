import { useState } from "react";
import { useSingleProduct } from "../../hooks/userProduct";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Params = {
  slug: string;
};

function Singleproduct() {
  const { slug } = useParams<Params>();
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // کنترل اسلایدر
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4; 

  const { data, isLoading, error } = useSingleProduct(slug);

  if (isLoading) return <Loading />;
  if (error) return <p>Sorry....</p>;

  const mainImage = currentImage || data?.baner;

  // گرفتن فقط اون تعداد عکس لازم
  const visibleImages = data?.galery.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (data && startIndex + itemsPerPage < data.galery.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <>
      <div className="grid justify-items- gap-[80px] dark:bg-slate-800 pt-3 smd:px-5 sm:px-1 dark:text-white pr-3 duration-700 grid-cols-1 sm:grid-cols-2">
        <img
          src={mainImage}
          className="size-[400px] mx-auto mt-[50px]  rounded-xl object-cover border-2 border-gray-100"
        />

        <div className="flex pr-5 flex-col" dir="rtl">
          <p className="text-right leading-[40px] text-purple-600 dark:text-gray-300 font-black">
            {data?.title}
          </p>
          <div className="font-black text-[20px] my-3 dark:text-blue-600 text-rose-600">
            برند:{data?.category}
          </div>
          <div className="text-[15px] dark:text-gray-300 line-through decoration-[1.50px] flex flex-row-reverse gap-1 justify-start font-bold text-gray-600">
            <div>{Number(data?.sale_price).toLocaleString("fa-IR")}</div>
            <div>تومان</div>
          </div>
          <div className="text-left mt-2 text-[15px] dark:text-blue-300 flex flex-row-reverse gap-2 justify-end font-bold text-rose-800">
            <div className="mt-5">تومان</div>
            <div className="text-[35px]">
              {Number(data?.price).toLocaleString("fa-IR")}
            </div>
          </div>
          <div className="text-justify mt-3 text-[14px] leading-[30px] font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>

          <div className="flex text-[13px] justify-start gap-2 flex-wrap">
            <button
              className="bg-rose-600 text-center
            dark:bg-blue-600
             hover:bg-rose-800  duration-700 text-white w-[140px] dark:hover:bg-blue-800 my-[30px] rounded-xl p-2"
            >
              افزودن به سبد خرید
            </button>
            <button className="bg-orange-600 dark:bg-yellow-500 dark:hover:bg-yellow-700 text-center hover:bg-orange-800 duration-700 text-white w-[140px] my-[30px] rounded-xl p-2">
              افزودن به علاقه مندی
            </button>
          </div>

          {/* اسلایدر */}
          <div className="flex flex-col items-center  w-[80%] mx-auto bg-gray-300 dark:bg-gray-500   rounded-xl border-2 dark:border-blue-600 border-rose-600 my-3">
            <div className="flex flex-wrap bg-red-5 w-full justify-center gap-y-3 gap-x-[55px]">
              {visibleImages?.map((elem) => {
                const isSelected = currentImage === elem.image;
                return (
                  <button
                    className={`my-[30px] ${
                      isSelected ? "opacity-50 scale-125" : ""
                    } rounded-md p-1 transition-all duration-300`}
                    key={elem.image}
                    onClick={() => setCurrentImage(elem.image)}
                  >
                    <img src={elem.image} className="rounded-md size-[80px]" />
                  </button>
                );
              })}
            </div>
            <div className="flex  gap-3 pb-3">
              <button
                className="text-[25px] text-rose-600 dark:text-blue-700"
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                <FaChevronCircleRight />
              </button>
              <button
                className="text-[25px] text-rose-600 dark:text-blue-700"
                onClick={handleNext}
                disabled={
                  data && startIndex + itemsPerPage >= data.galery.length
                }
              >
                <FaChevronCircleLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
