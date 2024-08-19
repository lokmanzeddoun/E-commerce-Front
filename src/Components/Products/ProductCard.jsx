import {  Col } from "react-bootstrap";

import rate from "../../images/rate.png";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import ProductCardHook from "./../../hook/products/product-card-hook";

const ProductCard = ({ item, favProd }) => {
	const [removeToWishListData, addToWishListData, handelFav, favImg] =
		ProductCardHook(item, favProd);

	return (
		<Col xs="6" sm="6" md="4" lg="3" className="d-flex">
			<div className="card card-compact bg-base-100 w-96 shadow-xl">
				<Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
					<figure>
						<img
							src={item.imageCover}
							alt="Shoes"
							style={{ height: "228px", width: "100%" }}
						/>
					</figure>
				</Link>

				<div className="card-body">
					<div className="d-flex justify-content-end mx-2">
						<img
							src={favImg}
							alt=""
							onClick={handelFav}
							className="text-center"
							style={{
								height: "30px",
								width: "36px",
								cursor: "pointer",
							}}
						/>
					</div>
					<h2 className="card-title text-center text-slate-100">{item.title}</h2>
					<div className="d-flex justify-content-between ">
						<div className="d-flex">
							<img className="" src={rate} alt="" style={{ height: "16px" }} />
							<div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
						</div>
						<div className="d-flex">
							<div className="card-price text-slate-100 -mt-1">
								{item.priceAfterDiscount >= 1 ? (
									<div>
										<span style={{ textDecorationLine: "line-through " }}>
											{item.price}
										</span>{" "}
										{item.priceAfterDiscount}
									</div>
								) : (
									item.price
								)}
							</div>
							<div className="card-currency mx-1 text-slate-100 ">$</div>
						</div>
					</div>
					<div className="card-actions justify-center">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			<ToastContainer />
		</Col>
	);
};

export default ProductCard;
