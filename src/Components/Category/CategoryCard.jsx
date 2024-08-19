/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, title, id }) => {
	return (
		<Col xs="6" sm="6" md="4" lg="2" className="my-4">
			<div className="avatar flex-col gap-2 justify-center items-center">
				<div className="w-36 rounded-full">
					<Link
						to={`/products/category/${id}`}
						style={{ textDecoration: "none" }}
					>
						<img alt="category_image" src={img} className="category-card-img" />
					</Link>
				</div>
				<p>{title}</p>
			</div>
		</Col>
	);
};

export default CategoryCard;
