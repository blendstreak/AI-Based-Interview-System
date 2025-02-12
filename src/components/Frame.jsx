import React, { useState } from "react";
import '../App.css'
import Webcam from "react-webcam";


const Frame = () =>{
    const btn = document.getElementById("btn");
    const[showCamera,setShowCamera] = useState(false);
    const handleclick = () =>
    {
        setShowCamera(true);
        btn.innerHTML = "Stop Interview";
    }
    return(
    <>
        <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-10">
            <div className="h-150 p-15 text-white">
                <h1 className="text-4xl font-semibold">Java Development Intern</h1>
                <div className="f1  h-110 w-220 m-10  bg-[#2C2C2C] rounded-2xl border-2 border-white">{showCamera ? <Webcam className="h-full w-full rounded-2xl"/>:null} </div>
        </div>
        <div className="h-150 p-15 text-white">
            <h1 className="text-4xl font-semibold">Questions</h1>
            <div className="h-110 w-120 m-10  bg-[#2C2C2C] rounded-2xl border-2 border-white"></div>
        </div>
    </div>
    
    <button 
    id="btn"
    onClick={handleclick}  
    className="  p-4 bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-light text-3xl text-white rounded-2xl shadow-lg mt-4">
        Start Interview
    </button>
    </div>
        
    </>
    );

}

export default Frame;