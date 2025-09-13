import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cartApi } from "../Api/Shoppingcart";

export function useCart() {
  const queryClient = useQueryClient();
  // increase
  const addToCartById = useMutation({
    mutationFn: ({ productId }: { productId: number }) =>
      cartApi.addById(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const getItems = useQuery({
    queryKey: ["cart"], // کلید منحصربه‌فرد برای این query
    queryFn: () => cartApi.getItems().then((res) => res.data), // واکشی داده و فقط data رو برمی‌گردونه
  });
  // increase
  const increase = useMutation({
    mutationFn: ({ productId }: { productId: number }) =>
      cartApi.increase(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const decrease = useMutation({
    mutationFn: ({ productId }: { productId: number }) =>
      cartApi.decrease(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeproduct = useMutation({
    mutationFn: ({ productId }: { productId: number }) =>
      cartApi.removeproduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const clearshoppingcart = useMutation({
    mutationFn: () => cartApi.clearshoppingcart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    addToCartById,
    getItems,
    decrease,
    removeproduct,
    increase,
    clearshoppingcart,
  };
}
