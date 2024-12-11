import { useState } from "react";
import Filter from "../filter/Filter.jsx";
import Card from "../Card/Cards.jsx";
import Map from "../map/Map.jsx";
import Properties from "../Lib/DumData.js";

const ListApp = () => {
 
  const [filters, setFilters] = useState({});

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  const filterPropertis = Properties.filter((item) => {
    console.log("Filtering item:", item); 
  
    const matchesCity = filters.city && item.location?.city
    ? item.location.city.toLowerCase().includes(filters.city.toLowerCase())
    : true;
  
  const matchesType = filters.type && item.type
    ? item.type === filters.type
    : true;
  
  const matchesProperty = filters.property && item.property
    ? item.property === filters.property
    : true;
  
  
    const matchesMinPrice = filters.minPrice
      ? item.price >= parseInt(filters.minPrice, 10)
      : true;
  
    const matchesMaxPrice = filters.maxPrice
      ? item.price <= parseInt(filters.maxPrice, 10)
      : true;
  
    const matchesBedroom = filters.bedroom
      ? item.bedrooms >= parseInt(filters.bedroom, 10)
      : true;
   
    const result =
      matchesCity &&
      matchesType &&
      matchesProperty &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedroom;
  
      console.log("Filters:", filters);
      console.log("Item:", item);
      console.log("Matches City:", matchesCity);
      console.log("Matches Type:", matchesType);
      console.log("Matches Property:", matchesProperty);
      console.log("Matches Min Price:", matchesMinPrice);
      console.log("Matches Max Price:", matchesMaxPrice);
      console.log("Matches Bedroom:", matchesBedroom);
      
      return result; 
    });

  return (
    <div className="bg-slate-200 text-white rounded-3xl m-5 h-screen overflow-hidden content-stretch">
    
      <Filter onSearch={handleSearch} />


      <div className="p-6 justify-items-center grid grid-cols-1 lg:grid-cols-2">
      
        <div className="order-2 lg:order-1 h-full overflow-hidden">
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 text-5xl content-stretch justify-items-center overflow-y-scroll"
            style={{ maxHeight: "calc(100vh - 150px)", padding: "1rem" }}
          >
          {filterPropertis.length === 0 ? (
  <p>No results found</p>
) : (
  filterPropertis.map((item) => <Card key={item.id} item={item} />)
)}
          </div>
        </div>

        {/* Map Section */}
        <div className="order-1 lg:order-2 h-40 sm:h-60 md:h-full w-full overflow-hidden md:pb-9 lg:pb-0 rounded-lg z-10">
          <Map items={filterPropertis} />
        </div>
      </div>
    </div>
  );
};

export default ListApp;
