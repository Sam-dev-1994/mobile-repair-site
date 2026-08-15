import React from 'react';
import { PiBatteryChargingVertical } from "react-icons/pi";
import { CiMobile4 } from "react-icons/ci";
import { BsCpu } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BsCamera } from "react-icons/bs";
 
export default function ServicesItem() {
   return (
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl shadow shadow-gray-200 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <PiBatteryChargingVertical className="aspect-square text-3xl sm:text-5xl text-brand-secondary" />
             </div>
            <div>
               <h6 className="font-bold text-lg my-2">تعویض باتری</h6>
               <p className="text-sm">تعویض باتری اصل با گارانتی و ضمانت سلامت</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow shadow-gray-200 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <CiMobile4 className="aspect-square text-3xl sm:text-5xl text-brand-secondary" />
             </div>
             <div>
                <h6 className="font-bold text-lg my-2">تعویض ال سی دی</h6>
                <p className="text-sm">تعویض انواع نمایشگر با کیفیت</p>
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow shadow-gray-300 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <BsCpu className="aspect-square text-3xl sm:text-5xl text-brand-secondary" />
             </div>
             <div>
                <h6 className="font-bold text-lg my-2">تعمیر برد</h6>
                <p className="text-sm">تعمیرات تخصصی برد و مشکلات سخت افزاری</p>
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow shadow-gray-200 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <MdOutlineWaterDrop className="aspect-square text-3xl sm:text-5xl text-brand-secondary" />
             </div>
             <div>
                <h6 className="font-bold text-lg my-2">تعمیر آب خوردگی</h6>
                <p className="text-sm">تخصصی ترین تعمیرات برای نجات گوشی شما</p>
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow shadow-gray-200 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <HiOutlineSpeakerWave className="aspect-square text-3xl sm:text-5xl text-brand-secondary" />
             </div>
             <div>
                <h6 className="font-bold text-lg my-2">تعویض گلس فنی</h6>
                <p className="text-sm">تعمیر و احیای ال سی دی معیوب و ترک خورده</p>
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow shadow-gray-200 text-center px-4 py-6">
             <div className="p-4 flex justify-center items-center">
                <BsCamera className="aspect-square text-3xl sm:text-5xl text-brand-secondary"/>
             </div>
             <div>
                <h6 className="font-bold text-lg my-2">تعمیر دوربین </h6>
                <p className="text-sm">رفع مشکلات دوربین جلو و عقب</p>
             </div>
          </div>
       </div>
   )
}
