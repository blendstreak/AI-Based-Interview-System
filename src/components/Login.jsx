import React from "react";


const Login = () =>
{
    return(
        <>

        <div className="back z-0  h-210 bg-[#121212]  grid justify-center items-center text-white md:mt-[-5%]">
            <div className="w-screen h-auto md:w-auto py-20 md:px-20 m-6 rounded-2xl shadow-lg shadow-amber-200">
                <h1 className="pt-5 pl-5 pd-5 text-4xl font-semibold text-center">SignUp</h1>
                <form className="justify-center items-center mt-10 grid">
                    <label className="md:text-xl"> Name: </label>
                    <input className="bg-white text-black w-100 mt-2 p-2.5 border-none rounded-2xl" placeholder="Enter Your Name"  required type="text" />
                    <label className="md:text-xl mt-5"> E-Mail: </label>
                    <input className="bg-white text-black w-100 p-2.5 border-none mt-2 rounded-2xl" placeholder="Enter Your Email" required type="email" />
                    <label className="md:text-xl mt-5"> Job You Want To Apply For: </label>
                    <select name="Job" id="" required className="border rounded-2xl pl-2 p-1 bg-white text-black mt-2">
                        <option value="Job" >--Choose From Below--</option>
                        <option value="Java Development Intern">Java Development Intern</option>
                        <option value="Python Development Intern">Python Development Intern</option>
                        <option value="Senior Software Engineer">Senior Software Engineer</option>
                        <option value="Software Testing">Software Testing</option>
                    </select>
                    <label className="md:text-xl mt-5"> Date of Birth: </label>
                    <input className="bg-white text-black w-100 pl-2 p-1 border-none mt-2 rounded-2xl" placeholder="Enter Your Name"  required type="date" />
                    <label className="md:text-xl mt-5"> Password: </label>
                    <input className="bg-white text-black w-100 pl-2 border-none mt-2 rounded-2xl p-2.5" placeholder="Enter Your Password"  required type="password" />
                    <div className="grid justify-center content-center mt-9">
                        <button type="submit" className="p-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-light text-xl text-white rounded-lg shadow-lg mt-4">
                            Submit
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
        </>
    );
}

export default Login;