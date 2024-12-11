import { useParams } from "react-router-dom";
import { properties } from "../lib/DumData.js";
import Slider from "../Slider/Slider.jsx";
import Reem from "../assets/Reemate.png";
import Bed from "../assets/Bedd.png";
import Bath from "../assets/bathtub.png";
import Space from "../assets/layout.png";
import Feature from "../assets/feature.png";
import Map from "../Map/Map.jsx";

const SinglePage = () => {
  const { id } = useParams();
  const property = properties.find((item) => item.id === parseInt(id));

  if (!property) {
    return <h1>Property not found!</h1>;
  }

  return (
    <>
      <div className="flex flex-col items-center sm:flex-row sm:justify-evenly  gap-4 m-5  font-reem z-0" >
        {/*Details Section */}
        <div>
          <Slider imgs={property.imgs} />
          <div>
            <div className="ml-4">
              <div className="flex flex-col items-start justify-between gap-3 my-3">
                <h1 className="text-2xl  font-bold  font-noor pt-2 ">
                  {property.name}
                </h1>
                <h2 className="bg-orange-400 font-bold text-fuchsia-50  rounded-xl p-2 w-fit my-2 ">
                  {property.price.toLocaleString()} $
                </h2>

                <div className="flex">
                  <img
                    src={Reem}
                    alt="image"
                    className="w-5 h-5 mr-2"
                  />
                  <h3 className="flex items-center">
                    {property.location.city}, {property.location.neighborhood}
                  </h3>
                </div>
              </div>
              <h1 className="text-orange-400 font-bold text-3xl  p-2  ">
                Description
              </h1>
              <p className="bg-slate-400 rounded-xl p-2 text-white font-bold">
                {property.description}
              </p>
            </div>
          </div>
        </div>

        {/** Features Section */}
        <div className="bg-slate-200 p-3   gap-8  rounded-xl w-fit h-screen flex flex-col ">
          {/*general */}
          <div className="mt-7">
            <h1 className="font-bold text-2xl font-noor m-3 text-orange-400">
              General{" "}
            </h1>
            <div className="flex items-center justify-between gap-4 bg-slate-100 m-2 p-3 rounded-lg">
              {" "}
              <div className="flex">
                <img
                  src={Bed}
                  alt="image "
                  className="mx-2"
                />{" "}
                <p>{property.bedrooms}</p>
              </div>{" "}
              <div className="flex">
                <img
                  src={Bath}
                  alt="image "
                  className="mx-2"
                />
                <p>{property.bathrooms}</p>
              </div>{" "}
              <div className="flex">
                <img
                  src={Space}
                  alt="image "
                  className="mx-2"
                />
                <p>{property.size} sqm</p>
              </div>
            </div>
          </div>
          {/*features */}
          <div>
            <h1 className="font-bold text-2xl font-noor m-3 text-orange-400">
              Features
            </h1>
            <div className="flex  bg-slate-100 m-2 p-3 rounded-lg">
              <img
                src={Feature}
                alt="image "
                className="mx-2"
              />
              <p> {property.features}</p>
            </div>
          </div>
          {/*location */}
          <div>
            <h1 className="font-bold text-2xl font-noor m-3 text-orange-400 ">
              Location
            </h1>
            <div className="relative z-10 m-2 w-96 h-60  ">
              <Map
                items={[
                  {
                    coords: property.location.coords,
                    name: property.name,
                    price: property.price.toLocaleString(),
                    id: property.id,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
