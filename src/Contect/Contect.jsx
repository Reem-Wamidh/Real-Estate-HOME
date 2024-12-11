import React, { forwardRef } from 'react';
 import Bg from "../assets/contect.jpg";
 


 const Contect = ((props, ref) =>

 {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "153421df-7a5d-4d98-aa95-709589bb14a4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
      
      return (
        <>
          <div
          id="Contect"
          ref={ref}
          className="h-screen flex w-screen items-center justify-around  overflow-x-hidden box-content">
            <div className="self-start w-1/2">
              <img
                src={Bg}
                alt="image"
                className="bg-cover w-full h-screen object-cover"
              />
            </div>
      
            <div className="w-1/2 self-center bg-gray-800 h-full">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-orange-500 mb-10">
                    Still haven't found what you're looking for?
                  </h2>
      
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-wrap gap-4"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    id="form"
                  >
                    <input
                      name="name"
                      type="text"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Full Name"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Email"
                      required
                    />
                    <input
                      name="number"
                      type="number"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      name="companyName"
                      type="text"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Company Name"
                    />
                    <input
                      name="jobTitle"
                      type="text"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Job Title"
                    />
                    <input
                      name="dateOfBirth"
                      type="date"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
                      placeholder="Date of Birth"
                    />
                    <textarea
                      name="message"
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                      placeholder="Message"
                      required
                    ></textarea>
      
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );

    } );

    export default Contect ;