import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductToWishList,
	removeProductToWishList,
} from "./../../redux/actions/wishListAction";
import notify from "./../../hook/useNotifaction";
import prod1 from "../../images/prod1.png";
import favoff from "../../images/images/cestore/ic_like.svg";
import favon from "../../images/images/cestore/ic_liked.svg";
const ProductCardHook = (item, favProd) => {
	const dispatch = useDispatch();
	const [favImg, setFavImg] = useState(favoff);
	let Fav = favProd.some((fitem) => fitem === item._id);
	const [loadingAdd, setLoadingAdd] = useState(true);
	const [loadingRemove, setLoadingRemove] = useState(true);
	const [isFav, setIsFav] = useState(Fav);

	useEffect(() => {
		setIsFav(favProd.some((fitem) => fitem === item._id));
	}, [favProd]);

	const handelFav = () => {
		if (isFav) {
			removeToWishListData();
		} else {
			addToWishListData();
		}
	};

	useEffect(() => {
		if (isFav === true) {
			setFavImg(favon);
		} else {
			setFavImg(favoff);
		}
	}, [isFav]);

	const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
	const resRemove = useSelector(
		(state) => state.addToWishListReducer.removeWishList
	);

	const addToWishListData = async () => {
		setIsFav(true);
		setFavImg(favon);
		setLoadingAdd(true);
		await dispatch(
			addProductToWishList({
				productId: item._id,
			})
		);
		setLoadingAdd(false);
	};

	const removeToWishListData = async () => {
		setIsFav(false);
		setFavImg(favoff);
		setLoadingRemove(true);
		await dispatch(removeProductToWishList(item._id));
		setLoadingRemove(false);
	};

	useEffect(() => {
		if (loadingAdd === false) {
			console.log(resAdd);
			if (resAdd && resAdd.status === 200) {
				notify("Product Added To Favorite List Successfully", "success");
			} else if (resAdd && resAdd.status === 400) {
				notify("You are not Login Please Login", "error");
			}
		}
	}, [loadingAdd]);

	useEffect(() => {
		if (loadingRemove === false) {
			console.log(resRemove);
			if (resRemove && resRemove.status === "success") {
				notify("Product Remove From Favorite List", "warn");
			} else if (resAdd && resAdd.status === 400) {
				notify("You are Not Login Please Login", "error");
			}
		}
	}, [loadingRemove]);

	return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default ProductCardHook;
