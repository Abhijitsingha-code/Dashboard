import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({});
  const [rememberMe, setRememberME] = useState(false);

  const handleUserData = (e) => {
    e.preventDefault();
    setFormData({
      Username: username,
      password: password,
    });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-auto flex-col h-[100vh]">
      <div className="grid lg:grid-cols-3 h-full">
        <div
          className="bg-no-repeat bg-cover hidden lg:block"
          style={{
            background:
              'url("https://elstar.themenate.net/img/others/auth-side-bg.jpg")',
          }}
        ></div>
        <div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
          <div className="px-8 xl:min-w-[450px]">
            <div className="mb-6">
              <h3 className="mb-1">Welcome Back!</h3>
              <p className="text-gray-500 text-m">
                Please enter your credentials to login!
              </p>
            </div>
            <div>
              <form onSubmit={handleUserData}>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    User Name
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:border-indigo-700"
                    autoComplete="off"
                    type="text"
                    placeholder="User Name"
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:outline-none focus:border-indigo-700"
                    placeholder="Password"
                    autoComplete="off"
                    type="password"
                  />
                  {/* <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer" >show</label> */}
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex justify-center text-gray-500 text-sm">
                    <input
                      onClick={() => setRememberME(!rememberMe)}
                      className="mr-2 h-5 w-5"
                      type="checkbox"
                    />
                    <span>Remember Me</span>
                  </div>
                  <Link to="#">Foget Password?</Link>
                </div>
                <button
                  className="w-full bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-4 mt-3 mb-3 rounded focus:outline-none"
                  type="submit"
                  disabled={rememberMe === false ? true : false}
                >
                  LogIn
                </button>
                <div className="flex justify-center text-sm text-gray-500">
                  <p>
                    Don't have an account yet?{" "}
                    <span className="hover:underline">
                      <Link to="/Signup">Sign Up</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
