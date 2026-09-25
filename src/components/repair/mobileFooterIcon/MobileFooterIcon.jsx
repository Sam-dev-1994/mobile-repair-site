import React from 'react';
import logo from '../../../assets/logo.webp';

export default function MobileFooterIcon() {
	return (
		<div className=" w-full md:hidden mb-8">
			<div className="flex justify-center items-center">
				<a href="#" className="inline-block w-2/5 aspect-[3/1] ">
					<img src={logo} className="block w-full" alt="" />
				</a>
			</div>
			<div className="flex justify-center items-center text-center">
				<p className="max-w-10/12">
					اراِِئه دهنده خدمات تعمیرات تخصصی موبایل با استفاده از قطعات
					اورجینال و ضمانت واقعی.
				</p>
			</div>
		</div>
	);
}
