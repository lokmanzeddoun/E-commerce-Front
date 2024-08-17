/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = ({ orderItem }) => {
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "numeric", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};
	return (
		<div className="user-order mt-2">
			<Row>
				<div className="py-2 order-title">
					Order Number#{orderItem.id || 0} ...Done On{" "}
					{formatDate(orderItem.createdAt)}
				</div>
			</Row>
			{orderItem.cartItems
				? orderItem.cartItems.map((item, index) => {
						return <UserAllOrderCard key={index} item={item} />;
				  })
				: null}

			<Row className="d-flex justify-content-between">
				<Col xs="6" className="d-flex">
					<div>
						<div className="d-inline"> Delivery</div>
						<div className="d-inline mx-2 stat">
							{orderItem.isDelivered === true ? "Delivery Done" : "Not Done"}
						</div>
					</div>
					<div>
						<div className="d-inline"> الدفع</div>
						<div className="d-inline mx-2 stat">
							{orderItem.isPaid === true ? "Payment Done" : "Not Done "}
						</div>
					</div>

					<div>
						<div className="d-inline">Payment Method</div>
						<div className="d-inline mx-2 stat">
							{orderItem.paymentMethodType === "cash" ? "Cache" : "Credit card"}
						</div>
					</div>
				</Col>
				<Col xs="6" className="d-flex justify-content-end">
					<div>
						<div className="barnd-text">{orderItem.totalOrderPrice || 0} $</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default UserAllOrderItem;
