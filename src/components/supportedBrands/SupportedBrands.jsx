import React from 'react'

export default function SupportedBrands() {
   const logoData = [
      {
         id:1 ,
         type:'logo' ,
         title: 'samsung',
         url: `${import.meta.env.BASE_URL}/images/samsung.webp`,
      },
      {
         id:2 ,
         type:'logo' ,
         title: 'apple',
         url: `${import.meta.env.BASE_URL}/images/apple.webp`,
      },
      {
         id:3 ,
         type:'logo' ,
         title: 'huawei',
         url: `${import.meta.env.BASE_URL}/images/huawei.webp`,
      },
      {
         id:4 ,
         type:'logo' ,
         title: 'lg',
         url: `${import.meta.env.BASE_URL}/images/lg.webp`,
      },
      {
         id:5 ,
         type:'logo' ,
         title: 'nokia',
         url: `${import.meta.env.BASE_URL}/images/nokia.webp`,
      },
      {
         id:6 ,
         type:'logo' ,
         title: 'xiaomi',
         url: `${import.meta.env.BASE_URL}/images/xiaomi.webp`,
      },
      {
         id:7 ,
         type:'logo' ,
         title: 'honor',
         url: `${import.meta.env.BASE_URL}/images/honor.webp`,
      },
      {
         id:8 ,
         type:'text' ,
         text:'و دیگر برند ها'
      }
   ]
   return (
       <div className="container mx-auto py-4 px-3 w-full text-white bg-dark-bg">
          <div>
             <h4 className="text-lg sm:text-2xl mx-auto mb-6  text-center">برند هایی که تعمیر میکنیم</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-4">
             {logoData.map(item=>(
                 <div key={item.id} className="bg-white aspect-[5/2] rounded-3xl flex justify-center items-center">
                    {item.type==='logo' ? <img src={item.url} alt={item.title} className="w-full h-full object-contain"/> :
                    <p className="text-black font-bold text-lg">{item.text}</p>}
                 </div>
             ))

             }

          </div>
       </div>
   )
}
