import img1 from "../../../Pages/image/adver/1.webp";
import img2 from "../../../Pages/image/adver/2.webp";
import img3 from "../../../Pages/image/adver/3.webp";

function Advertize() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 p-3 dark:bg-slate-900 ">
        <img src={img1} className="rounded-lg" />
        <img src={img2} className="rounded-lg" />
        <img src={img3} className="rounded-lg" />
      </div>
    </>
  );
}

export default Advertize;
