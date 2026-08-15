import React from 'react';
import { PiMedalBold } from 'react-icons/pi';
import { GiAutoRepair } from 'react-icons/gi';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';

export default function Features() {
	return (
		<div className="container p-3 sm:hidden  w-full bg-dark-bg text-white border-t-2 border-brand-gray text-sm">
			<ul className="flex justify-center items-center flex-wrap ">
				<li className="w-1/2 p-3">
					<div className="flex justify-center items-center border-2 border-brand-gray rounded-lg p-3 sm:p-4">
						<PiMedalBold className="ml-1 sm:ml-3 text-brand-secondary text-2xl" />
						<span>قطعات اورجینال</span>
					</div>
				</li>
				<li className="w-1/2 p-3">
					<div className="flex justify-center items-center border-2 border-brand-gray rounded-lg p-3 sm:p-4">
						<GiAutoRepair className="ml-1 sm:ml-3 text-brand-secondary text-2xl" />
						<span>تعمیر در حضور شما</span>
					</div>
				</li>
				<li className="w-1/2 p-3">
					<div className="flex justify-center items-center  border-2 border-brand-gray rounded-lg p-3 sm:p-4 ">
						<MdOutlineVerifiedUser className="ml-1 sm:ml-3 text-brand-secondary text-2xl" />
						<span>ضمانت و گارانتی</span>
					</div>
				</li>
				<li className="w-1/2 p-3">
					<div className="flex justify-center items-center  border-2 border-brand-gray rounded-lg p-3 sm:p-4">
						<RxLapTimer className="ml-1 sm:ml-3 text-brand-secondary text-2xl" />
						<span> تحویل سریع </span>
					</div>
				</li>
			</ul>
		</div>
	);
}
