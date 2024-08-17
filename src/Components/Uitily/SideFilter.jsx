import React from "react";
import { Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
	const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
		SidebarSearchHook();
	let localFrom = localStorage.getItem("priceFrom");
	let localTo = localStorage.getItem("priceTo");
	return (
		<div className="mt-3">
			<Row>
				<div className="d-flex flex-column mt-2">
					<div className="filter-title">Category</div>
					<div className="d-flex mt-3">
						<input onChange={clickCategory} type="checkbox" value="0" />
						<div className="filter-sub me-2 ">All</div>
					</div>
					{category ? (
						category.map((item, index) => {
							return (
								<div key={index} className="d-flex mt-3">
									<input
										onChange={clickCategory}
										type="checkbox"
										value={item._id}
									/>
									<div className="filter-sub me-2 ">{item.name}</div>
								</div>
							);
						})
					) : (
						<h6>No Categories</h6>
					)}
				</div>

				<div className="d-flex flex-column mt-2">
					<div className="filter-title mt-3">Brand</div>
					<div className="d-flex mt-3">
						<input onChange={clickBrand} type="checkbox" value="0" />
						<div className="filter-sub me-2 ">All</div>
					</div>

					{brand ? (
						brand.map((item, index) => {
							return (
								<div key={index} className="d-flex mt-3">
									<input
										onChange={clickBrand}
										type="checkbox"
										value={item._id}
									/>
									<div className="filter-sub me-2 ">{item.name}</div>
								</div>
							);
						})
					) : (
						<h6>No Brands</h6>
					)}
				</div>

				<div className="filter-title my-3">Price</div>
				<div className="d-flex">
					<p className="filter-sub my-2">From:</p>
					<input
						value={localFrom}
						onChange={priceFrom}
						className="m-2 text-center"
						type="number"
						style={{ width: "50px", height: "25px" }}
					/>
				</div>
				<div className="d-flex">
					<p className="filter-sub my-2">To:</p>
					<input
						onChange={priceTo}
						value={localTo}
						className="m-2 text-center"
						type="number"
						style={{ width: "50px", height: "25px" }}
					/>
				</div>
			</Row>
		</div>
	);
};

export default SideFilter;
