import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {
	const [category, loading, colors] = HomeCategoryHook();

	return (
		<Container>
			<SubTiltle title="categories" btntitle="more" pathText="/allcategory" />
			<Row className="my-2 d-flex justify-content-between text-slate-100">
				{loading === false ? (
					category ? (
						category.data.slice(0, 5).map((item, index) => {
							return (
								<CategoryCard
									key={index}
									id={item._id}
									title={item.name}
									img={item.image}
									background={colors[index]}
								/>
							);
						})
					) : (
						<h4>No Category found</h4>
					)
				) : (
					<Spinner animation="border" variant="primary" />
				)}
			</Row>
		</Container>
	);
};

export default HomeCategory;
