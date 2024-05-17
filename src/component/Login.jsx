import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formData);
      // Proceed with form submission (e.g., send data to an API)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-28">
      <h2 className="text-5xl text-primary font-bold mb-10 text-center">LOGIN</h2>
      <form onSubmit={handleSubmit} className="p-8 lg:w-1/2 mx-auto">
        {/* Username */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-xl font-bold mb-2 text-tartiary">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-xl font-bold mb-2 text-tartiary">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full py-2 px-4 bg-transparent border border-gray-300 text-primary rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="bg-green text-white font-bold py-3 px-8 shadow-3xl rounded hover:bg-dark_grenn transition-all duration-300"
          >
            Login
          </button>
        </div>

        {/* Signup Link */}
        <div className="text-center text-xl text-tartiary">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary font-bold hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
