import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authService";
import HeroImage from "../../Assets/hero.png";
import Loader from "../../components/Loader";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const [isLoading, setIsLoading] = useState(false);

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };
    setIsLoading(true);
    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
      setIsLoading(false);
      navigate("/KatinganAdmin");
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
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
        <h1 className="text-birumud mb-8">Reset Password</h1>

        <form onSubmit={reset} className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500"
            >
              New Password
            </label>
            <input
              type="password"
              placeholder="New Password"
              required
              name="password"
              value={password}
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
                Confirm New Password
              </label>
            </div>
            <input
              type="password"
              placeholder="Confirm New Password"
              name="password2"
              value={password2}
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
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
