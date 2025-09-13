import axiosInstance from "./axiosInstance";

interface RootObject {
  cart: Cart;
  total_price: number;
  total_items: number;
}
interface Cart {
  user?: any;
  session_key: string;
  items: Item[];
}

export interface Root {
  cart: Cart;
  total_price: number;
  total_items: number;
}

export interface Item {
  id: number;
  quantity: number;
  product: string;
}

export const cartApi = {
  getItems: () => axiosInstance.get<RootObject>("/cart/items/"),
  addById: (cartId: number) =>  axiosInstance.post(`/cart/add/${cartId}/`, { quantity: 1 }),
  increase:( cartId: number)=>axiosInstance.get(`/cart/add/qu/${cartId}/`),
  decrease: (cartId: number) => axiosInstance.get(`/cart/sub/qu/${cartId}/`),
  removeproduct: (cartId: number) =>  axiosInstance.get(`/cart/remove/${cartId}/`), 
  clearshoppingcart: () =>  axiosInstance.get(`/cart/clear/`), 
};
