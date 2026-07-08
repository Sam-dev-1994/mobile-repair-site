import React from 'react'
import Header from '../components/header/Header.jsx';
import Services from '../components/services/Services.jsx';
import Features from '../components/features/Features.jsx';
import WarrantySection from '../components/warrantySection/WarrantySection.jsx';
import SupportedBrands from '../components/supportedBrands/SupportedBrands.jsx';
import RepairGallery from '../components/repairGallery/RepairGallery.jsx';
import Footer from '../components/footer/Footer.jsx';
import ContactInfoMobile from '../components/contactInfoMobile/ContactInfoMobile.jsx';


export default function Home() {
   return (
       <>
       <Header />
       <Features />
       <Services />
       <WarrantySection />
       <SupportedBrands />
       <RepairGallery />
        <ContactInfoMobile  />
       <Footer />
       </>
   )
}
