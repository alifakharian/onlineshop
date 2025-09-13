import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

function Totalprice() {
  const { getItems, clearshoppingcart } = useCart();

  const { data, isLoading } = getItems;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex gap-3 m-5">
      <div className="bg-rose-600 dark:bg-blue-600 text-white p-2 text-[13px] font-black inline-block  rounded-lg">
        مجموع قیمت : {(+(data?.total_price || 0)).toLocaleString("fa-IR")}
      </div>
      <button
        onClick={() => clearshoppingcart.mutate()}
        className="text-orange-700 dark:text-gray-200  p-2 text-[25px] font-black inline-block  rounded-lg"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Totalprice;
