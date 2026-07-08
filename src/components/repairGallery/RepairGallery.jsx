import React from 'react';
import {Swiper , SwiperSlide} from "swiper/react";
import {EffectCoverflow ,Navigation , Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function RepairGallery() {
   const galleryData = [
      {id:1 , title:'تعمیر ال سی دی', url:'/images/gallery_1.jpg'},
      {id:2 , title:'تعمیر ال سی دی', url:'/images/gallery_2.jpg'},
      {id:3 , title:'تعمیر ال سی دی', url:'/images/gallery_3.jpg'},
      {id:4 , title:'تعمیر ال سی دی', url:'/images/gallery_4.jpg'},
      {id:5 , title:'تعمیر ال سی دی', url:'/images/gallery_5.jpg'},
      {id:6 , title:'تعمیر ال سی دی', url:'/images/gallery_6.jpg'},
      {id:7 , title:'تعمیر ال سی دی', url:'/images/gallery_7.jpg'},
      {id:8 , title:'تعمیر ال سی دی', url:'/images/gallery_8.jpg'}
   ]
   return (
       <div className="container w-full mx-auto px-3 py-6">
         <div className="flex justify-center items-center text-center mb-4">
            <h5 className="text-2xl">گالری تعمیرات</h5>
         </div>
          <div className="repairGallery">
             <Swiper
                 modules={[EffectCoverflow ,Navigation, Pagination]}
                 effect={'coverflow'}
                 spaceBetween={0}
                 slidesPerView={1.3}
                 centeredSlides={true}
                 navigation={true}
                 pagination={{clickable:true}}
                 loop={true}
                 breakpoints={{
                    768:{effect:'slide',
                       slidesPerView:3 ,
                       centeredSlides:false,
                       spaceBetween:20,
                    },
                    1024:{effect:'slide',
                       slidesPerView:5,
                       spaceBetween:24 ,
                       centeredSlides:false},
                 }}
                 coverflowEffect={{
                    rotate: 0 ,
                    stretch:-10 ,
                    depth:120 ,
                    modifier:1 ,
                    slideShadows:false
                 }}
                 className="gallery-swiper">
                   {galleryData.map((element)=>(
                       <SwiperSlide  key={element.id} >
                          <div className="overflow-hidden rounded-xl group">
                             <div className="w-full overflow-hidden  aspect-video">
                                <img src={element.url} alt={element.title} className="block w-full h-full object-cover " loading="lazy"/>
                             </div>
                          </div>
                       </SwiperSlide>
                   ))
                   }
             </Swiper>
          </div>
       </div>
   )
}
