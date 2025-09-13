import { adver } from "../../hooks/userbannerSlider";
import Loading from "../Products/Loading";

function Advertize() {
  const { data, isLoading } = adver();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-[40px] dark:bg-slate-800 ">
        {data &&
          data.map((elem) => {
            return (
              <div key={elem.alt}>
                <img src={elem.baner} className="rounded-lg" />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Advertize;
