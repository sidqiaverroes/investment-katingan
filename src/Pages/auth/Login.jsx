import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME, SET_USER } from "../../redux/authSlice";
import { loginUser, validateEmail } from "../../services/authService";
import HeroImage from "../../Assets/hero.png";
import Loader from "../../components/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      await dispatch(SET_USER(data));
      navigate("/home");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // return toast.error(error + " please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center ">
      {isLoading && <Loader />}
      <img
        src={HeroImage}
        alt=""
        className="absolute object-cover w-full h-full"
      ></img>
      <div className="relative z-10 bg-white py-20 px-20 rounded-lg border-2 shadow">
        <h1 className="text-birumud mb-8">Welcome Back</h1>

        <form onSubmit={login} className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500"
            >
              Email address
            </label>
            <input
              type="email"
              required
              name="email"
              value={email}
              autoFocus
              onChange={handleInputChange}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
              <Link
                to="/forgotpassword"
                className="text-sm text-birumud hover:underline focus:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={handleInputChange}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-birumud rounded-md shadow hover:bg-birumud2 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
