import ShopHeader from '../../components/shop/header/header.jsx';
import ShopHeroSlider from '../../components/shop/shopHeroSlider/HeroSlider.jsx';
import ShopBrandCategories from '../../components/shop/shopBrandCategories/BrandCategories.jsx';

export default function Shop() {
	return (
		<div className="py-4">
			<ShopHeader />
			<ShopHeroSlider />
			<ShopBrandCategories />
		</div>
	);
}
