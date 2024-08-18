import { useState } from "react";
import { Carousel } from "react-bootstrap";

import sliderimg from "../../images/images/banner.png";
import slider4 from "../../images/images/banner4.png";
import prod3 from "../../images/images/jean.jpg";
import prod4 from "../../images/images/june.jpg";

const Silder = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	return (
		// <Carousel activeIndex={index} onSelect={handleSelect}>
		// 	<Carousel.Item interval={2000}>
		// 		<div className="d-flex flex-row justify-content-center align-items-center">
		// 			<img
		// 				style={{ height: "500px", width: "70%" }}
		// 				className=""
		// 				src={slider4}
		// 				alt="First slide"
		// 			/>
		// 		</div>
		// 	</Carousel.Item>
		// 	<Carousel.Item interval={2000}>
		// 		<div className="d-flex flex-row justify-content-center align-items-center">
		// 			<img
		// 				style={{ height: "500px", width: "70%" }}
		// 				className=""
		// 				src={sliderimg}
		// 				alt="First slide"
		// 			/>
		// 		</div>
		// 	</Carousel.Item>

		// 	<Carousel.Item  interval={2000}>
		// 		<div className="d-flex flex-row justify-content-center align-items-center">
		// 			<img
		// 				style={{ height: "500px", width: "70%" }}
		// 				className=""
		// 				src={prod3}
		// 				alt="First slide"
		// 			/>
		// 		</div>
		// 	</Carousel.Item>

		// 	<Carousel.Item  interval={2000}>
		// 		<div className="d-flex flex-row justify-content-center align-items-center">
		// 			<img
		// 				style={{ height: "500px", width: "70%" }}
		// 				className=""
		// 				src={prod4}
		// 				alt="First slide"
		// 			/>
		// 		</div>
		// 	</Carousel.Item>
		// </Carousel>
		<Carousel fade className="mt-2">
			<Carousel.Item className="d-flex flex-row justify-content-center align-items-center">
				<img
					style={{ height: "500px", width: "80%" }}
					className=""
					src={slider4}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item className="d-flex flex-row justify-content-center align-items-center">
				<img
					style={{ height: "500px", width: "80%" }}
					className=""
					src={sliderimg}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item className="d-flex flex-row justify-content-center align-items-center">
				<img
					style={{ height: "500px", width: "80%" }}
					className=""
					src={prod3}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item className="d-flex flex-row justify-content-center align-items-center">
				<img
					style={{ height: "500px", width: "80%" }}
					className=""
					src={prod4}
					alt="First slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Silder;
