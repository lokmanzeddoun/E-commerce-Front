import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BrandCard = ({ img, id }) => {
	return (
		<Col
			xs="6"
			sm="6"
			md="4"
			lg="2"
			className="my-2 d-flex justify-content-center"
		>
			<div className="card bg-base-100 w-96 shadow-xl">
				<Link to={`/products/brand/${id}`} style={{ textDecoration: "none" }}>
					<figure className="px-10 pt-10">
						<img
							src={img}
							alt="Shoes"
							style={{ width: "100%", height: "151px" }}
							className="rounded-xl"
						/>
					</figure>
				</Link>
			</div>
		</Col>
	);
};

export default BrandCard;
