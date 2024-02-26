import React from "react";
import { PencilIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-3 px-5 w-[270px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[#3c3c3c]">Online store session</p>
        </div>
        <div className="hover:text-gray-600 text-white">
          <PencilIcon className="h-4 w-4" />
        </div>
      </div>
      <hr className="border-t-[1px dashed red]" />
      <div className="flex flex-col-2 mt-5 justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#3c3c3c]">255,581</h3>
        </div>
        <div className="flex">
          <p className="text-gray-700">^ 9%</p>
        </div>
      </div>
    </div>
  );
};
