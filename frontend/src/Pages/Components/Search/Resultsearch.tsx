import { useProductsByCategory } from "../../hooks/userProduct";
import { useLocation } from "react-router-dom";
import ProductItem from "../Products/ProductItem";
import Loading from "../Products/Loading";

function Resultsearch() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "";
  
  const { data, isLoading } = useProductsByCategory(category);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid  dark:bg-slate-800 p-4  gap-4 smd:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {data && data.length > 0 ? (
          data.map((elem) => <ProductItem elem={elem} key={elem.id} />)
        ) : (
          <div className="text-rose-600 font-black dark:text-gray-200">
            !!محصول مورد نظر یافت نشد
          </div>
        )}
      </div>
    </>
  );
}
export default Resultsearch;
