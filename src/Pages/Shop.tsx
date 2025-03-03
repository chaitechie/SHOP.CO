import { RootState, AppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/productSlice";
import ProductList from "../Components/ProductList";
import Loading from "../Components/Loading";
import ReactPaginate from "react-paginate";

function Shop() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const { filteredItems, status } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts);
  });
  const itemsPerPage = 5;
  const data = filteredItems;
  const offset = currentPage * itemsPerPage;
  const paginatedItems = data.slice(offset, offset + itemsPerPage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  return (
    <div className="grid grid-cols-12 gap-2 ">
      <div className="col-span-2 row-span-6 ml-[2%] laptop:block desktop:block  mobile:hidden tablet:hidden ">
        <Sidebar />
      </div>
      <div className="col-span-10 row-span-8 p-2">
        {status !== "loading" ? (
          <ProductList newProduct={paginatedItems} />
        ) : (
          <Loading />
        )}
        <ReactPaginate
          previousLabel={"pre"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
          marginPagesDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={
            "flex justify-center gap-3 items-center font-poppins text-xs"
          }
          activeClassName={
            "bg-transparent border-b-4 border-gray-800 text-white rounded-lg font-medium py-2"
          }
          pageLinkClassName={
            "bg-transparent text-gray-800 border border-gray-800 rounded-lg font-medium px-3 py-2"
          }
          previousLinkClassName={
            "bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium"
          }
          nextLinkClassName={
            "bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium"
          }
          disabledClassName={"pointer-events-none opacity-50"}
        />
      </div>
    </div>
  );
}

export default Shop;
