/* eslint-disable react/prop-types */
import { Button, Col, Modal, Row } from "react-bootstrap";
import CouponCardHook from "../../hook/coupon/coupon-card-hook";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import { Link } from "react-router-dom";
const AdminCoupnCard = ({ coupon }) => {
	const [formatDate, dateString, show, handleClose, handleShow, handelDelete] =
		CouponCardHook(coupon);

	return (
		<div className="user-address-card my-3 px-2">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>
						{" "}
						<div className="font">Confirm Delete</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="font">Are You Sure You Want To Delete The Coupon</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="font" variant="success" onClick={handleClose}>
						Cancel
					</Button>
					<Button className="font" variant="dark" onClick={handelDelete}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>

			<Row className="d-flex justify-content-between  ">
				<Col xs="6">
					<div className="p-2">Coupon Name : {coupon.name}</div>
				</Col>
				<Col xs="6" className="d-flex d-flex justify-content-end">
					<div className="d-flex p-2">
						<Link
							to={`/admin/editcoupon/${coupon._id}`}
							style={{ textDecoration: "none" }}
						>
							<div className="d-flex mx-2">
								<img
									alt=""
									className="ms-1 mt-2"
									src={editicon}
									height="17px"
									width="15px"
								/>
								<p className="item-delete-edit"> Update</p>
							</div>
						</Link>
						<div onClick={handleShow} className="d-flex ">
							<img
								alt=""
								className="ms-1 mt-2"
								src={deleteicon}
								height="17px"
								width="15px"
							/>
							<p className="item-delete-edit"> Remove</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs="12">
					<div
						style={{
							color: "#555550",
							fontFamily: "Almarai",
							fontSize: "16px",
						}}
					>
						Expiry Date: {formatDate(dateString)}
					</div>
				</Col>
			</Row>

			<Row className="mt-3">
				<Col xs="12" className="d-flex">
					<div
						style={{
							color: "#555550",
							fontFamily: "Almarai",
							fontSize: "16px",
						}}
					>
						: Sold Percentage
					</div>

					<div
						style={{
							color: "#979797",
							fontFamily: "Almarai",
							fontSize: "16px",
						}}
						className="mx-2"
					>
						{coupon.discount} %
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AdminCoupnCard;
