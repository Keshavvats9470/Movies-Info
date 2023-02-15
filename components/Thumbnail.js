import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
   const BASE_URL="http://image.tmdb.org/t/p/original/";

  return (
    <div 
    ref={ref} 
    className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 hover:z-50">
        <Image 
        layout="responsive"
        src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}` 
        }
        height={1200}
        width={2000}
        
        />  
        <div className="p-2">
          <h2 className="mt-1 text-2xl text-[#FDA512] transition-all duration-200 ease-in-out group-hover:font-bold">
              {result.title || result.original_name}
          </h2>
          <p className="max-w-md text-sm text-gray-300 opacity-90">{result.overview}</p>    
         <p className="flex items-center opacity-0 group-hover:opacity-100 text-[#FDA512]">
             {result.media_type && `${result.media_type} `}{" "}
             {result.release_date || result.first_air_date} {" "}
             <ThumbUpIcon className="h-4 mx-2"/> {result.vote_count}
         </p>
        </div> 
    </div>
  );
})

export default Thumbnail
