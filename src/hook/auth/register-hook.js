import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const RegisterHook = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(true);

	const onChangeName = (e) => {
		setName(e.target.value);
	};
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const onChangePhone = (e) => {
		setPhone(e.target.value);
	};
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const onChangeConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	const validationValues = () => {
		if (name === "") {
			notify("please enter username", "error");
			return;
		}
		if (phone.length <= 10) {
			notify("please enter valid phone number", "error");
			return;
		}
		if (password != confirmPassword) {
			notify("check the confirm password", "error");
			return;
		}
	};

	const res = useSelector((state) => state.authReducer.createUser);

	//save data
	const OnSubmit = async () => {
		validationValues();
		setLoading(true);
		await dispatch(
			createNewUser({
				name,
				email,
				password,
				passwordConfirm: confirmPassword,
				phone,
			})
		);
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res) {
				console.log(res);
				if (res.data.token) {
					localStorage.setItem("token", res.data.token);
					notify("registration completed", "success");
					setTimeout(() => {
						navigate("/login");
					}, 2000);
				}

				if (res.data.errors) {
					if (res.data.errors[0].msg === "E-mail already in use")
						notify("email already exist", "error");
				}

				if (res.data.errors) {
					if (res.data.errors[0].msg === "must be at least 6 chars")
						notify("password must be at least 6 character", "error");
				}
			}
		}
	}, [loading]);

	return [
		name,
		email,
		phone,
		password,
		confirmPassword,
		loading,
		onChangeName,
		onChangeEmail,
		onChangePhone,
		onChangePassword,
		onChangeConfirmPassword,
		OnSubmit,
	];
};

export default RegisterHook;
