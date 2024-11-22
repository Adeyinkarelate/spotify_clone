import React from "react";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex">
      <div className="bg-[#121212] rounded flex flex-col justify-around h-[15%] ">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} alt="" className="w-6" />
          <p className="font-bold text-white">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="" className="w-6" />
          <p className="font-bold text-white">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 items-center justify-between flex">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" className="w-8" />
            <p className="font-semibold text-white">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="" className="w-5" />
            <img src={assets.plus_icon} alt="" className="w-5" />
          </div>
        </div>
        {/*  */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold text-white flex flex-col items-start justify-start gap-1 pl-4">
            <h1 className="">Creat your first playlist</h1>
            <p className="font-light">It's easy we'll help you </p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create playlist</button>
        </div>
        {/*  */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold text-white flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1 className="">Let find some podcasts to follow</h1>
            <p className="font-light">We'll keep you update on new episode</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
