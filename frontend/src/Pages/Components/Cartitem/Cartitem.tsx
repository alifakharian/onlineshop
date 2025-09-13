import Products from "./Products";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/userProduct";
import Loading from "../Products/Loading";
import Totalprice from "./Totalprice";

export interface CartItem {
  id: number;
  quantity: number;
  product: string; // همون title محصول
}
interface TProduct {
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
interface Galery {
  image: string;
}

export interface MergedCartItem extends CartItem {
  details: TProduct | null;
}

function Cartitem() {
  const { getItems } = useCart();
  const { data: productsData, isLoading: productsLoading } = useProducts();
  const { data: cartitems, isLoading: cartLoading } = getItems;

  if (cartLoading || productsLoading) return <Loading />;
  if (!cartitems?.cart?.items?.length)
    return (
      <p className="text-center dark:bg-slate-700 text-rose-600 font-bold p-[89px] dark:p-[92px] dark:text-white">
        سبد خرید خالی است
      </p>
    );

  const products: TProduct[] = productsData ?? [];

  // مَچ کردن cart با products
  const mergedCart: MergedCartItem[] = cartitems.cart.items.map((item) => {
    const productInfo = products.find((elem) => elem.title === item.product);
    return {
      ...item,
      details: productInfo || null,
    };
  });

  return (
    <>
      <Products mergedCart={mergedCart} />
      <Totalprice />
    </>
  );
}

export default Cartitem;
