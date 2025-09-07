  import { Link } from "react-router-dom";
  import { Root2 } from "../../Api/Products";
  export interface ProductItemProps {
    elem: Root2;
    
  }

  function ProductItem({ elem }: ProductItemProps) {
    return (
      <>
        <Link to={`/product/${elem.slug}`} key={elem.id}>
          <div
            className="flex hover:-translate-y-4  duration-1000 bg-gray-200 dark:bg-slate-300 shadow-lg shadow-neutral-700 dark:shadow-slate-400  border-2 border-gray-200 rounded-lg  flex-col text-right justify-start"
            key={elem.id}
          >
            <img
              src={elem.baner}
              className="size-[160px] mx-auto mt-2  rounded-lg"
            />
            <p className=" font-black pt-3 pr-2 text-rose-600 dark:text-blue-600">
              {elem.category}
            </p>
            <p className="text-[11px] pr-2 text-purple-900 font-black my-1">
              تعداد موجود در انبار : {elem.stock}
            </p>

            <div className="text-left pl-1   text-[10px] line-through decoration-[1px]  flex flex-row-reverse gap-1 justify-end font-bold text-gray-600">
              <div className="">
                {Number(elem.sale_price).toLocaleString("fa-IR")}
              </div>
              <div>تومان</div>
            </div>

            <div className="flex px-1 justify-between">
              <div className="text-left mt-2 text-[15px] my-3 flex flex-row-reverse gap-1 justify-end font-bold text-rose-600">
                <div className="dark:text-blue-600">
                  {Number(elem.price).toLocaleString("fa-IR")}
                </div>
                <div className="dark:text-blue-600">تومان</div>
              </div>
              <div className="bg-rose-600 dark:bg-blue-600 mt-1 text-[13px] rounded-full text-white p-1  w-[25px] h-[25px]">
                {elem.discount_off}%
              </div>
            </div>
            <div className="bg-rose-600 font-bold duration-700 hover:dark:bg-blue-800 hover:bg-rose-800 dark:bg-blue-600 text-white rounded-b-lg p-1 text-[13px] text-center px-[20px] w-[100%]  mx-auto">
              نمایش بیش تر
            </div>
          </div>
        </Link>
      </>
    );
  }

  export default ProductItem;
