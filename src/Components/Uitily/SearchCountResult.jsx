import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
const SearchCountResult = ({ title, onClick }) => {
	const handler = () => {};
	const clickMe = (key) => {
		localStorage.setItem("sortType", key);
		onClick();
	};
	return (
		<div className="d-flex justify-content-between pt-3 px-2">
			<div className="sub-tile">{title}</div>
			<div className="search-count-text d-flex ">
				<UnopDropdown
					onAppear={handler}
					onDisappearStart={handler}
					trigger={
						<p className="mx-1">
							<img
								width="20px"
								height="20px"
								className="ms-1"
								src={sort}
								alt=""
							/>
							ترتيب حسب
						</p>
					}
					delay={0}
					align="CENTER"
					hover
				>
					<div className="card-filter">
						<div
							onClick={() => clickMe("")}
							className="border-bottom card-filter-item"
						>
							Without Order
						</div>
						<div
							onClick={() => clickMe("High Sales")}
							className="border-bottom card-filter-item"
						>
							High Sales
						</div>
						<div
							onClick={() => clickMe("High Rates")}
							className="border-bottom card-filter-item"
						>
							High Rates
						</div>
						<div
							onClick={() => clickMe("Price From Lower To Higher")}
							className="border-bottom card-filter-item"
						>
							Price From Lower To Higher
						</div>
						<div
							onClick={() => clickMe("Price From Higher To Lower")}
							className=" card-filter-item"
						>
							Price From Higher To Lower
						</div>
					</div>
				</UnopDropdown>
			</div>
		</div>
	);
};

export default SearchCountResult;
