import { useState } from "react";
import { useSingleProduct } from "../../hooks/userProduct";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

type Params = {
  slug: string;
};

function Singleproduct() {
  const { slug } = useParams<Params>();
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const { data, isLoading, error } = useSingleProduct(slug);

  if (isLoading) return <Loading />;
  if (error) return <p>Sorry....</p>;

  const mainImage = currentImage || data?.baner;

  return (
    <>
      <div className="grid justify-items-start pt-3 px-3 mr-3 duration-700 grid-cols-1 sm:grid-cols-2">
        <img src={mainImage} className="size-[650px]" />

        <div className="flex flex-col" dir="rtl">
          <p className="text-right leading-[40px] text-purple-600 font-black">
            {data?.title}
          </p>
          <div className="font-black text-[20px] my-3 text-rose-600">
            برند:{data?.category}
          </div>
          <div className="text-[15px] line-through decoration-[1.50px] flex flex-row-reverse gap-1 justify-start font-bold text-gray-600">
            <div className="">
              {Number(data?.sale_price).toLocaleString("fa-IR")}
            </div>
            <div>تومان</div>
          </div>
          <div className="text-left mt-2 text-[15px] flex flex-row-reverse gap-2 justify-end font-bold text-rose-800">
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

          <button className="bg-rose-600 text-center  hover:bg-rose-800 duration-700 text-white w-[160px] my-[30px] rounded-xl p-2">
            افزودن به سبد خرید
          </button>
          <div className="flex justify-center flex-wrap gap-3 bg-gray-300 rounded-xl border-2 border-rose-500 my-5">
            {data?.galery.map((elem) => {
              const isSelected = currentImage === elem.image;
              return (
                <button
                  className={`my-[30px] mx-3 ${
                    isSelected ? "opacity-50" : ""
                  } rounded-md p-1 transition-all duration-300`}
                  key={elem.image}
                  onClick={() => setCurrentImage(elem.image)}
                >
                  <img src={elem.image} className="rounded-md size-[80px]" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
