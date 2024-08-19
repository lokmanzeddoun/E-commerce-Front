import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Silder from "./../../Components/Home/Silder";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";
const HomePage = () => {
	const [items] = ViewHomeProductsHook();
	return (
		<div className="font" style={{ minHeight: "670px" }}>
			<Silder />
			<HomeCategory />
			<CardProductsContainer
				products={items}
				title="Most Sales"
				btntitle="More"
				pathText="/products"
			/>
			<CardProductsContainer
				products={items}
				title="Newest Products"
				btntitle="More"
				pathText="/products"
			/>
			<BrandFeatured title="Most Popular Brands" btntitle="More" />
		</div>
	);
};

export default HomePage;
