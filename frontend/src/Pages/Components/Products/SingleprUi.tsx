import { useSingleProduct } from "../../hooks/userProduct";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Buttons from "./Buttons";
import Singelproductimg from "./Singelproductimg";
export type Params = {
  slug: string;
};

function SingleprUi() {
  const { slug } = useParams<Params>();
  const { data, isLoading } = useSingleProduct(slug);
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="grid justify-items- gap-[80px] dark:bg-slate-800 pt-3 smd:px-5 sm:px-1 dark:text-white pr-3 duration-700 grid-cols-1 sm:grid-cols-2">
        <Singelproductimg />

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

          <Buttons />
        </div>
      </div>
    </>
  );
}

export default SingleprUi;
