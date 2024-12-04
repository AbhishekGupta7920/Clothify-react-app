import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const LoginSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username.trim()) tempErrors.username = "Username is required";
    if (isSignUp && !formData.email.trim())
      tempErrors.email = "Email is required";
    if (!formData.password.trim())
      tempErrors.password = "Password is required";
    if (isSignUp && formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords must match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isSignUp) {
        alert("Signup Successful!");
      } else {
        alert("Login Successful!");
      }
      // Add your logic here for API or authentication
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Username</label>
            <div className="flex items-center border rounded-lg">
              <FaUserAlt className="p-2 text-gray-600" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="p-2 w-full border-l rounded-lg focus:outline-none"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email</label>
              <div className="flex items-center border rounded-lg">
                <FaEnvelope className="p-2 text-gray-600" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="p-2 w-full border-l rounded-lg focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg">
              <FaLock className="p-2 text-gray-600" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="p-2 w-full border-l rounded-lg focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-lg">
                <FaLock className="p-2 text-gray-600" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="p-2 w-full border-l rounded-lg focus:outline-none"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 font-bold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUpForm;
