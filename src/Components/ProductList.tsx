/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "../Interface/Product";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";
import { setProductDetails } from "../reducers/productSlice";
type newProductProps = {
  newProduct: IProduct[];
};
const ProductList = ({ newProduct }: newProductProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleLink = (id: string) => {
    dispatch(setProductDetails(id));
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 laptop:grid-cols-12 desktop:grid-cols-12  place-items-center gap-4 tablet:gap-2 mobile:gap-2">
        {newProduct?.map((product: IProduct) => (
          <div
            key={product.id}
            className="col-span-3 row-span-1 rounded overflow-hidden shadow-lg object-contain"
            onClick={() => handleLink(product.id)}
          >
            <img
              src={product.product_image}
              alt=""
              className="w-screen   h-[30vh] w-screen"
            />
            <div className="px-2 py-6">
              <h1 className="font-[PlayfairDisplay] text-[18px]">
                {product.product_title}
              </h1>
              <p className="font-[Satoshi] text-mb flex gap-4">
                ${product.product_price}{" "}
                <Rating value={product.product_rating} disabled />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
