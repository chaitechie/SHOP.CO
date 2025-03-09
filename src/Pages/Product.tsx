import { RootState,AppDispatch } from "../store/store";
import { useDispatch,useSelector } from "react-redux";
import ProductInfo from "../Components/ProductInfo";
import Loading from "../Components/Loading";
import { Rating } from "@mui/material";
import { productTestimonals } from "../utils/data";
import {useEffect} from 'react'
 import { setCategoryFilter } from "../reducers/productSlice";
import ProductList from "../Components/ProductList";
function Product() {
  const { productDetail,filteredItems } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(setCategoryFilter(productDetail?.product_category))
  },[dispatch, productDetail?.product_category])
  if(productDetail.product_title.length === 0){
    return <Loading />
  }
  return (
    <div className="p-5">

        <ProductInfo detail={productDetail} />
      
      <div className=" m-2 laptop:mt-[-10%] desktop:mt-[-16%]">
        <h1 className="text-[1.8rem] text-center font-['PlayfairDisplay'] ">
          Reviews for Product
        </h1>
        <div className="grid  gap-4 laptop:grid-cols-3 mobile:grid-cols-3 tablet:grid-cols-2 grid-cols-1">
          {productTestimonals.map((product) => (
            <>
              <div
                className="bg-[#fff] border-solid border-[#000] border-[2px] rounded-lg w-400 h-242 pl-[2%]"
                key={product.name}
              >
                <Rating name="read-only" value={product.rate} />
                <h1 className="text-[1.8rem] font-['PlayfairDisplay'] ">
                  {product.name}
                </h1>
                <p className="font-[Satoshi] text-[14px]">{product.review}</p>
                <p className="font-[Satoshi] text-[14px]">{product.date}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="m-4 p-3">
        <h2 className="text-center font-[PlayFairDisplay] text-[32px]">Recommend Products</h2>
        <ProductList newProduct={filteredItems.slice(0,4)} />
      </div>
    </div>
  );
}

export default Product;
