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
			{/* <Row className="py-5 d-flex justify-content-center text-slate-100 ">
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
			<ToastContainer /> */}
			<Row className="py-5 d-flex justify-content-center text-slate-100 ">
				<Col sm="12" className="d-flex flex-column ">
					<label className="input input-bordered flex items-center gap-2 mx-auto title-login mb-4 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input
							placeholder="Email"
							value={email}
							onChange={onChangeEmail}
							type="email"
							className="grow my-3 text-center mx-auto text-slate-100"
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
							type="password"
							value={password}
							onChange={onChangePassword}
							placeholder="Password ..."
							className="grow text-center mx-auto text-slate-100"
						/>
					</label>
					<button className="btn btn-neutral mx-auto mt-4" onClick={onSubmit}>
						Login
					</button>
					<label className="mx-auto my-4 text-black">
						you don&apos; t have account ?{" "}
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
		</Container>
	);
};

export default LoginPage;
