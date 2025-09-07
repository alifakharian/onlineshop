import { useQuery } from "@tanstack/react-query";
import {
  Root,
  Root2,
  ShowProducts,
  ShowProductsByCategory,
  singleproduct,
} from "../Api/Products";

export const useProducts = () =>
  useQuery<Root>({
    queryKey: ["product"],
    queryFn: ShowProducts,
  });

export const useProductsByCategory = (category: string) =>
  useQuery<Root>({
    queryKey: ["products", category], // کش بر اساس category
    queryFn: () => ShowProductsByCategory(category),
    
  });

export const useSingleProduct = (slug?: string) => {
  return useQuery<Root2>({
    queryKey: ["products", slug],
    queryFn: () => singleproduct(slug!),
    enabled: !!slug, // تا وقتی slug نیست query اجرا نشه
  });
};
