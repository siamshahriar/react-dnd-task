import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const AddImages = () => {
  return (
    <div className="text-center bg-gray-100 border-4 border-gra-800 rounded-lg h-full flex flex-col justify-center gap-6 cursor-pointer">
      <div className="flex justify-center text-3xl  ">
        <HiOutlinePhotograph></HiOutlinePhotograph>
      </div>
      <h2 className="font-semibold text-xl">Add Images</h2>
    </div>
  );
};

export default AddImages;
