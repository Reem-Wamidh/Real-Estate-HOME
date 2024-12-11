import { useState } from "react";
import Imagy from "../assets/loupe.png";

const Filter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    property: "",
    minPrice: "",
    maxPrice: "",
    bedroom: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {

    onSearch(filters);
  };

  return (
    <div className="mx-7 p-5 overflow-x-auto whitespace-nowrap md:flex-wrap flex items-center justify-between gap-4 text-slate-900">
      <input
        type="text"
        name="city"
        id="city"
        onChange={handleInputChange}
        value={filters.city}
        placeholder="Enter address, city"
        className="max-w-48 font-bold flex-1 pl-2 py-2 rounded-xl outline-none text-slate-900 text-sm"
      />

      <div className="flex flex-row text-sm">
        <label className="p-3 font-reem font-bold text-sm text-nowrap">
          Type Service:
        </label>
        <select
          name="type"
          id="type"
          onChange={handleInputChange}
          value={filters.type}
          className="pl-2 rounded-xl outline-none text-slate-900 font-reem font-bold text-sm"
        >
          <option value="">All</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div className="flex flex-row text-sm">
        <label className="p-3 font-reem font-bold">Property</label>
        <select
          name="property"
          onChange={handleInputChange}
          value={filters.property}
          className="pl-2 rounded-xl outline-none text-slate-900 font-reem font-bold"
        >
          <option value="">All</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>

      <div className="flex flex-row text-sm">
        <label className="p-3 font-reem font-bold text-nowrap">Min Price</label>
        <input
          type="number"
          name="minPrice"
          onChange={handleInputChange}
          value={filters.minPrice}
          placeholder="any"
          className="pl-2 py-2 w-20 rounded-xl outline-none text-slate-900 font-reem font-bold"
        />
      </div>

      <div className="flex flex-row text-sm">
        <label className="p-3 font-reem font-bold text-nowrap">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          onChange={handleInputChange}
          value={filters.maxPrice}
          placeholder="any"
          className="pl-2 py-2 w-20 rounded-xl outline-none text-slate-900 font-reem font-bold text-sm"
        />
      </div>

      <div className="flex flex-row text-xs">
        <label className="p-3 font-reem font-bold text-sm">Bedroom</label>
        <input
          type="number"
          name="bedroom"
          onChange={handleInputChange}
          value={filters.bedroom}
          placeholder="any"
          className="pl-2 py-2 w-20 rounded-xl outline-none text-slate-900 font-reem font-bold text-sm"
        />
      </div>

      <div>
        <button
          onClick={handleSearch}
          className="bg-white rounded-full h-8 w-8 md:h-10 md:w-10 p-2 z-10"
        >
          <img
            src={Imagy}
            alt="search"
            className="h-4 w-4 md:h-6 md:w-6 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;
