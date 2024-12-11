/** @format */

import Personal from "../assets/profile.jpg";
import List from "../List/List.jsx";
import Chat from "../Chat/Chat.jsx";

const Profile = () => {
  return (
    <>
      <div className="flex items-start justify-evenly  ">
        {/** details */}
        <div className="flex flex-col items-center justify-between  gap-2 mx-6 my-2 ">
          <div>
            <div className="flex items-center justify-between gap-28">
              <h1 className="FONT-bold font-reem ">User Information</h1>
              <button className="bg-orange-500 font-noor font-bold p-3 rounded-xl ">
                {" "}
                Update Your Profile{" "}
              </button>
            </div>

            {/**info */}
            <div className="flex flex-col items-start  justify-between gap-3 my-3">
              {" "}
              <img
                src={Personal}
                alt="my image"
                className="w-14 h-14 rounded-full"
              />
              <span>
                Your Name : <b>reem wamidh</b>
              </span>
              <span>
                Email : <b>reem @gmail.com</b>
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-28 mr-5 mb-3">
              <h1 className="font-bold font-reem text-sm  sm:text-lg  md:texl-xl  lg:text-2xl lg:ml-5 text-orange-500">My List </h1>
              <button className="bg-orange-500 font-noor font-bold p-3 rounded-xl  ">
                {" "}
                Create New Post
              </button>
            </div>

            <List />
          </div>
          <div>
            <h1 className="font-bold font-reem text-sm  sm:text-lg  md:texl-xl  lg:text-2xl lg:ml-5 text-orange-500 mt-4 bg-slate-300 p-3 w-fit  rounded-xl  shadow-xl" >Save List </h1>
            <List />
          </div>
        </div>
        {/**chat container */}
        <div>
          <div className="w-full h-full">
            
            <Chat/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
