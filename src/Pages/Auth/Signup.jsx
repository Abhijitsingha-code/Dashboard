import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialValue = {Username:'',Email:'',Password:'', ConfirmPassword:''};
  const [formData, setFormData] = useState(initialValue);
  const [error,setError]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // console.log('formdata===',formData);

  
  const handleChange=(e)=>{
    const{name, value}= e.target;
    setFormData({...formData, [name]: value});
  }
  
  const handleUserData = (e) => {
    e.preventDefault();
    setError(validate(formData))
    setIsSubmit(true)
    setFormData(initialValue)
  };

  useEffect(()=>{
    console.log(error)
    if(Object.keys(error).length===0 && isSubmit){
      console.log(formData)
    }
  },[error,formData,isSubmit])

  const validate=(value)=>{
    const errors = {};
    if(value.Username==='') errors.Username= 'Username is required'
    if(value.Email==='') errors.Email= 'Email is required'
    if(value.Password==='') errors.Password= 'Password is required'
    if(value.ConfirmPassword==='') errors.ConfirmPassword= 'Confirm password is required'
    if(value.ConfirmPassword!==value.Password) errors.passNotEqualConPass= 'Confirm Password is not same.'

    return errors;
  }

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
              <h3 className="mb-1">Sign Up</h3>
              <p className="text-gray-500 text-m">
              And lets get started
              </p>
            </div>
            <div>
              <form onSubmit={handleUserData}>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    User Name
                  </label>
                  <input
                  name="Username"
                  value={formData.Username}
                  onChange={handleChange}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:outline-none focus:border-indigo-700"
                    autoComplete="off"
                    type="text"
                    placeholder="User Name"
                  />
                  <p className="text-sm text-red-500">{error.Username}</p>
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    Email
                  </label>
                  <input
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:outline-none focus:border-indigo-700"
                    autoComplete="off"
                    type="email"
                    placeholder="@gmail.com"
                  />
                  <p className="text-sm text-red-500">{error.Email}</p>
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    Password
                  </label>
                  <input
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:outline-none focus:border-indigo-700"
                    placeholder="Password"
                    autoComplete="off"
                    type="password"
                  />
                  <p className="text-sm text-red-500">{error.Password}</p>
                  {/* <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer" >show</label> */}
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-gray-500 text-m font-semibold mb-2">
                    Confirm Password
                  </label>
                  <input
                  name="ConfirmPassword"
                  value={formData.ConfirmPassword}
                  onChange={handleChange}
                    className="py-2 px-3 h-11 rounded-md border border-gray-300 shadow-sm outline-none text-gray-500 hover:shadow-lg focus:outline-none focus:border-indigo-700"
                    placeholder="Password"
                    autoComplete="off"
                    type="password"
                  />
                  <p className="text-sm text-red-500">{error.passNotEqualConPass}</p>
                  <p className="text-sm text-red-500">{error.ConfirmPassword}</p>
                  {/* <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer" >show</label> */}
                </div>
                <button
                  className="w-full bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-4 mt-3 mb-3 rounded focus:outline-none"
                  type="submit"
                  // onClick={handlePassword}
                >
                  Sign Up
                </button>
                <div className="flex justify-center text-sm text-gray-500">
                  <p>
                    Already have an account?{" "}
                    <span className="hover:underline">
                      <Link to="/Signin">Sign In</Link>
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
export default Signup;
