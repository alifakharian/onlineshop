import { useQuery } from "@tanstack/react-query";
import { Root, Root2, ShowProducts, singleproduct } from "../Api/Products";

export const useProducts = () =>
  useQuery<Root>({
    queryKey: ["product"],
    queryFn: ShowProducts,
  });
export const useSingleProduct = (slug?: string) => {
  return useQuery<Root2>({
    queryKey: ["products", slug],
    queryFn: () => singleproduct(slug!),
    enabled: !!slug, // تا وقتی slug نیست query اجرا نشه
  });
};
