/** @format */

import Personal from "../assets/profile.jpg";
import Cross from "../assets/Crosss.png";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <>
      <div className="flex items-start flex-col justify-start  w-full gap-2 ">
        <div className="flex flex-col items-center justify-between   mx-6 my-2 overflow-y-scroll flex-1 ">
          <h1 className="text-2xl font-bold font-reem m-3">Massege</h1>
          <div className="bg-slate-300 p-3 my-2 rounded-xl flex items-start justify-between mr-2  w-fit  ">
            <img
              src={Personal}
              alt="image"
              className="w-10 h-10 rounded-full  mr-3"
            />
            <span className="mr-4 mt-2 font-bold "> Reem wamidh</span>
            <p className="mt-2">Lorem ipsum dolor sit amet .... </p>{" "}
          </div>
          <div className="bg-slate-300 p-3 my-2 rounded-xl flex items-start justify-between">
            <img
              src={Personal}
              alt="image"
              className="w-10 h-10 rounded-full  mr-3"
            />
            <span className="mr-4 mt-2 font-bold "> Reem wamidh</span>
            <p className="mt-2">Lorem ipsum dolor sit amet .... </p>{" "}
          </div>
          <div className="bg-slate-300 p-3 my-2 rounded-xl flex items-start justify-between">
            <img
              src={Personal}
              alt="image"
              className="w-10 h-10 rounded-full  mr-3"
            />
            <span className="mr-4 mt-2 font-bold "> Reem wamidh</span>
            <p className="mt-2">Lorem ipsum dolor sit amet .... </p>{" "}
          </div>
          <div className="bg-slate-300 p-3 my-2 rounded-xl flex items-start justify-between">
            <img
              src={Personal}
              alt="image"
              className="w-10 h-10 rounded-full  mr-3"
            />
            <span className="mr-4 mt-2 font-bold "> Reem wamidh</span>
            <p className="mt-2">Lorem ipsum dolor sit amet .... </p>{" "}
          </div>
          <div className="bg-slate-300 p-3 my-2 rounded-xl flex items-start justify-between">
            <img
              src={Personal}
              alt="image"
              className="w-10 h-10 rounded-full  mr-3"
            />
            <span className="mr-4 mt-2 font-bold "> Reem wamidh</span>
            <p className="mt-2">Lorem ipsum dolor sit amet .... </p>{" "}
          </div>
        </div>

        {chat && (
          <div className="flex  flex-col items-center justify-evenly w-full h-full  gap-2 border-orange-400 border-2 rounded-md p-2">
            {/*top  */}
            <div className="flex w-full flex-1 items-center justify-between bg-slate-300 rounded-md  px-4  py-2 grow">
              <div className="flex items-center justify-evenly  font-bold font-reem">
                <img
                  src={Personal}
                  className="w-10 h-10 rounded-full mx-2"
                  alt="image"
                />
                <h1>reem wamidh</h1>
              </div>
              <img
                src={Cross}
                alt="image"
                className="w-4 h-4 ml-5 cursor-pointer"
                onClick={() => setChat(null)}
              />
            </div>
{/*chat center */}
            <div className="gap-2 flex flex-col w-full h-96 overflow-y-auto">
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem self-end text-right">
                <p>Lorem, ipsum dolor sit </p>
                <span className="text-left"> 1 hour ago</span>
              </div>
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem ">
                <p>Lorem, ipsum dolor sit </p>
                <span> 1 hour ago</span>
              </div>
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem self-end text-right">
                <p>Lorem, ipsum dolor sit </p>
                <span > 1 hour ago</span>
              </div>
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem ">
                <p>Lorem, ipsum dolor sit </p>
                <span> 1 hour ago</span>
              </div>
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem  self-end text-right">
                <p>Lorem, ipsum dolor sit </p>
                <span > 1 hour ago</span>
              </div>
              <div className="bg-slate-300 w-1/2 p-2 rounded-lg font-reem ">
                <p>Lorem, ipsum dolor sit </p>
                <span> 1 hour ago</span>
              </div>
            </div>
            {/*button  */}
            <div className="flex justify-between w-full flex-1">
              <textarea className="border-2 w-full flex-1"></textarea>
              <button className="font-bold  bg-orange-400 rounded-xl ml-2 px-5 ">
                send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
