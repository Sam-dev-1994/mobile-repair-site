import React from 'react';
import MobileFooterIcon from '../mobileFooterIcon/MobileFooterIcon.jsx';
import FooterContactInfo from '../footerContactInfo/FooterContactInfo.jsx';
import FooterServices from '../footerServices/FooterServices.jsx';
import QuickLinks from '../quickLinks/QuickLinks.jsx';
import StoreSocialMedia from '../storeSocialMedia/StoreSocialMedia.jsx';

export default function Footer() {
	return (
		<footer className="bg-dark-bg">
			<div className="container w-full px-3 py-6 sm:py-8 mx-auto  text-gray-300">
				<MobileFooterIcon />
				<div className=" w-full flex justify-center md:justify-between items-start gap-4 pb-6">
					<FooterContactInfo />
					<FooterServices />
					<QuickLinks />
					<StoreSocialMedia />
				</div>
				<div className="w-full text-center border-t border-brand-gray pt-6">
					<p className="max-w-2/3 mx-auto">
						تمامی حقوق برای فون داک محفوظ است. &copy; 2026
					</p>
				</div>
			</div>
		</footer>
	);
}
