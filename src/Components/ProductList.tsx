/* eslint-disable @typescript-eslint/no-explicit-any */
import Rating from '@mui/material/Rating';
import { DocumentData } from "firebase/firestore"

type Props = {
    productList :DocumentData,
    id:string,
    key:string,
}

const ProductList = (props: Props) => {
  console.log(props.productList)
  return (
    <div key={props.id} className="flex flex-col justify-center items-center gap-[10px] w-[400px] h-[400px]">
      <img src={props.productList?.product_image} alt="" className="w-[200px] h-[200px] rounded-lg"/>
   <h1 className="text-[1rem] font-['PlayfairDisplay'] text-center font-Medium ">{props.productList?.product_title} </h1>
   <Rating name="disabled" defaultValue={props.productList?.product_rating} disabled />
   <p className="text-[1rem] font-['Satoshi'] text-start font-Medium ">${props.productList?.product_price}</p>
    </div>
  )
}

export default ProductList