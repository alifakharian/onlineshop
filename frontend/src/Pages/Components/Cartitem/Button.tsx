import { MdDeleteForever } from "react-icons/md";
import { MergedCartItem } from "./Cartitem";
import { useCart } from "../../hooks/useCart";
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";

interface ButtonProps {
  elem: MergedCartItem;
}

function Button({ elem }: ButtonProps) {
  const { increase, decrease, removeproduct } = useCart();
  return (
    <div className="flex flex-row-reverse gap-3">
      <button
        className=""
        onClick={() => {
          if (elem.id) {
            increase.mutate(
              { productId: elem.id } // ← cart item id
            );
          }
        }}
      >
        <IoIosAddCircle className="dark:text-white text-[30px] text-rose-600" />
      </button>
      <div className="mt-2 text-gray-700 dark:text-white font-bold">
        {elem.quantity}
      </div>
      <button
        onClick={() => {
          if (elem.id) {
            decrease.mutate(
              { productId: elem.id } // ← cart item id
            );
          }
        }}
      >
        <FaCircleMinus className="dark:text-white text-[25px] text-rose-600 bg-rose" />
      </button>
      <button
        onClick={() => {
          if (elem.id) {
            removeproduct.mutate(
              { productId: elem.id } // ← cart item id
            );
          }
        }}
      >
        <MdDeleteForever className="text-[38px] text-orange-600 dark:text-gray-200" />
      </button>
    </div>
  );
}

export default Button;
