import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../redex/store";
import { toggleDarkMode } from "../../redex/Darkmode";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { BiSolidSun } from "react-icons/bi";

function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.Darkmode.value);
  const [isOpen, setIsOpen] = useState(false);

  const navs = [
    { item: "خانه", link: "/" },
    { item: "محصولات", link: "/product" },
    { item: "درباره ما", link: "/about" },
    { item: "تماس با ما", link: "/contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="flex justify-between dark:text-white flex-row-reverse items-center duration-500 dark:bg-slate-900 bg-gray-300 p-5 relative">
        {/* دکمه منو (فقط در sm پایین‌تر) */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="باز کردن منو"
        >
          <FaBars className="dark:text-white text-gray-800" />
        </button>

        {/* منو در حالت دسکتاپ (sm به بالا) */}
        <div className="hidden sm:flex flex-row-reverse mr-3 gap-4">
          {navs.map((elem) => (
            <div key={elem.link}>
              <NavLink
                to={elem.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-600 text-[16px] duration-1000 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                    : "text-rose-600 block duration-1000  dark:text-white text-[16px]"
                }
              >
                {elem.item}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex gap-4 ">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="text-slate-1000 duration-1000 text-[24px] dark:text-white  rounded-full"
          >
            {darkMode ? <BiSolidSun /> : <FaMoon className="text-xl text-gray-600" />}
          </button>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 text-[16px] duration-1000 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                : "text-rose-600 block duration-1000  dark:text-white text-[16px]"
            }
            to="/Registerpage"
          >
            ثبت نام
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 text-[16px] duration-1000 dark:bg-gray-400 text-white rounded-md px-2 py-1"
                : "text-rose-600 duration-1000  dark:text-white text-[16px]"
            }
            to="/login"
          >
            ورود
          </NavLink>
        </div>

        {/* منو در حالت موبایل (sm پایین‌تر) */}
        <div
          className={`fixed top-0 right-0 h-full w-56 bg-gray-200 dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden flex flex-col p-5`}
        >
          {/* دکمه بستن منو */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-start mb-6 dark:bg-white p-2 text-xl rounded-full dark:text-gray-900"
          >
            <FaTimes />
          </button>

          {/* آیتم‌های منو */}
          <nav className="flex  flex-col gap-6">
            {navs.map((elem) => (
              <Link
                key={elem.link}
                to={elem.link}
                className="text-right"
                onClick={() => setIsOpen(false)} // بستن منو هنگام کلیک
              >
                {elem.item}
              </Link>
            ))}
            {/* دکمه ثبت نام در موبایل */}
            <Link
              to="/Registerpage"
              className="mt-4 bg-rose-600 text-white rounded-lg p-2"
              onClick={() => setIsOpen(false)}
            >
              ثبت نام
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
