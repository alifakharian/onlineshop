import { useProducts } from "../../hooks/userProduct";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

function Products() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <Loading />;

  return (
    <div className="grid sm:grid-cols-1 gap-5 p-[40px] duration-700 dark:bg-slate-800 md:grid-cols-2 lg:grid-cols-7 px-3 justify-items-center">
      {data && data.map((elem) => <ProductItem key={elem.id} elem={elem} />)}
    </div>
  );
}

export default Products;
