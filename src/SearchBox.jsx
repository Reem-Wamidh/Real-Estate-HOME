import Bg from "./assets/home .jpg";
import Search from "./assets/search.png";
import { useState } from "react";

const types = ["Buy", "Rent", "Sell"];

const SearchBox = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleClick = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-screen m-5 rounded-3xl flex items-center justify-center bg-cover"
      >
        <div className="p-10 max-w-4xl w-full mx-4">
          <div className="text-center">
            <h1 className="font-reem text-5xl md:text-7xl font-extrabold text-orange-500">
              Let’s find your Dream Home!
            </h1>
            <p className="mt-4 font-reem text-lg md:text-xl font-bold text-gray-100">
              We can help you rent, sell, or buy accommodation, take a mortgage, invest in real estate, and a lot more.
            </p>
            {/*
            <div className="mt-8 bg-white/40 border-white/20 p-8 rounded-lg shadow-lg flex flex-wrap items-center space-y-4 md:space-y-0 space-x-3 sm:space-x-4 md:space-x-4">

           <div className="  rounded-lg flex flex-wrap items-center  md:space-y-0 md:space-x-4">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => handleClick(type)}
                  className={`text-orange-600 focus:text-gray-950 focus:font-semibold p-4  focus:bg-white/40 focus:border-white/30 focus:shadow-lg focus:p-4 focus:rounded-lg  
                   text-xl sm:text-2xl 
                    md:text-3xl hover:text-gray-900 ${
                    query.type === type ? "active" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
              </div>
        
            <div className="flex-grow flex flex-col justify-between md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
              <input
                type="text"
                placeholder="Select Your City"
                className="placeholder-slate-900 focus:outline-none sm:border-r-2 border-gray-600 bg-transparent p-2 flex-grow"
              />
              <input
                type="text"
                placeholder="Choose Property Type"
                className="placeholder-slate-900 focus:outline-none sm:border-r-2 bg-transparent border-gray-600 p-2 flex-grow"
              />
              <input
                type="text"
                placeholder="Choose Price Range"
                className="placeholder-slate-900 focus:outline-none bg-transparent  p-2 flex-grow"
              />
              <button className="p-2 bg-orange-500 text-white rounded-lg  flex items-center justify-center  w-full  sm:w-full  md:w-full  hover:shadow-lg">
                <img src={Search} alt="search icon"  className="text-center" />
              </button>
            </div> 

          </div>
          */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
