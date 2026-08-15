import React from 'react'

export default function QuickLinks() {
   return (
       <div className="w-1/2 md:w-1/4">
          <h4 className="font-bold py-2 mb-3">دسترسی سریع</h4>
          <ul>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">خانه</a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">درباره ما </a>
             </li>
             <li>
                <a href="#" className="block py-1 transition duration-300 hover:text-orange-400">تماس با ما</a>
             </li>
          </ul>
       </div>
   )
}
