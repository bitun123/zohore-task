import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function Register() {

const {register , loading} =   useAuth();

  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

 const navigate =  useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    register( userName , email, password);

navigate("/login")
    // clear inputs
    setuserName("");
    setemail("");
    setpassword("");


  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-[25rem] lg:w-[32rem]">
        <h2 className="text-white text-2xl mb-6">Register</h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Name"
            className="w-full mb-4 p-5 rounded bg-gray-700 text-white border-none outline-none text-xl"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            required
          />

          <input
            placeholder="Email"
            className="w-full mb-4 p-5 rounded bg-gray-700 text-white  border-none outline-none text-xl"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full mb-4 p-5 rounded bg-gray-700 text-white   border-none outline-none text-xl"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />

          <button className="w-full text-xl bg-blue-600 py-4  rounded text-white active:bg-blue-700 active:scale-95 cursor-pointer transition-all duration-200 ">
          {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-xl">
          Already have account?{" "}
          <Link to="/login" className="text-blue-400 text-xl">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
