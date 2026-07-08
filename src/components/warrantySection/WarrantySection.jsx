import React from 'react'
import WarrantySectionItems from '../warrantySectionItems/WarrantySectionItems.jsx';

export default function WarrantySection() {
   return (
      <section className="">
         <div className="container bg-brand-info px-3 mx-auto py-3 sm:py-4  text-center">
            <div>
               <h4 className="text-lg sm:text-2xl my-3">چرا به فون داک اعتماد کنید ؟ </h4>
            </div>
            <WarrantySectionItems />
         </div>
      </section>
   )
}
