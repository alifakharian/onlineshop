import axiosInstance from "./axiosInstance";

export interface Tfirstslider {
  baner: string;
  alt: string | null;
  link: string | null;
}
// Firstslider of homepage
export const Firstslider = async (): Promise<Tfirstslider[]> => {
  const res = await axiosInstance.get("baners/header/?format=json");
  return res.data;
};

// Adver of homepage

export const Adver = async (): Promise<Tfirstslider[]> => {
  const res = await axiosInstance.get("baners/home/pg/?format=json");
  return res.data;
};
