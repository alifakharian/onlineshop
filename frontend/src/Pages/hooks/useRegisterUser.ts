import { useMutation } from "@tanstack/react-query";
import { login, logout, verifyUserCode } from "../Api/Userpannel";
import { setCode, setTokens } from "../redex/Register";
import { useDispatch } from "react-redux";
// userphonenumber
export const useVerifyUser = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ phone }: { phone: string }) => verifyUserCode(phone),
    onSuccess: (data) => {
      dispatch(setCode(data.phone));
    },
  });
};
// userlogin
export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ phone, password }: { phone: string; password: string }) =>
      login(phone, password),
    onSuccess: (data) => {
      console.log("Login response:", data);
      dispatch(setTokens({ access: data.access, refresh: data.refresh }));
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data || error.message);
    },
  });
};

// userlogout
export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log("کاربر با موفقیت خارج شد");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    onError: () => {
      console.log("عدم خروج کاربر");
    },
  });
};
