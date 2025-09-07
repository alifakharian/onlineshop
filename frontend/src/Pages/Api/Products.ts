import axiosInstance from "./axiosInstance";

// ----- Types -----
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

export type Root = Root2[];

// ----- APIs -----

// All products
export const ShowProducts = async (): Promise<Root2[]> => {
  const res = await axiosInstance.get<Root>("/product/?format=json");
  return res.data;
};

// Show products by category
export const ShowProductsByCategory = async (
  title: string
): Promise<Root2[]> => {
  const res = await axiosInstance.get<Root>("/product/?format=json");
  return res.data.filter((item) =>
    item.category.some((elem) =>
      elem.toLowerCase().includes(title.toLowerCase())
    )
  );
};

// Single product
export const singleproduct = async (slug: string): Promise<Root2> => {
  const res = await axiosInstance.get<Root2>(`/product/${slug}/?format=json`);
  return res.data;
};
