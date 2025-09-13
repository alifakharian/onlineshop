import { useSingleProduct } from "../../hooks/userProduct";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useCart } from "../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { Params } from "./SingleprUi";


// removeproduct
function Buttons() {
  const { slug } = useParams<Params>();
  const { data, isLoading } = useSingleProduct(slug);
  const { addToCartById, getItems, decrease, removeproduct, increase } =
    useCart();
  const cartItems = getItems.data?.cart.items || [];
  const quantity =
    cartItems.find((item) => item.product === data?.title)?.quantity ?? 0;

  // پیدا کردن آیتم مربوط به این محصول در سبد خرید
  const cartItemId = cartItems.find((item) => item.product === data?.title);

  if (isLoading || getItems.isLoading) return <Loading />;

  return (
    <>
      <div className="">
        {quantity > 0 ? (
          <div className="flex  my-5 text-[13px] justify-start gap-3 flex-wrap">
            <button
              onClick={() => {
                if (cartItemId) {
                  increase.mutate(
                    { productId: cartItemId.id } // ← cart item id
                  );
                }
              }}
              disabled={!cartItemId}
            >
              <IoIosAddCircle className="dark:text-white text-[30px] text-rose-600" />
            </button>
            <p className="pt-3 text-[15px] font-bold text-gray-800 dark:text-white">
              {quantity}
            </p>
            <button
              onClick={() => {
                if (cartItemId) {
                  decrease.mutate(
                    { productId: cartItemId.id } // ← cart item id
                  );
                }
              }}
              disabled={!cartItemId}
            >
              <FaCircleMinus className="dark:text-white text-[25px] text-rose-600 bg-rose" />
            </button>

            <button
              onClick={() => {
                if (cartItemId) {
                  removeproduct.mutate(
                    { productId: cartItemId.id } // ← cart item id
                  );
                }
              }}
            >
              <MdDeleteForever className="text-[38px] text-orange-600 dark:text-gray-200" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCartById.mutate({ productId: data!.id })}
            className="my-5 text-white bg-rose-600 py-2 px-4 text-[14px] rounded-lg outline-none dark:bg-blue-600"
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </>
  );
}

export default Buttons;
