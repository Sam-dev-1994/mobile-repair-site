import React from 'react'
import {FaPhone} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactInfoMobile() {
   return (
       <div className="container mx-auto md:hidden">
          <div className="text-center w-full bg-white rounded-xl py-8 px-3">
             <div className="flex flex-col items-end gap-4 text-gray-600 ">
                <a href="tel:09121234567" className="flex justify-end items-center gap-4 font-bold text-lg hover:bg-gray-100 w-full p-2 transition duration-300 rounded-lg">
                   <span dir="ltr">0912 123 4567</span>
                   <FaPhone className="text-brand-secondary mx-4 text-xl"/>
                </a>
                <a href="tel:09121234567"  className="flex justify-end items-center gap-4 font-bold text-lg hover:bg-gray-100 w-full p-2 transition duration-300 rounded-lg">
                   <span dir="ltr">example@gmail.com</span>
                   <SiGmail className="text-brand-secondary mx-4 text-xl"/>
                </a>
                <a href="tel:09121234567"  className="flex justify-end items-center gap-4 font-bold text-lg hover:bg-gray-100 w-full p-2 transition duration-300 rounded-lg">
                   <span>تهران، خیابان جمهوری ، پاساژ علاءالدین</span>
                   <FaMapLocationDot className="text-brand-secondary mx-4 text-xl"/>
                </a>
             </div>
             <div className="flex gap-8 text-2xl items-center justify-evenly mt-3 text-brand-secondary">
                <a href="#" className=" p-3 rounded-full bg-gray-100  aspect-square transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(100,116,139,0.3)] ">
                   <BsInstagram />
                   <span className="sr-only"></span>
                </a>
                <a href="#" className=" p-3 rounded-full bg-gray-100  aspect-square  transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(100,116,139,0.3)]"><RiTelegram2Fill  />
                   <span className="sr-only"></span>
                </a>
                <a href="#" className="p-3 aspect-square rounded-full bg-gray-100 transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_10px_rgba(100,116,139,0.3)] "><BsWhatsapp />
                   <span className="sr-only"></span>
                </a>

             </div>
          </div>
       </div>
   )
}
