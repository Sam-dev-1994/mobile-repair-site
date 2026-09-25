import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './rapairGallery.css';

export default function RepairGallery() {
	const [selectedImage, setSelectedImage] = useState(null);

	const galleryData = [
		{
			id: 1,
			title: 'تعمیر ال سی دی ۱',
			url: '${import.meta.env.BASE_URL}images/gallery_1.webp',
		},
		{
			id: 2,
			title: 'تعمیر ال سی دی ۲',
			url: '${import.meta.env.BASE_URL}images/gallery_2.webp',
		},
		{
			id: 3,
			title: 'تعمیر ال سی دی ۳',
			url: '${import.meta.env.BASE_URL}images/gallery_3.webp',
		},
		{
			id: 4,
			title: 'تعمیر ال سی دی ۴',
			url: '${import.meta.env.BASE_URL}images/gallery_4.webp',
		},
		{
			id: 5,
			title: 'تعمیر ال سی دی ۵',
			url: '${import.meta.env.BASE_URL}images/gallery_5.webp',
		},
		{
			id: 6,
			title: 'تعمیر ال سی دی ۶',
			url: '${import.meta.env.BASE_URL}images/gallery_6.webp',
		},
		{
			id: 7,
			title: 'تعمیر ال سی دی ۷',
			url: '${import.meta.env.BASE_URL}images/gallery_7.webp',
		},
		{
			id: 8,
			title: 'تعمیر ال سی دی ۸',
			url: '${import.meta.env.BASE_URL}images/gallery_8.webp',
		},
	];

	return (
		<div className="container w-full mx-auto px-3 py-6">
			<div className="flex justify-center items-center text-center mb-6">
				<h5 className="text-2xl font-bold text-neutral-800">
					گالری تعمیرات
				</h5>
			</div>

			<div className="repairGallery">
				<Swiper
					modules={[EffectCoverflow, Navigation, Pagination]}
					effect={'coverflow'}
					spaceBetween={0}
					slidesPerView={1.3}
					centeredSlides={true}
					navigation={true}
					pagination={{ clickable: true }}
					loop={true}
					breakpoints={{
						768: {
							effect: 'slide',
							slidesPerView: 3,
							centeredSlides: false,
							spaceBetween: 20,
						},
						1024: {
							effect: 'slide',
							slidesPerView: 5,
							spaceBetween: 24,
							centeredSlides: false,
						},
					}}
					coverflowEffect={{
						rotate: 0,
						stretch: -10,
						depth: 120,
						modifier: 1,
						slideShadows: false,
					}}
					className="gallery-swiper pb-10"
				>
					{galleryData.map((element) => (
						<SwiperSlide key={element.id}>
							<div
								onClick={() => setSelectedImage(element)}
								className="overflow-hidden rounded-2xl group cursor-pointer border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-md"
							>
								<div className="w-full overflow-hidden aspect-video bg-neutral-100">
									<img
										loading="lazy"
										src={element.url}
										alt={element.title}
										className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
					onClick={() => setSelectedImage(null)}
				>
					<div
						className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center mb-3 pb-2 border-b border-neutral-100">
							<h6 className="font-bold text-neutral-800">
								{selectedImage.title}
							</h6>
							<button
								onClick={() => setSelectedImage(null)}
								className="text-neutral-500 hover:text-red-500 text-xl font-bold px-2 py-1 cursor-pointer transition-colors"
							>
								✕
							</button>
						</div>
						<div className="w-full max-h-[70vh] overflow-hidden rounded-lg">
							<img
								src={selectedImage.url}
								alt={selectedImage.title}
								className="w-full h-full object-contain mx-auto max-h-[65vh]"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
