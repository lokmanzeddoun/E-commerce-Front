import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "../../hook/auth/verify-password-hook";
const VerifyPasswordPage = () => {
	const [code, OnChangeCode, onSubmit] = VerifyPasswordHook();

	return (
		<Container style={{ minHeight: "690px" }}>
			<Row className="py-5 d-flex justify-content-center ">
				<Col sm="12" className="d-flex flex-column ">
					<label className="mx-auto title-login">
						Enter The Code Send Into Your Email
					</label>
					<label className="input input-bordered flex items-center gap-2 mx-auto title-login mb-4 ">
						<input
							placeholder="Email"
							value={code}
							onChange={OnChangeCode}
							type="text"
							className="grow my-3 text-center mx-auto text-slate-100"
						/>
					</label>

					<button className="btn btn-neutral mx-auto mt-4" onClick={onSubmit}>
						Confirm
					</button>
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};
export default VerifyPasswordPage;
