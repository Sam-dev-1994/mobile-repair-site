import React from 'react';
import {FaPhone} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";

export default function FooterContactInfo() {
   return (
       <div className="hidden md:block max-w-1/4">
         <h4 className="font-bold py-2 mb-3">اطلاعات تماس</h4>
          <ul className="w-full">
             <li className="flex w-full gap-3 py-2">
                <FaPhone className="text-orange-400"/>
                <span dir="ltr">09121234567</span>
             </li>
             <li className="flex w-full gap-3 py-2">
                <SiGmail className="text-orange-400 text-2xl lg:text-lg"/>
                <span dir="ltr">example@gmail.com</span>
             </li>
             <li className="flex w-full  gap-3 py-2">
                <FaMapLocationDot className="text-orange-400 text-2xl lg:text-lg"/>
                <span className="text-wrap">تهران، خیابان جمهوری ، پاساژ علاءالدین</span>
             </li>
          </ul>
       </div>
   )
}
