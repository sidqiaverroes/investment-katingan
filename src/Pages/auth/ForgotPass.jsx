import React, { useState } from "react";
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";
import HeroImage from "../../Assets/hero.png";
import Loader from "../../components/Loader";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };
    setIsLoading(true);
    try {
      await forgotPassword(userData);
      setIsLoading(false);
      setEmail("");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
        <h1 className="text-birumud mb-8">Forgot Password</h1>

        <form onSubmit={forgot} className="flex flex-col space-y-5">
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

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-birumud rounded-md shadow hover:bg-birumud2 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Get Reset Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
