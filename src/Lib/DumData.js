import home1 from "../assets/home1.jpg";
import home2 from "../assets/home .jpg";
import home3 from "../assets/home6.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home 5.jpg";
import home6 from "../assets/home2.jpg";
import home7 from "../assets/home7.jpg";
import home8 from "../assets/home8.jpg";
import home9 from "../assets/home9.jpg";
import Fer1 from "../assets/fernetur1.jpg";
import Fer3 from "../assets/fer2.jpg";
import Fer4 from "../assets/fer3.jpg";
import Fer5 from "../assets/fer4.jpg";


export const properties = [
  {
    id: 1,
    name: "Luxury Midtown Condo",
    coords: [40.758, -73.9855], // Midtown Manhattan, New York
    location: {
      city: "New York",
      neighborhood: "Midtown",
    },
    price: 5000,
    bedrooms: 2,
    bathrooms: 2,
    imgs:[Fer1,Fer3,Fer4,Fer5],
    size: 1200,
    features: [" Gym Access ,", " Concierge ,", " City View , ", "  Balcony "],
    images: [home1],
    description:
      "A modern luxury condo in Midtown Manhattan with full city views and top amenities.",
  },
  {
    id: 2,
    name: "Cozy Brooklyn Apartment",
    coords: [40.6782, -73.9442], // Brooklyn, New York
    location: {
      city: "New York",
      neighborhood: "Brooklyn",
    },
    price: 2800,
    bedrooms: 1,
    bathrooms: 1,
    size: 750,
    features: [" Pet Friendly, ", " Near Subway ,", " High Ceilings "],
    images: [home2],
    description:
      "A charming one-bedroom apartment in Brooklyn close to subways and local cafes.",
  },
  {
    id: 3,
    name: "Spacious Upper East Side Flat",
    coords: [40.7736, -73.9566], // Upper East Side, New York
    location: {
      city: "New York",
      neighborhood: "Upper East Side",
    },
    price: 7200,
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    features: [" Fireplace ,", " In-Unit Laundry ,", " Near Central Park "],
    images: [home3],
    description:
      "Large, family-friendly flat near Central Park with a cozy fireplace and modern amenities.",
  },
  {
    id: 4,
    name: "Affordable Harlem Studio",
    coords: [40.8116, -73.9465], // Harlem, New York
    location: {
      city: "New York",
      neighborhood: "Harlem",
    },
    price: 1500,
    bedrooms: 0,
    bathrooms: 1,
    size: 400,
    features: [" Close to Public Transport ,", " Secure Building "],
    images: [home4],
    description:
      "An affordable studio in Harlem, perfect for students or young professionals.",
  },
  {
    id: 5,
    name: "Modern Suburban House",
    coords: [40.7498, -73.7976], // Suburb of New York (Queens Area Example)
    location: {
      city: "Suburbia",
      neighborhood: "Green Acres",
    },
    price: 3500,
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1500,
    features: [" Large Backyard ,", " Garage ,", " Open Floor Plan "],
    images: [home5],
    description:
      "A spacious suburban home with a large backyard and modern amenities.",
  },
  {
    id: 6,
    name: "Beachfront Condo",
    coords: [25.7907, -80.1300], // Miami Beach, Florida
    location: {
      city: "Coastal City",
      neighborhood: "Oceanfront",
    },
    price: 6000,
    bedrooms: 2,
    bathrooms: 2,
    size: 1000,
    features: [" Ocean View ,", " Pool Access ,", " Beachfront Location "],
    images: [home6],
    description:
      "A luxurious beachfront condo with stunning ocean views and resort-style amenities.",
  },
  {
    id: 7,
    name: "Historic Townhouse",
    coords: [38.9072, -77.0369], // Washington D.C., Historic Area
    location: {
      city: "Old Town",
      neighborhood: "Historic District",
    },
    price: 4500,
    bedrooms: 4,
    bathrooms: 3,
    size: 2000,
    features: [
      " Original Hardwood Floors ,",
      " High Ceilings ,",
      " Charming Character ",
    ],
    images: [home7],
    description:
      "A charming historic townhouse with original features and modern updates.",
  },
  {
    id: 8,
    name: "Mountain Cabin",
    coords: [35.6118, -83.4895], // Smoky Mountains, Tennessee
    location: {
      city: "Mountain Town",
      neighborhood: "Pine Creek",
    },
    price: 2800,
    bedrooms: 2,
    bathrooms: 1.5,
    size: 1200,
    features: [" Cozy Fireplace ", " ,Mountain Views ,", " Hiking Trails Nearby "],
    images: [home8],
    description: "A cozy mountain cabin perfect for a weekend getaway.",
  },
  {
    id: 9,
    name: "Luxury Penthouse",
    coords: [34.0522, -118.2437], 
    location: {
      city: "City Center",
      neighborhood: "Skyline District",
    },
    price: 10000,
    bedrooms: 3,
    bathrooms: 3,
    size: 2500,
    features: [
      " Rooftop Terrace ,",
      " Panoramic City Views ,",
      " State-of-the-Art Amenities ",
    ],
    images: [home9],
    description:
      "A luxurious penthouse with breathtaking city views and exclusive amenities.",
  },
];
export default properties;
