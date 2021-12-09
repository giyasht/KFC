import React from "react";
import { NavLink } from "react-router-dom";
import "./HomepageMenu.css";

const HomepageMenu = () => {
	let menus = [
		{
			name: "Pizza",
			img: "https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg",
		},
		{
			name: "Burger",
			img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=4.79",
		},

		{
			name: "Snacks",
			img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/healthy_snacks_on_the_go_subway_slideshow/age_foto_rf_photo_of_homemade_pita_chips.jpg",
		},
		{
			name: "Meal",
			img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=4.79",
		},
		{
			name: "Chicken Bucket",
			img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=4.79",
		},
		{
			name: "Beverage",
			img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT92.jpg?ver=4.79",
		},
		{
			name: "Menu",
			img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT92.jpg?ver=4.79",
		},
	];

  return (
		<div className="caaards">
			<div className="headline">Food Categories :</div>

			<div className="container">
					{menus.map((menu, i) => (
						<div key={i} className="card-outer">
							<NavLink to="/menu" className="custom-card">
								<div className="mycard h-100">
									<div className="inner">
										<img
										src={menu.img}
										className="card-img-top"
										style={{ height: "170px" }}
										alt="{menu.name}"
										/>
									</div>
									<div className="card-body text-center">
										<h5 className="card-title">{menu.name}</h5>
									</div>
								</div>
							</NavLink>
						</div>
					))}
			</div>
		</div>
  );
};

export default HomepageMenu;
