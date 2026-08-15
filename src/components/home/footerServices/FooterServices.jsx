import React from 'react'

export default function FooterServices() {
   return (
       <div className=" w-1/2 md:w-1/4">
          <h4 className="font-bold py-2 mb-3">خدمات</h4>
          <ul className="text-sm">
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">تعویض ال سی دی</a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">تعویض باتری</a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">تعمیر آب خوردگی</a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">تعمیر بورد</a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">سایر خدمات</a>
             </li>

          </ul>
       </div>
   )
}
