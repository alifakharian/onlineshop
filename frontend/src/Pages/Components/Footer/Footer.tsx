import { FaChevronCircleUp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiAparat } from "react-icons/si";
import daylogo from "../../../Pages/image/logo/day.svg";
import darkimg from "../../../Pages/image/logo/darkimg.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redex/store";

function Footer() {
  const darkMode = useSelector((state: RootState) => state.Darkmode.value);
  return (
    <>
      <div
        className="dark:bg-slate-900 duration-700 text-gray-600 bg-gray-300 px-[50px] pb-5 dark:text-white pt-10"
        dir="rtl"
      >
        <div className="">
          <div className="pb-3 smd:w-[200px]">
            <img src={darkMode ? darkimg : daylogo} />
          </div>
        </div>
        <div className="grid place-items-start  grid-cols-1 gap-y-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="">
            <h1 className="font-black">درباره دی جی لند</h1>
            <div className="flex flex-col gap-y-3 mt-5">
              <p>تماس با ما</p>
              <p>مجله دی جی لند</p>
              <p>درباره ما</p>
              <p>شعب</p>
              <p>شرایط و قوانین</p>
              <p>خرید اقساطی</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-black">خدمات مشتریان</h1>
            <div className="flex flex-col gap-y-3 mt-5">
              <p>پرسش های متداول</p>
              <p>راهنمای خرید</p>
              <p>شرایط بازگشت کالا</p>
              <p></p>
              <p>ثیت شکایات</p>
              <p>حریم خصوصی</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-black">دسته بندی های پر بازدید</h1>
            <div className="flex flex-col gap-y-3 mt-5">
              <p>گوشی موبایل</p>
              <p>لب تاب</p>
              <p>هدفون و هندزفری</p>
              <p>اسپیکر و بلندگو</p>
              <p>ساعت هوشمند</p>
              <p>تجهیزات ذخیره سازی</p>
              <p>شارژ و پاوربانک</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-black">ساعت پاسخ گویی</h1>
            <div className="flex flex-col gap-y-3 mt-5">
              <p>۷ روز هفته از ساعت ۹ الی ۲۰</p>
              <p className="font-black">تلفن امور مشتریان</p>
              <p className="font-black">021 - 41016</p>
              <p className="font-black">روابط عمومی</p>
              <p className="font-black">info@digiland.com</p>
            </div>
          </div>

          <div>
            <h1 className="font-black">ما را دنبال کنید</h1>
            <div className="flex gap-2 mt-5">
              <FaTelegram className="text-[30px] text-gray-600" />
              <FaSquareInstagram className="text-[30px] text-gray-600" />
              <FaLinkedin className="text-[30px] text-gray-600" />
              <SiAparat className="text-[30px] text-gray-600" />
            </div>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-1 outline-none right-2 dark:bg-gray-600 hover:dark:bg-gray-700 bg-red-600 hover:bg-red-800 duration-700 rounded-full p-2"
        >
          <FaChevronCircleUp className="text-[27px] text-white" />
        </button>
      </div>
    </>
  );
}

export default Footer;
