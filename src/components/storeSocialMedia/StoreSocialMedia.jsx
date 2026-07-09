import React from 'react'
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {RiTelegram2Fill} from "react-icons/ri";

export default function StoreSocialMedia() {
   return (
       <div className="hidden md:block w-1/4">
          <h4 className="font-bold py-2 mb-3">شبکه های اجتماعی</h4>
          <p>اراِِئه دهنده خدمات تعمیرات تخصصی موبایل با استفاده از قطعات اورجینال و ضمانت واقعی.</p>
          <div className="flex gap-1 text-lg items-center mt-3 text-orange-400">
             <a href="#" className=" p-2 rounded-full   aspect-square transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(251,146,60,0.3)] ">
                <BsInstagram />
                <span className="sr-only"></span>
             </a>
             <a href="#" className=" p-2 rounded-full  aspect-square  transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(251,146,60,0.3)]"><RiTelegram2Fill  />
                <span className="sr-only"></span>
             </a>
             <a href="#" className="p-2 aspect-square rounded-full transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(251,146,60,0.3)] "><BsWhatsapp />
                <span className="sr-only"></span>
             </a>

          </div>
       </div>
   )
}
