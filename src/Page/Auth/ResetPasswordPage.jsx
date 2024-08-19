import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../hook/auth/reset-password-hook";
const RsetPasswordPage = () => {
	const [
		password,
		confirmPassword,
		,
		OnChangePassword,
		OnChangeConfirmPassword,
		onSubmit,
	] = ResetPasswordHook();

	return (
		<Container style={{ minHeight: "690px" }}>
			<Row className="py-5 d-flex justify-content-center ">
				<Col sm="12" className="d-flex flex-column ">
					<label className="mx-auto title-login">New Password</label>
					<label className="input input-bordered flex items-center gap-2 mx-auto title-login mb-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
						<input
							type="password"
							value={password}
							onChange={OnChangePassword}
							placeholder="Password ..."
							className="grow text-center mx-auto text-slate-100"
						/>
					</label>
					<label className="input input-bordered flex items-center gap-2 mx-auto title-login">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
						<input
							value={confirmPassword}
							onChange={OnChangeConfirmPassword}
							placeholder=" Confirm Password ..."
							type="password"
							className="grow text-center mx-auto text-slate-100"
						/>
					</label>

					<button className="btn btn-neutral mx-auto mt-4" onClick={onSubmit}>
						Save
					</button>
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};

export default RsetPasswordPage;
