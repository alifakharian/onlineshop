import axiosInstance from "./axiosInstance";
export type Root = Root2[];

export interface Root2 {
  id: number;
  category: string[];
  galery: Galery[];
  baner: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  sale_price: string;
  discount_off: number;
  stock: number;
  is_available: boolean;
}

export interface Galery {
  image: string;
}

// All products
export const ShowProducts = async (): Promise<Root> => {
  const res = await axiosInstance.get<Root>("/product/?format=json");
  return res.data;
};
// singleproduct

export const singleproduct = async (slug: string): Promise<Root2> => {
  const res = await axiosInstance.get<Root2>(`/product/${slug}/?format=json`);
  return res.data;
};
