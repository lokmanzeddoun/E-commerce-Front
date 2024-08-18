import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrand } from "../../redux/actions/brandAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { addProductToCart } from "./../../redux/actions/cartAction";

const AddToCartHook = (prdID, item) => {
	const dispatch = useDispatch();

	const [indexColor, setIndexColor] = useState("");
	const [colorText, setColorText] = useState("");
	const [loading, setLoading] = useState(true);
	const colorClick = (index, color) => {
		setIndexColor(index);
		setColorText(color);
	};

	//add product to cart
	const addToCartHandel = async () => {
		if (item.color.length >= 1) {
			if (colorText === "") {
				notify("please choose a color first", "warn");
				return;
			}
		} else {
			setColorText("");
		}
		setLoading(true);
		await dispatch(
			addProductToCart({
				productId: prdID,
				color: colorText,
			})
		);
		setLoading(false);
	};

	const res = useSelector((state) => state.cartReducer.addToCart);

	useEffect(() => {
		if (loading === false) {
			if (res && res.status === 200) {
				notify("Product Added To Cart Successfully", "success");
				setTimeout(() => {
					window.location.reload(false);
				}, 1000);
			} else {
				notify("Login First", "warn");
			}
		}
	}, [loading]);

	return [colorClick, indexColor, addToCartHandel];
};

export default AddToCartHook;
