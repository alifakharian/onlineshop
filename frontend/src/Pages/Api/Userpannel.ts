import axiosInstance from "./axiosInstance";

export const verifyUserCode = async (code: string) => {
  const res = await axiosInstance.post("/accounts/register/verify/", { code });
  return res.data;
};

// export const verifyCode = async (payload: { phone: string; code: string }) => {
//   const res = await axiosInstance.post("/accounts/register/verify/", payload);
//   return res.data;
// };

// export const completeRegister = async (payload: {
//   phone: string;
//   username: string;
//   email: string;
//   password: string;
// }) => {
//   const res = await axiosInstance.post("/accounts/register/complete/", payload);
//   return res.data;
// };
