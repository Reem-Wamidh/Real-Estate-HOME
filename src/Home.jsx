/** @format */

import SearchBox from "./SearchBox";
import Contect from "./Contect/Contect.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";

const Home = () => {
  return (
    <>
      <div>
        {/*  Home search box  */}

        <SearchBox />
      </div>

      <div>
        <Contect />
      </div>

      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
