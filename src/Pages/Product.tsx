import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import ProductInfo from "../Components/ProductInfo";
import Loading from  '../Components/Loading';
import {Rating} from '@mui/material';
import { productTestimonals } from "../utils/data";
function Product() {
  const {productDetail} = useSelector((state:RootState) => state.products)
  
  return (
    <div className="p-5">
    {productDetail !== undefined ? <ProductInfo detail={productDetail} /> : <Loading />}  
   <div>
            <h1 className="text-[1.8rem] text-center font-['PlayfairDisplay'] ">Reviews for Product</h1>
   <div className="grid  gap-4 laptop:grid-cols-3 mobile:grid-cols-3 tablet:grid-cols-2 grid-cols-1">
          {
            productTestimonals.map((product) => (
             <>
              <div className="bg-[#fff] border-solid border-[#000] border-[2px] rounded-lg w-400 h-242 pl-[2%]" key={product.name}>
              <Rating name="read-only" value={product.rate} />
              <h1 className="text-[1.8rem] font-['PlayfairDisplay'] ">{product.name}</h1>
              <p>
                {product.review}
              </p>
              <p>{product.date}</p>
            </div>
            
             </>
            ))
          }
         

        </div>
   </div>

    </div>
  )
}

export default Product