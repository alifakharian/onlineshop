import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useVerifyUser } from "../../hooks/useRegisterUser";

type FormValues = {
  phone: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  code: string;
};

function Register() {
  const [phonenumber, setPhonenumber] = useState(false);
  const [checkCode, setCheckCode] = useState(false);

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");
  const mutation = useVerifyUser();

  const checkPhoneNumber: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data.phone);
    setPhone(data.phone);
    setPhonenumber(true);
  };

  const submitCode: SubmitHandler<FormValues> = (data) => {
    setCode(data.code);
    setCheckCode(true);
  };

  const userInfo: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full py-[50px] min-h-screen h-full">
      <div className="py-6 bg-gray-300 border-2 border-rose-300 dark:border-gray-500 dark:bg-slate-800 rounded-xl px-[40px] flex flex-col smd:w-[80%] sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto">
        <h1 className="text-center mb-5 font-black text-rose-600 dark:text-gray-300">
          به فروشگاه خودتان خوش آمدید
        </h1>

        {/* فرم شماره موبایل */}
        {!phonenumber && (
          <form
            onSubmit={handleSubmit(checkPhoneNumber)}
            className="flex flex-col"
          >
            <label className="text-right text-rose-600 dark:text-blue-500 font-black">
              شماره موبایل
            </label>
            <input
              type="text"
              className="custom-input"
              {...register("phone", {
                required: "شماره تلفن الزامی است",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره باید با 09 شروع شود و 11 رقم باشد",
                },
                maxLength: { value: 11, message: "شماره باید 11 رقم باشد" },
                minLength: { value: 11, message: "شماره باید 11 رقم باشد" },
              })}
              placeholder="شماره تلفن"
            />
            {errors.phone && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.phone.message}
              </p>
            )}
            <button
              className="bg-rose-600 dark:bg-blue-500 text-[14px] duration-700 hover:bg-rose-800 p-1 rounded-lg w-[30%] m-3 text-white"
              type="submit"
            >
              ثبت
            </button>
          </form>
        )}

        {/* فرم کد تأیید */}
        {phonenumber && !checkCode && (
          <form onSubmit={handleSubmit(submitCode)} className="flex flex-col">
            <label className="text-right dark:text-blue-500 text-rose-600 text-[14px] mt-[20px] font-black">
              کد دریافتی را وارد کنید
            </label>
            <input
              type="text"
              className="custom-input"
              {...register("code", { required: "کد دریافتی را وارد کنید" })}
              placeholder="کد تأیید"
            />
            {errors.code && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.code.message}
              </p>
            )}
            <button
              className="bg-rose-600 dark:bg-blue-500 duration-700 hover:bg-rose-800 text-[15px] p-1 rounded-lg w-[50%] m-3 text-white"
              type="submit"
            >
              ارسال کد
            </button>
          </form>
        )}

        {/* فرم اطلاعات کاربری */}
        {checkCode && (
          <form
            onSubmit={handleSubmit(userInfo)}
            className="flex flex-col mt-3 mx-auto"
          >
            <label className="text-right dark:text-blue-500 text-rose-600 text-[14px] mt-[20px] font-black">
              فرم زیر را کامل کنید
            </label>

            <input
              {...register("username", { required: "نام کاربری الزامی است" })}
              placeholder="نام کاربری"
              type="text"
              className="custom-input"
            />
            {errors.username && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.username.message}
              </p>
            )}

            <input
              {...register("password", {
                required: "رمز عبور الزامی است",
                minLength: {
                  value: 6,
                  message: "رمز عبور حداقل 6 کاراکتر باشد",
                },
              })}
              type="password"
              placeholder="رمز عبور"
              className="custom-input my-5"
            />
            {errors.password && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.password.message}
              </p>
            )}

            <input
              {...register("confirmPassword", {
                required: "تکرار رمز عبور الزامی است",
                validate: (value) =>
                  value === password || "رمز عبور و تکرار آن باید یکسان باشد",
              })}
              type="password"
              placeholder="تکرار رمز عبور"
              className="custom-input my-3"
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.confirmPassword.message}
              </p>
            )}

            <input
              type="email"
              className="custom-input"
              {...register("email", {
                required: "ایمیل الزامی است",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "ایمیل معتبر نیست",
                },
              })}
              placeholder="ایمیل خود را وارد کنید"
            />
            {errors.email && (
              <p className="mt-2 text-orange-700 text-[14px] dark:text-gray-300 ml-5">
                {errors.email.message}
              </p>
            )}

            <button
              className="bg-rose-600 dark:bg-blue-500 duration-700 hover:bg-rose-800 mx-0 p-2 rounded-lg w-[30%] m-3 text-white"
              type="submit"
            >
              ثبت
            </button>

            {/* {isError && (
              <p className="text-red-600 mt-2">
                خطا در ثبت نام، دوباره تلاش کنید.
              </p>
            )}
            {isSuccess && (
              <p className="text-green-600 mt-2">ثبت نام با موفقیت انجام شد!</p>
            )} */}
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
