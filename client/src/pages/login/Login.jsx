import React, { useState } from 'react';
import { MdFacebook } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useLoginMutation } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast.js';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [input, setInput] = useState({
    usernameOrEmail : "",
    password : "",
  });

  const handleInputChange = (e) => {
      setInput((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value
      }));
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    if(!input.usernameOrEmail || !input.password){
      toaster("warn", "All fields required!");
    }else{
      login(input).unwrap().then((res) => {
        setInput({
          usernameOrEmail : "",
          password : "",
        });
        localStorage.setItem("loginUser", JSON.stringify(res.user));
        toaster("success", `Welcome back!`);
        // navigate(`/profile/${res.data._id}`);
        navigate(`/orders`);
        window.location.reload();
      }).catch((error) => {
        toaster("warn", error.data.message);
      });
    }
  }

  return (
    <>
    
        <div className="py-[60px] bg-[#f2f2f2] mt-[125px]">
            <div className="w-[450px] mx-auto rounded-md px-7 py-6 text-[#404145] bg-[#fff] shadow-md">
              <h4 className="text-[30px] font-bold text-center mb-7">Sign In to Fiverr</h4>

              <form onSubmit={handleLoginFormSubmit}>
                <button className="bg-[#5076c2] border-[3px] border-[#5076c2] hover:border-[#5576B9] hover:bg-[#5576B9] text-white px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3"><MdFacebook className="text-2xl mr-4"/> Continue with facebook</button>

                <button className="bg-transparent hover:bg-transparent border-[3px] border-[#eaeaea] text-[#404145] px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3"><FcGoogle className="text-2xl mr-4"/> Continue with google</button>

                <button className="bg-transparent hover:bg-transparent border-[3px] border-[#eaeaea] text-[#404145] px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-5"><FaApple className="text-2xl mr-4"/> Continue with apple</button>

                <h4 className="text-[18px] font-normal text-[gray] text-center mb-5">--- OR ---</h4>

                <input onChange={handleInputChange} name="usernameOrEmail" type="text" className="py-[0.70rem] px-4 mb-3 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Username / Email" />

                <input onChange={handleInputChange} name="password" type="password" className="py-[0.70rem] px-4 mb-3 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Password" />

                <button type="submit" className="bg-[#21d17f] border-[3px] border-[#21d17f] hover:border-[#19A463] hover:bg-[#19A463] text-white px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3">Continue</button>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                      <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href='/' className="text-[15px] font-bold text-[#21d17f] text-center">Forgot Password</a>
                </div>
              </form>
            </div>
        </div>
    
    </>
  );
}

export default Login;
