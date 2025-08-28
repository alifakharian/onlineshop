import axiosInstance from "./axiosInstance";
//  userphonenumber
export const verifyUserCode = async (phone: string) => {
  const res = await axiosInstance.post("/accounts/register/", { phone });
  return res.data;
};
// userlogin
export const login = async (phone: string, password: string) => {
  const res = await axiosInstance.post("/accounts/api/token/", {
    phone,
    password,
  });
  return res.data;
};

// userlogout
export const logout = async () => {
  try {
    const res = await axiosInstance.post("/accounts/logout/", {
      refresh: localStorage.getItem("refreshToken"),
    });
    console.log("server response:", res.data);
    return res.data;
  } catch (err) {
    console.log("عدم موفقیت درخواست");
  }
};
