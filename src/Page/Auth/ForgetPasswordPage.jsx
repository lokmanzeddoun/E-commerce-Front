import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';
const ForgetPasswordPage = () => {
    const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook()
    return (
			<Container style={{ minHeight: "690px" }}>
				<Row className="py-5 d-flex justify-content-center ">
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
								onChange={OnChangeEmail}
								type="email"
								className="grow my-3 text-center mx-auto text-slate-100"
							/>
						</label>

						<button className="btn btn-neutral mx-auto mt-4" onClick={onSubmit}>
							Send Code
						</button>
					</Col>
				</Row>
				<ToastContainer />
			</Container>
		);
}

export default ForgetPasswordPage