import Header from '../../components/repair/header/Header.jsx';
import Services from '../../components/repair/services/Services.jsx';
import Features from '../../components/repair/features/Features.jsx';
import WarrantySection from '../../components/repair/warrantySection/WarrantySection.jsx';
import SupportedBrands from '../../components/repair/supportedBrands/SupportedBrands.jsx';
import RepairGallery from '../../components/repair/repairGallery/RepairGallery.jsx';
import ContactInfoMobile from '../../components/repair/contactInfoMobile/ContactInfoMobile.jsx';

export default function Repair() {
	return (
		<>
			<Header />
			<Features />
			<Services />
			<WarrantySection />
			<SupportedBrands />
			<RepairGallery />
			<ContactInfoMobile />
		</>
	);
}
