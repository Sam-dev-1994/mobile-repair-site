import React from 'react'
import ServicesTitle from "../servicesTitle/ServicesTitle.jsx";
import ServicesItem from "../servicesItem/ServicesItem.jsx";
import {FaPhone} from "react-icons/fa6";

export default function Services() {
   return (
       <div className="container px-3  m-auto">
            <ServicesTitle />
          <ServicesItem/>
          <div className=" flex justify-center items-center py-4  w-full">
             <a href="tel:09121234567" className=" inline-block text-center py-3 border border-brand-primary bg-brand-primary text-white rounded-lg w-64 hover:bg-white hover:text-brand-primary transition duration-300 ">
                <span>مشاهده همه خدمات</span>
             </a>
          </div>
       </div>
   )
}
