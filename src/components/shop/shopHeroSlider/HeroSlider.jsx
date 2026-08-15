export default function HeroSlider() {
	return (
		<section className="bg-brand-orange h-64 sm:h-72 lg:h-82 overflow-hidden text-white">
			<div className="container w-full h-full  mx-autosm:px-3">
				<div className="flex justify-evenly items-center  h-full">
					<div className="sm:w-1/2 h-full flex justify-center items-center flex-col text-right pr-3 sm:pr-5 ">
						<h1 className="text-lg sm:text-[1.6rem] md:text-[2rem] font-bold w-full mb-2 sm:mb-6 ">
							آیفون انتخابی متمایز{' '}
						</h1>
						<strong className="mb-1 w-full text-[0.8rem]  md:text-[1.5rem]">
							تجریه خریدی حرفه ای با فون داک
						</strong>
						<p className="hidden sm:block w-full md:text-[1.3rem]">
							جدیدتریدن مدل های آیفون با تضمین کیفیت و اصالت کالا
						</p>
					</div>
					<div className="w-2/5 sm:w-1/2 lg:w-2/5 h-full flex justify-center items-center ">
						<img
							className="object-contain sm:object-cover w-full md:w-auto h-full "
							src="/images/images.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
