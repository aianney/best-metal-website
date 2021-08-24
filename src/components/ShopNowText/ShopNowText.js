import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./ShopNowText.css";

const ShopNowText = () => {
	return (
		<div>
			<div className="shop-text">
				<h2><TiShoppingCart/>SHOP NOW &#10095;&#10095;</h2>
			</div>
		</div>
	);
};

export default ShopNowText;
