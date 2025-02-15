import React, { useState } from "react";
import Webcam from "react-webcam";


const Frame = () => {

    const btn = document.getElementById("btn");
    const [showCamera, setShowCamera] = useState(false);

    const handleclick = () => {
        setShowCamera(true);
        btn.innerHTML = "Stop Interview";
    }
    return (
        <>
            <div className="flex flex-col items-center md:gap-10 bg-black">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                    <br/>
                    <div className="text-white">
                        <h1 className="lg:text-4xl text-2xl text-center font-semibold">Java Development Intern</h1>
                        <br/>
                        <div className="f1 h-52 w-100 lg:h-110 lg:w-220 rounded-2xl border-2 border-gray-400">{showCamera ? <Webcam className="h-full w-full rounded-2xl" /> : null} </div>
                    </div>
                    <br/>
                    <div className="lg:h-150 text-white ">
                        <h1 className="lg:text-4xl text-2xl text-center font-semibold">Questions</h1>
                        <br/>
                        <div className="h-50 w-100 lg:h-110 lg:w-120 rounded-2xl border-2 border-gray-400"></div>
                    </div>


                </div>

                <div className="flex p-4 justify-center">
                    <button
                        id="btn"
                        onClick={handleclick}
                        className="  p-4 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:cursor-pointer transition-all duration-200 font-light lg:text-3xl text-white rounded-2xl shadow-lg lg:mt-4">
                        Start Interview
                    </button>
                </div>

            </div>

        </>
    );

}

export default Frame;