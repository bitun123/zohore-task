import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function Login() {

  const { login, loading } = useAuth();


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  const res = login(email, password);
  console.log(res);
     if (res.success) {
    navigate("/"); 
    setemail("");
    setpassword("");
  }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-[25rem] lg:w-[30rem]  sm:[26rem]">
        <h2 className="text-white text-2xl mb-6">Login</h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Email"
            className="w-full mb-6 border-none outline-none p-4 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full mb-6 border-none outline-none p-4 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button className="w-full bg-blue-600 py-4 active:scale-95 cursor-pointer rounded text-white">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-xl">
          No account?{" "}
          <Link to="/register" className="text-blue-400 text-xl">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
