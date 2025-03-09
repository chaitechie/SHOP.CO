import intropic from "../assets/img/pics/intropic.png";
import gucci from "../assets/img/pics/gucci.png";
import prada from "../assets/img/pics/prada.png";
import zara from "../assets/img/pics/zara.png";
import versace from "../assets/img/pics/versace.png";
import calvinklein from "../assets/img/pics/calvinklein.png";
import Formal from "../assets/img/svg/formal.svg";
import Casual from "../assets/img/svg/casual.svg";
import Party from "../assets/img/svg/party.svg";
import Gym from "../assets/img/svg/gym.svg";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { fetchProducts } from "../reducers/productSlice";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../Interface/Product";
import ProductList from "../Components/ProductList";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (status === "failed") {
    alert("Something got wrong");
  }

  if (status === "loading" && items.length === 0) {
    return <Loading />;
  }

  const category: IProduct[] = items
    ?.filter(
      (item: { product_category: string }) => item.product_category === "casual"
    )
    .slice(0, 4);

  const rating: IProduct[] = items
    ?.filter((item: { product_price: number }) => item.product_price <= 1000)
    .slice(0, 4);

  return (
    <>
      <div className="w-screen grid grid-cols-1  place-items-center gap-4 laptop:grid-cols-12 desktop:grid-cols-12">
        <div className="flex flex-col items-center justify-center gap-[5px] col-span-7">
          <h1 className="text-[4rem] font-['PlayfairDisplay'] ml-[10%]">
            FIND CLOTHES THAT MATCHES YOUR STYLES{" "}
          </h1>
          <p className="font-['Satoshi'] ml-[10%] text-[14px]">
            Broswe Through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style
          </p>
          <Link to={"/shop"}>
            <button className="bg-[#000] w-[300px] h-[10vh] p-4 rounded-xl text-[#fff] mt-[20px]">
              Shop Now
            </button>
          </Link>
          <div className="flex flex-row justify-center items-center gap-[20px] mt-[30px] flex-wrap">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-[3rem] font-bold font-['PlayfairDisplay']">
                200+
              </h1>
              <p className="text-[18px] font-light font-['Satoshi']">
                International Brands
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-[3rem] font-bold font-['PlayfairDisplay']">
                2000+
              </h1>
              <p className="text-[18px] font-light font-['Satoshi']">
                High-Quality Products
              </p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-[3rem] font-bold font-['PlayfairDisplay']">
                30,000+
              </h1>
              <p className="text-[18px] font-light font-['Satoshi']">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <img
          src={intropic}
          alt="headerpic"
          className="w-auto h-[600px] col-span-5 "
        />
      </div>
      {/* brands */}
      <div
        className="flex flex-row justify-evenly items-center gap-4 
    bg-[#000] h-[25vh] w-screen flex-wrap object-contain 
    "
      >
        <img src={versace} alt="versace" />
        <img src={zara} alt="zara" />
        <img src={gucci} alt="gucci" />
        <img src={prada} alt="prada" />
        <img src={calvinklein} alt="calvikelin" className="" />
      </div>
      {/*New Product */}
      <div>
        <h1 className="text-[2rem] font-['PlayfairDisplay'] text-center font-bold ">
          NEW PRODUCTS
        </h1>

        <div className="p-5">
          {status !== "loading" ? <ProductList newProduct={category} /> : ""}
        </div>
      </div>

      {/* top selling */}
      <div>
        <h1 className="text-[2rem] font-['PlayfairDisplay'] text-center font-bold ">
          Top Rated
        </h1>
        <div className="p-5">
          {status !== "loading" ? <ProductList newProduct={rating} /> : ""}
        </div>
      </div>
      {/* Category */}

      <div className="bg-[#f2eff0] m-[2%] p-[1%] rounded-lg">
        <h1 className="text-[4rem] font-['PlayfairDisplay'] text-center">
          BROSWE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 laptop:grid-cols-12 desktop:grid-cols-12  gap-8 mb-4">
          <div className=" flex justify-between items-center bg-[#fff] rounded-[20px] col-span-4  mobile:w-full w-auto">
            <h2 className="text-[2rem] font-bold font-['PlayfairDisplay'] ">
              Casual
            </h2>
            <Casual className="w-[400px] h-[200px] rounded-r-[20px]" />
          </div>
          <div className="flex  bg-[#fff] flex  justify-between items-center rounded-[20px] col-span-8">
            <h2 className="text-[2rem] font-bold font-['PlayfairDisplay'] ml-[20px]">
              Formal
            </h2>
            <Formal className="w-[400px] h-[200px] rounded-r-[20px] " />
          </div>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-12 desktop:grid-cols-12  gap-8">
          <div className="flex  bg-[#fff] flex  justify-between items-center rounded-[20px] col-span-8 mobile:w-full w-auto ">
            <h2 className="text-[2rem] font-bold font-['PlayfairDisplay']">
              Party
            </h2>
            <Party className="w-[400px] h-[200px] rounded-r-[20px]" />
          </div>
          <div className=" flex  bg-[#fff] rounded-[20px] justify-between items-center col-span-4 mobile:w-full w-auto">
            <h2 className="text-[2rem] font-bold font-['PlayfairDisplay'] ml-[20px] ">
              Gym
            </h2>
            <Gym className="w-[400px] h-[200px] rounded-r-[20px]" />
          </div>
        </div>
      </div>

      {/* Testimonals */}

      <div className="p-[2%]">
        <h1 className="text-[2rem] font-['PlayfairDisplay'] text-center">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="grid  gap-4 laptop:grid-cols-3 mobile:grid-cols-3 tablet:grid-cols-2 grid-cols-1">

          <div className="bg-[#fff] border-solid border-[#000] border-[2px] rounded-lg w-400 h-242 pl-[2%]">
            <Rating name="read-only" value={5} />
            <h1 className="text-[1.8rem] font-['PlayfairDisplay'] ">Mooen</h1>
            <p>
              As someone who&apos;s always on the lookout for unique fashion
              pieces, I&apos;m thrilled to have stumbled upon Shop.co. The
              selection of clothes is not only diverse but also on-point with
              the latest trends.
            </p>
          </div>
          <div className="bg-[#fff] border-solid border-[#000] border-[2px] rounded-lg w-400 h-242 pl-[2%]">
            <Rating name="read-only" value={5} />
            <h1 className="text-[1.8rem] font-['PlayfairDisplay'] ">
              James L.
            </h1>
            <p>
              Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.
            </p>
          </div>
          <div className="bg-[#fff] border-solid border-[#000] border-[2px] rounded-lg w-400 h-242 pl-[2%]">
            <Rating name="read-only" value={5} />
            <h1 className="text-[1.8rem] font-['PlayfairDisplay'] ">Alex K.</h1>
            <p>
              I&apos;m blown away by the quality and style of the clothes I
              received from Shop.co. From casual wear to elegant dresses, every
              piece I&apos;ve bought has exceeded my expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
