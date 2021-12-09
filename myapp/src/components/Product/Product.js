import React from "react";
import "./Product.css";
import burger from './../../images/burger.jpg'

const Product = (props) => {

	const {name, description, price, sold, stock, photo} = props

	var img, binarystring;
	
	function arrayBufferToBase64( buffer ){
		var binary = '';
		var bytes = new Uint8Array(buffer);
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode( bytes[ i ] );
		}
		return window.btoa( binary );
	}


	if(photo){
		binarystring = arrayBufferToBase64(photo.data.data)
		img = `data:image/jpeg;base64, ${binarystring}`;
	}
	

	return (

		<div className="prod">
			<article className="recipe">
				<div className="pizza-box">
					{
						photo ? <img src={img} alt="" /> : <img src={burger} alt="" />
					}
					
				</div>
				<div className="recipe-content">
					<h1 className="recipe-title">
						<span>{name}</span>
					</h1>

					<p className="recipe-metadata">
						<span className="recipe-rating">
							★★★★
							<span style={{ display: "inline", padding: "0" }}>☆</span>
							<span className="recipe-votes">(12 votes)</span>
						</span>
					</p>

					<p className="recipe-desc">{description}</p>
					<div className="try">
						<button className="recipe-save addcart" type="button">₹{price}</button>
						<button className="recipe-save addcart" type="button">
							<span style={{color:"inherit"}}>Add to Cart </span><i className="fas fa-cart-plus"></i>
						</button>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Product;
