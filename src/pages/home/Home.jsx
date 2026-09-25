import ShopHeroSlider from '../../components/home/heroSlider/HeroSlider.jsx';
import ShopBrandCategories from '../../components/home/brandCategories/BrandCategories.jsx';
import ProductSection from '../../components/home/productSection/ProductSection.jsx';

export default function Home() {
	return (
		<>
			<ShopHeroSlider />
			<ProductSection title="جدیدترین گوشی ها" category="new" />
			<ProductSection title="گوشی های کارکرده" category="used" />
			<ShopBrandCategories />
			<ProductSection title="تبلت" category="tablet" />
			<ProductSection title="لوازم جانبی" category="accessories" />
		</>
	);
}
