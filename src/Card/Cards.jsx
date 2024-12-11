import { Link } from "react-router-dom";
import { properties } from "../lib/DumData.js";
import Bed from "../assets/bed.png";
import Bath from "../assets/bath.png";


const Card = ({ item }) => {
  const { id, name, location, price, bedrooms, bathrooms, size, features, images, description } = item;

  return (
    <div className="card-container bg-white p-2 rounded-xl hover:border-2 hover:border-sky-200 ">
      {/* Link wraps the image */}
      <Link to={`/${id}`}className="image-link  ">
        <img src={images[0]} alt={name} className="h-72 w-72 object-cover rounded-lg hover:scale-110 " />
      </Link>

      {/* Text container */}
      <div className="card-details text-slate-900 font-bold">
        {/* Name links to the single property */}
      

        <h1 className="location pt-2 pl-2 hover:text-orange-500 text-xl">{location.city}, {location.neighborhood}</h1>
        <p className="price pt-2 pl-2  text-xl">${price.toLocaleString()}</p>

        {/* Features */}
        <div className="features text-lg flex  items-center justify-start ">
          <div className="feature-item flex text-center bg-slate-50 rounded-lg p-2 m-2  text-slate-900  ">
            <img src={Bath} alt="Bathrooms" className="icon" />
            <span  className="p-1">{bathrooms} Bath</span>
          </div>
          <div className="feature-item flex  text-center bg-slate-50 rounded-lg p-2 m-2  text-slate-900">
            <img src={Bed} alt="Bedrooms" className="icon" />
            <span className="p-1">{bedrooms} Bed</span>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Card;

