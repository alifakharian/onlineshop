import { useProducts } from "../../hooks/userProduct";

const Category: React.FC = () => {
  const { data } = useProducts();

  return (
    <div className="dark:bg-slate-800 p-3 dark:text-white">
      <h1 className="text-center text-gray-800 dark:text-white   font-black py-5">
        دسته بندی های پربازدید
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-9 smd:grid-cols-1  gap-4">
        {data &&
          data.map((elem, index) => (
            <div key={index} className="flex pb-5  flex-col items-center">
              <img
                src={elem.baner}
                alt={elem.title}
                className="size-[100px] rounded-full border-2 border-rose-600   p-1 dark:border-blue-600 object-contain"
              />
              <p className="mt-2 font-black text-rose-600 dark:text-gray-300">{elem.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
