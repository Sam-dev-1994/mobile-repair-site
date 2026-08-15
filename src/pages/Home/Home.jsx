import React from 'react';
import Header from '../../components/home/header/Header.jsx';
import Services from '../../components/home/services/Services.jsx';
import Features from '../../components/home/features/Features.jsx';
import WarrantySection from '../../components/home/warrantySection/WarrantySection.jsx';
import SupportedBrands from '../../components/home/supportedBrands/SupportedBrands.jsx';
import RepairGallery from '../../components/home/repairGallery/RepairGallery.jsx';
import Footer from '../../components/home/footer/Footer.jsx';
import ContactInfoMobile from '../../components/home/contactInfoMobile/ContactInfoMobile.jsx';

export default function Home() {
	return (
		<>
			<Header />
			<Features />
			<Services />
			<WarrantySection />
			<SupportedBrands />
			<RepairGallery />
			<ContactInfoMobile />
			<Footer />
		</>
	);
}
