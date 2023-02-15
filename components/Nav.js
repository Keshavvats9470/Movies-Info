import React from 'react'
import requests from '../utils/requests';
import { useRouter } from "next/router";

function Nav() {
   const router = useRouter();

  return (
    <nav className="relative">

<div>   
    
    <div class="flex mx-auto align-center justify-center p-4 mb-2">
        <input type="search" className="w-80 flex align-center justify-center p-4 pl-10 text-sm text-gray-900 border  dark:bg-gray-400 " placeholder="Search Movies, Tv.."/>
        <button type="submit" class="text-md text-[#000046]  right-2.5 bottom-2.5 bg-[#FDA512] font-normal focus:outline-none  px-4 py-2 hover:text-lg hover:font-semibold">SEARCH</button>
    </div>
</div>

      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url}]) => (
          <h2 
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
          className="last:pr-22 cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-700 hover:text-[#FDA512]">{title}
          </h2>
        ))}
        </div> 
        <div>
      </div>
    </nav>
  );
}

export default Nav;
