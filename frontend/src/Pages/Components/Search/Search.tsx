import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import daylogo from "../../../Pages/image/logo/day.svg";
import darkimg from "../../../Pages/image/logo/darkimg.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redex/store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormValues {
  search: string;
}

function Search() {
  const darkMode = useSelector((state: RootState) => state.Darkmode.value);
  const dispatch = useDispatch();
  const { register, watch } = useForm<FormValues>();

  const navigate = useNavigate();
  const searchValue = watch("search"); // مقدار لحظه‌ای input

  return (
    <>
      <div className="flex justify-between dark:bg-slate-800 duration-700 flex-row-reverse p-2">
        <img src={darkMode ? darkimg : daylogo} />

        <div className="relative w-[30%]">
          <input
            {...register("search")}
            className="w-full h-10 px-4 py-2 text-sm font-semibold text-center text-gray-700 bg-slate-200 placeholder-rose-300 rounded-lg border-2 border-rose-200 focus:outline-none dark:bg-slate-400 dark:placeholder-slate-600 dark:border-slate-500 sm:text-base md:h-12 md:px-6"
            placeholder=".... جستجوی محصولات"
            autoComplete="off"
          />

          <button
            type="submit"
            // onClick={() => dispatch(showAlert("سلام! این یه پیام آلرت هست"))}
            onClick={() => {
              if (searchValue) {
                navigate(
                  `/Resultsearch?category=${encodeURIComponent(searchValue)}`
                );
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full duration-700 hover:bg-rose-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-700"
          >
            <FaSearch />
          </button>
        </div>
        <SlBasket className="text-rose-600 font-bold text-[20px] dark:text-gray-200 ml-3 mt-2" />
      </div>
    </>
  );
}

export default Search;
