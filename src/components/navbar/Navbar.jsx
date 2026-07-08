import React, {useRef} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.webp";
import { RiCloseLargeLine } from "react-icons/ri";
import './navbar.css'
import { MdPhoneInTalk } from "react-icons/md";

export default function Navbar() {
   const menuRef = useRef(null);
   function handleMenu(){
      menuRef.current.style.display ="block";
   }
   function handleClose(){
      menuRef.current.style.display = "none"
   }

   return (
       <nav>
          <div className="container px-3 mx-auto bg-dark-bg text-white">
             <div className="flex gep-2 justify-between items-center">
                 <div className="w-6 h-6 sm:hidden">
                     <GiHamburgerMenu className=" cursor-pointer "  onClick={handleMenu} />
                  </div>
                <div id="mobile-menu" className="hidden absolute top-0 right-0 w-full" ref={menuRef} >
                  <ul className="flex flex-col border pt-2 bg-dark-bg border-none">
                     <span className="p-3 absolute left-0 top-0 z-50 cursor-pointer" onClick={handleClose}><RiCloseLargeLine /></span>
                     <li className="hover:text-brand-primary transition duration-300"><a href="#" className="inline-block py-4 px-2">خانه</a></li>
                     <li className="hover:text-brand-primary transition duration-300"><a href="#" className="inline-block py-4 px-2">خدمات</a></li>
                     <li className="hover:text-brand-primary transition duration-300"><a href="#" className="inline-block py-4 px-2">درباره ما</a></li>
                     <li className="hover:text-brand-primary transition duration-300"><a href="#" className="inline-block py-4 px-2">تماس با ما</a></li>
                  </ul>
                </div>
                <div className=" text-direction hidden sm:block">
                      <a href="tel:09121234567" className="inline-flex items-center border border-brand-primary rounded-lg p-2 transition contact-btn">
                         <MdPhoneInTalk className="text-lg contact-btn-icon mr-2" />
                         <span className=" text-sm "> 09121234567</span>
                      </a>
                </div>
                <div className="hidden sm:block">
                  <ul className="flex gap-5 justify-between items-center">
                     <li><a href="#" className="transition-opacity duration-300 hover:text-brand-primary  navbar-link">خانه</a></li>
                     <li><a href="#" className="transition-opacity duration-300 hover:text-brand-primary navbar-link">خدمات</a></li>
                     <li><a href="#" className="transition-opacity duration-300 hover:text-brand-primary navbar-link">درباره ما</a></li>
                     <li><a href="#" className="transition-opacity duration-300 hover:text-brand-primary navbar-link">تماس با ما</a></li>
                  </ul>
                </div>
                <div className="w-25 sm:w-30">
                   <a href="#" className="block w-full">
                      <img src={logo} alt="تعمیرات تخصصی موبایل"/>
                   </a>
                </div>
             </div>
          </div>
       </nav>

   )
}
