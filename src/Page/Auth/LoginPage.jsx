import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "./../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
	const [
		email,
		password,
		loading,
		onChangeEmail,
		onChangePassword,
		onSubmit,
		isPress,
	] = LoginHook();
	return (
		<Container style={{ minHeight: "690px" }}>
			<Row className="py-5 d-flex justify-content-center text-slate-100 ">
				<Col sm="12" className="d-flex flex-column ">
					<label className="mx-auto title-login">Log In </label>
					<input
						value={email}
						onChange={onChangeEmail}
						placeholder="Email..."
						type="email"
						className="user-input my-3 text-center mx-auto"
					/>
					<input
						value={password}
						onChange={onChangePassword}
						placeholder="Password ..."
						type="password"
						className="user-input text-center mx-auto"
					/>
					<button onClick={onSubmit} className="btn-login mx-auto mt-4">
						Log In
					</button>
					<label className="mx-auto my-4">
						you Don&apos t Have Account ?{" "}
						<Link to="/register" style={{ textDecoration: "none" }}>
							<span style={{ cursor: "pointer" }} className="text-danger">
								Click here
							</span>
						</Link>
					</label>

					<label className="mx-auto my-4">
						<Link
							to="/user/forget-password"
							style={{ textDecoration: "none", color: "red" }}
						>
							Forget Password
						</Link>
					</label>

					{isPress === true ? (
						loading === true ? (
							<Spinner animation="border" role="status"></Spinner>
						) : null
					) : null}
				</Col>
			</Row>
			<ToastContainer />
		</Container>
	);
};

export default LoginPage;
