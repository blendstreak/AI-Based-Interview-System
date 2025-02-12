import React from "react";
import '../App.css'
const Navi = () => {
  return (
    <nav className="flex justify-between items-center bg-[#1E1E1E] text-white h-20 ">
          <div className="flex justify-center items-center gap-2">
            <img className="h-14 ml-9" src="./logo.png" alt="logo" />
            <p className="font-semibold text-3xl">MockMate</p>
          </div>
          <ul className="flex justify-evenly items-center gap-8 mr-9">
            <li><a href="/">Home</a></li>
            <li><a href="/Premium">Try Premium</a></li>
            <li> <a href="/About">About Us</a>  </li>
            <li className="border-1 border-white rounded-2xl p-3 hover:bg-white hover:text-black hover:font-semibold transition-all duration-300">
              <a href="/Login">Login</a>
            </li>
          </ul>
    </nav>
  );
};

export default Navi;