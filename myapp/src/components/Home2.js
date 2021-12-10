// import React ,{useState,useEffect} from 'react'
// import { Link } from "react-router-dom";
// const axios = require("axios");

// const Home2 = () => {

//     const [Cards, setCards] = useState([]);
//     const [data, setData] = useState([]);

//     var category = 'sports'

//     useEffect(() => {
//         async function fetchData() {
//           try {
//             const res = await axios.get("https://newsapi.org/v2/top-headlines", {
//               params: {
//                 country: "in",
//                 category: category,
//                 apiKey: "b186e59534794e9a9b732580246cf18a",
//                 // apiKey: "9ad6a21779da47c28dde78964e668571",
//                 // apikey:94c83c96e50d4fec839229c7fbabfb30,
//                 sortBy: "popularity",
//               },
//             });
    
//             // console.log(res.data.articles);
//             setData(res.data.articles[0]);
//             console.log(data);
//             setCards(res.data.articles.slice(0, 7));
//           } catch (err) {
//             console.log(err);
//           }
//         }
//         fetchData();
//     }, [category]);

//     return (
//         <div>
//             {/* <header>
//                         <h1>Cool Articles</h1>
//                     </header> */}
//             <div className="container">
//                 <h1 className="title-heading">{category.toUpperCase()}</h1>
//             </div>
//             {/* <h1 className="date-right">{category}</h1> */}
//             <div className="band">
//                 {Cards.map((cardd) => {
//                 const { urlToImage, title, author, url } = cardd;
//                 return (
//                     <div className="item">
//                     <Link
//                         to="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
//                         className="card"
//                     >
//                         <div
//                         className="thumb"
//                         style={{ backgroundImage: "url(" + urlToImage + ")" }}
//                         ></div>
//                         <article>
//                         <h1>{title}</h1>
//                         <span>{author}</span>
//                         </article>
//                     </Link>
//                     </div>
//                 );
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Home2
import React,{ useState, useEffect } from 'react'

const Home2 = () => {

	const [data, setData] = useState([]);

  	const [load, setLoad] = useState(false);

	console.log(load);

	useEffect(() => {

		const getProduct = async () => {

			try {
				const response = await fetch(`http://127.0.0.1:8000/api/product/61b1a670b4fa235d8631c917` , {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				})
	
				var datanow;
	
				if(response){
					datanow = await response.json()
				}
	
				!datanow.error ? setData(datanow) : setData([])
	
				console.log(data);
			
			} catch (error) {
				return console.log(error);
			}
	
		}

		getProduct()
	},[load])


	return (
		<>
			<div>
				<button onClick={()=>{setLoad(true)}}>GET</button>
			</div>
			<div>
				<img src={data.photoUrl} alt="" />
			</div>
		</>
  	)
}

export default Home2;
