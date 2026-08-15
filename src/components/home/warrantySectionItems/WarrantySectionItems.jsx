import React from 'react';
import { GoShieldCheck } from "react-icons/go";
import { VscCircuitBoard } from "react-icons/vsc";
import { FiBatteryCharging } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

export default function WarrantySectionItems() {
   const warrantyData = [
      {
         id:1 ,
         title:'ضمانت یکماهه تعمیر بورد',
         description: "تمامی خدمات تخصصی مربوط به تعمیرات بورد سخت افزاری تا یکماه شامل گارانتی و پشتیبانی کامل ما می باشد.",
         icon: <VscCircuitBoard />
      },
      {
         id:2 ,
         title:'یکماه گارانتی تعویض باتری ',
         description: "تعویض باتری با تضمین کارایی انجام شده و سلامت قطعه جدید به مدت یکماه واجد شرایط گارانتی و پاسخگویی رسمی است.",
         icon: <FiBatteryCharging />
      },
      {
         id:3 ,
         title:'تضمین اصالت و کیفیت قطعات',
         description: "این مجموعه اصالت کالا و انطباق قطعات به کار رفته با استاندارد های اصلی سازنده را بطور کامل تضمین مینماید.",
         icon: <GoShieldCheck />
      },
      {
         id:4 ,
         title:'ضمانت واقعی قطعات تعویضی',
         description: 'بررسی اولیه و عیب یابی کاملا شفاف انجام میشود; قطعات حساس در حضور شما تست و بدون عیب تحویل داده میشوند.',
         icon: <FaRegEye />
      }
   ]
   return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right sm:text-center">
          {
             warrantyData.map((item) =>(
                <div key={item.id} className="flex flex-row-reverse sm:flex-col p-3">

                  <div className="w-2/5 sm:w-full flex justify-center items-center text-5xl text-brand-secondary shrink-0 ">{item.icon}</div>

                  <div className="flex-1 max-w-[50%] sm:max-w-full ">
                     <h6 className="font-bold my-3">{item.title}</h6>
                     <p className="leading-7">{item.description}</p>
                  </div>
                </div>
          ))}
       </div>
   )
}
