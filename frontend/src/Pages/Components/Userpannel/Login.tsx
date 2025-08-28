import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin, useLogout } from "../../hooks/useRegisterUser";
type FormValues = {
  phone: string;
  password: string;
};

function Login() {
  const loginuser = useLogin();
  const logoutUser = useLogout();
  const loginbox: SubmitHandler<FormValues> = (data) => {
    loginuser.mutate(
      { phone: data.phone, password: data.password },
      {
        onSuccess: () => {},
        onError: (error: any) => {
          alert(error.response?.data?.detail || "شما ثبت نام نکرده اید");
        },
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <>
      <div className="W-full mx-5 md:w-[40%] md:mx-auto mt-5 p-5 bg-gray-300 border-2 border-rose-300 dark:border-gray-500 dark:bg-slate-800 rounded-xl">
        <form onSubmit={handleSubmit(loginbox)} className="flex flex-col">
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
          <label className="text-right mt-[20px] mb-1 text-rose-600 mt- dark:text-blue-500 font-black">
            رمز عبور
          </label>

          <input
            type="text"
            className="custom-input"
            {...register("password", {
              required: "رمزعبور الزامی است",
            })}
            placeholder="رمز عبور"
          />

          <button
            className="bg-rose-600 dark:bg-blue-500  text-[14px] duration-700 hover:bg-rose-800 p-1 rounded-lg w-[20%] m-3 text-white"
            type="submit"
          >
            ثبت
          </button>
        </form>
        <button
          className="bg-rose-600 dark:bg-blue-500  text-[14px] duration-700 hover:bg-rose-800 p-2 rounded-lg w-[25%] m-3 text-white"
          type="submit"
          onClick={() => logoutUser.mutate()}
        >
          خروج از حساب کاربری
        </button>
      </div>
    </>
  );
}

export default Login;
