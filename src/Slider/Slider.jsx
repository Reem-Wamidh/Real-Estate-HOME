/** @format */
import Right from "../assets/angle-right.png";
import Left from "../assets/angle-left.png";
import Close from "../assets/cross.png";
import {useState} from "react";
import { properties } from "../lib/DumData.js";
 
const imgs = properties.map(property => property.imgs);

const Slider = ({ imgs }) => {
const [imageIndex,setImage]=useState(null);
const changeSlide=(direction)=> {
if(direction  ===  "left"){
  if (imageIndex === 0 ) {
    setImage(imgs.length-1)
  }else{
    setImage(imageIndex-1)
  }

}else{
if (imageIndex === imgs.length-1) {
  setImage(0)
}else{
  setImage(imageIndex+1)
}

}
}

if (!imgs || imgs.length === 0) {
  return <div>No images to display</div>;
}
  return (
    <>
      <div className="w-full box-border h-96 flex gap-2 mb-3  ">
        {/* full slider */}
       { imageIndex !== null &&( <div className="absolute w-screen h-screen box-border top-0 left-0 bg-black/50 flex items-center justify-around backdrop-blur-lg z-50  ">
          <div  onClick={()=>changeSlide("left")}>
            {" "}
            <img
              src={Left}
              alt="Left"
                 className="flex items-center justify-center  cursor-pointer "
                
                
            />
          </div>
          <div className="object-center ">
            {" "}
            <img
              src={imgs[imageIndex]}
              alt="image"
              className="object-cover w-96"
            />
          </div>
          <div  onClick={()=>changeSlide("right")}>
            <img
              src={Right}
              alt="Right"
              className="flex items-center justify-center  cursor-pointer "
            />
          </div>

          <div className="absolute top-0 right-0 cursor-pointer">
            <img
              src={Close}
              alt="close "
              onClick={()=>setImage(null)}
              className=" m-10 cursor-pointer "
            />
          </div>
        </div>)}

        {/** Big image  */}
        <div className="grow">
          <img
            src={imgs[0]}
            alt="image"
            className=" grow w-full rounded-xl object-cover cursor-pointer h-full "
            onClick={()=>setImage(0)}
          />
        </div>
        {/** Smalle image  */}
        <div className="grow-0 flex flex-col justify-between gap-3 ">
          {imgs.slice(1).map((img, index) => (
            <img
              src={img}
              alt="image"
              key={index}
              className="w-24 rounded-xl object-cover cursor-pointer h-28  "
              onClick={()=>setImage(index+1)}
         
            />
           
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
