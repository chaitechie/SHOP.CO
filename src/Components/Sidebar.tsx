import { Rating } from "@mui/material";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setSorting,
  setRating,
} from "../reducers/productSlice";

function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className=" border-[1px] border-black flex flex-col justify-center items-center gap-2 rounded-xl h-screen bg-[#000] ">
      <h3 className="font-[PlayfairDisplay] text-lg text-white ">Filters</h3>
      <div>
        <h3 className="font-[PlayfairDisplay] text-lg text-white">
          Price Filters
        </h3>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setSorting("LowToHigh"))}
          >
            LowToHigh
          </button>
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setSorting("HighToLow"))}
          >
            HighToLow
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-[PlayfairDisplay] text-lg text-white">Category</h3>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setCategoryFilter("formal"))}
          >
            Formal
          </button>
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setCategoryFilter("casual"))}
          >
            Casual
          </button>
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setCategoryFilter("gym"))}
          >
            Gym
          </button>
          <button
            className="font-[Satoshi] text-md text-white  "
            onClick={() => dispatch(setCategoryFilter("party"))}
          >
            Party
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-[PlayfairDisplay] text-lg text-white text-center">
          Rating
        </h3>
        <div className="flex flex-col justify-center items-center gap-2 bg-black-400">
          <button
            className=" bg-gray-600 p-1 rounded-xl"
            onClick={() => dispatch(setRating(5))}
          >
            <Rating value={5} disabled />
          </button>
          <button
            className=" bg-gray-600 p-1 rounded-xl"
            onClick={() => dispatch(setRating(4))}
          >
            <Rating value={4} disabled />
          </button>
          <button
            className=" bg-gray-600 p-1 rounded-xl"
            onClick={() => dispatch(setRating(3))}
          >
            <Rating value={3} disabled />
          </button>
          <button
            className=" bg-gray-600 p-1 rounded-xl"
            onClick={() => dispatch(setRating(2))}
          >
            <Rating value={2} disabled />
          </button>
          <button
            className=" bg-gray-600 p-1 rounded-xl"
            onClick={() => dispatch(setRating(1))}
          >
            <Rating value={1} disabled />
          </button>
        </div>
        <button
          className="font-[PlayfairDisplay] text-lg text-white text-center "
          onClick={() =>
            dispatch(setRating(0), setSorting(""), setCategoryFilter(""))
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
