import Button from "./Button";
import { MergedCartItem } from "./Cartitem";

interface ProductsProps {
  mergedCart: MergedCartItem[];
}

function Products({ mergedCart }: ProductsProps) {
  return (
    <>
      <div className="dark:bg-slate-700 dark:text-white">
        {mergedCart &&
          mergedCart.map((elem: MergedCartItem) => {
            return (
              <div>
                <div className="flex p-4 flex-row-reverse" key={elem.id}>
                  <img
                    className="size-[120px] rounded-full dark:border-blue-600 border-2 border-rose-600 p-1"
                    src={elem.details?.baner}
                  />

                  <div className="flex flex-col gap-2 justify-end bg-red-5 mr-2 text-right">
                    <p className="mt-[28px] font-bold mr-3 text-rose-600 dark:text-gray-200">
                      {elem.details?.category}
                    </p>

                    <div className="flex text-gray-800 dark:text-white font-bold  flex-row-reverse gap-1">
                      <p>
                        {(+(elem.details?.price ?? 0) * +elem.quantity)
                          .toLocaleString("fa-IR")
                          .replace(/٬/g, ",")}
                      </p>
                      <p>تومان</p>
                    </div>
                    <Button elem={elem} />
                  </div>
                </div>

                <div className="bg-gray-400 rounded-full dark:bg-white w-full mx-auto h-[2.5px]"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;
