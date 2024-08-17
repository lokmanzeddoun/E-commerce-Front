/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const AdminAllOrdersItem = ({ orderItem }) => {
	console.log(orderItem);
	return (
		<Col sm="12">
			<Link
				to={`/admin/orders/${orderItem._id}`}
				className="cart-item-body-admin my-2 px-1 d-flex px-2"
				style={{ textDecoration: "none" }}
			>
				<div className="w-100">
					<Row className="justify-content-between">
						<Col sm="12" className=" d-flex flex-row justify-content-between">
							<div className="d-inline pt-2 cat-text">
								Order The Number{orderItem.id}
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center mt-2">
						<Col sm="12" className=" d-flex flex-row justify-content-start">
							<div className="d-inline pt-2 cat-title">
								طلب من.. {orderItem.user.name || ""}
							</div>
							<div
								style={{ color: "black" }}
								className="d-inline pt-2 cat-rate me-2"
							>
								{" "}
								{orderItem.user.email || ""}
							</div>
						</Col>
					</Row>

					<Row className="d-flex justify-content-between">
						<Col xs="6" className="d-flex">
							<div>
								<div style={{ color: "black" }} className="d-inline">
									{" "}
									Delivery
								</div>
								<div className="d-inline mx-2 stat">
									{orderItem.isDelivered === true
										? "Delivery Done"
										: "Not Done"}
								</div>
							</div>
							<div>
								<div style={{ color: "black" }} className="d-inline">
									{" "}
									Payment
								</div>
								<div className="d-inline mx-2 stat">
									{orderItem.isPaid === true ? "Payment Done" : "No Payment "}
								</div>
							</div>

							<div>
								<div style={{ color: "black" }} className="d-inline">
									Payment Method
								</div>
								<div className="d-inline mx-2 stat">
									{orderItem.paymentMethodType === "cash"
										? "كاش"
										: "Credit Card"}
								</div>
							</div>
						</Col>
						<Col xs="6" className="d-flex justify-content-end">
							<div>
								<div className="barnd-text">
									{orderItem.totalOrderPrice || 0} $
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Link>
		</Col>
	);
};

export default AdminAllOrdersItem;
