import React, { forwardRef } from 'react';
import Person from "../assets/person1.jpg";
import Personl from "../assets/person3.jpg";
import Persony from "../assets/perxon2.jpg";


const AboutUs = forwardRef((props, ref) => {
  return (
    <>
      <div
        id="About"
        ref={ref}
        className="w-screen h-1/2 bg-slate-100 flex flex-col items-center sm:flex-row"
      >
        {/* Text Section */}
        <div className="w-1/2 p-4">
          <p className="font-reem text-wrap text-lg text-center sm:text-start sm:text-xl md:text-xl m-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam modi
            minus, aperiam delectus earum laborum consectetur. Sint cupiditate
            ducimus ipsa! Officia consectetur voluptates nisi molestiae,
            quisquam expedita? Iusto, odio quod.
          </p>
          <h1 className="bottom-0 left-0 font-body mt-7 text-7xl sm:text-9xl text-orange-400">
            Home^2
          </h1>
        </div>

        {/* Images Section */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-orange-400 font-noor text-lg m-4">Owner</h1>

          <div className="flex space-x-4">
            <img
              src={Person}
              alt="Owner 1"
              className="w-14 h-14 rounded-full"
            />
            <img
              src={Personl}
              alt="Owner 2"
              className="w-20 h-20 rounded-full"
            />
            <img
              src={Persony}
              alt="Owner 3"
              className="w-14 h-14 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default AboutUs;
