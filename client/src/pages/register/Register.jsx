import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import toaster from '../../utilities/toast.js';
import { isEmail, isPassword, isUsername } from '../../utilities/validate.js';
import { useRegisterMutation } from '../../redux/api/apiSlice.js';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState({
    email : "",
    username : "",
    password : "",
    isSeller : ""
  });

  const handleInputChange = (e) => {
      setInput((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value
      }));
  }

  const handleContinue = (e) => {
    e.preventDefault();
    if(!input.email){
      toaster("warn", "Email field required!");
    }else if(!isEmail(input.email)){
      toaster("warn", "Invalid email address!");
    }else{
      setIsShow(true);
    }
  }

  const handleUserRegister = (e) => {
    e.preventDefault();
    if(!input.username || !input.password || !input.isSeller){
      toaster("warn", "All fields required!");
    }else if(!isUsername(input.username)){
      toaster("warn", "Invalid username address!");
    }else if(!isPassword(input.password)){
      toaster("warn", "Invalid password, 8 charecters or longer!");
    }else{
      register(input).unwrap().then((res) => {
        setInput({
          email : "",
          username : "",
          password : "",
          isSeller : ""
        });
        console.log(res);
        toaster("success", "Thanks for joining us. Please login your account!");
        navigate("/login");
      }).catch((error) => {
        toaster("warn", error.data.message);
      });
    }
  }

  return (
    <>
    
        <div className="py-[60px] bg-[#f2f2f2] mt-[125px]">
            <div className="w-[450px] mx-auto rounded-md px-7 py-6 text-[#404145] bg-[#fff] shadow-md">
              <h4 className="text-[30px] font-bold text-center mb-7">Sign Up to Fiverr</h4>

              <form onSubmit={handleUserRegister}>
                {!isShow && <div className="">
                  <button className="bg-[#5076c2] border-[3px] border-[#5076c2] hover:border-[#5576B9] hover:bg-[#5576B9] text-white px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3"><MdFacebook className="text-2xl mr-4"/> Continue with facebook</button>

                  <button className="bg-transparent hover:bg-transparent border-[3px] border-[#eaeaea] text-[#404145] px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3"><FcGoogle className="text-2xl mr-4"/> Continue with google</button>

                  <button className="bg-transparent hover:bg-transparent border-[3px] border-[#eaeaea] text-[#404145] px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-5"><FaApple className="text-2xl mr-4"/> Continue with apple</button>

                  <h4 className="text-[18px] font-normal text-[gray] text-center mb-5">--- OR ---</h4>

                  <input onChange={handleInputChange} name="email" type="email" className="py-[0.70rem] px-4 mb-3 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Enter your email" />

                  <button onClick={handleContinue} className="bg-[#21d17f] border-[3px] border-[#21d17f] hover:border-[#19A463] hover:bg-[#19A463] text-white px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3">Continue</button>

                  <div className="flex justify-center items-center mt-4">
                    <span className="text-[15px] font-bold text-[#21d17f] text-center">By joining I agree to receive emails from Fiverr.</span>
                  </div>
                </div>}

                {isShow && <div className="">
                  <input onChange={handleInputChange} name="username" type="text" className="py-[0.70rem] px-4 mb-3 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Enter your username" />

                  <input onChange={handleInputChange} name="password" type="password" className="py-[0.70rem] px-4 mb-3 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Choose your password" />

                  <div className="flex justify-between mb-3">
                    <div className="w-[49%]">
                        <div className="flex items-center pl-4 border border-[#bababa] rounded dark:border-gray-700">
                          <input onChange={handleInputChange} id="isBuyer" type="radio" value={false} name="isSeller" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="isBuyer" className="w-full py-[0.70rem] ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Become a Buyer</label>
                        </div>
                    </div>

                    <div className="w-[49%]">
                        <div className="flex items-center pl-4 border border-[#bababa] rounded dark:border-gray-700">
                          <input onChange={handleInputChange} id="isSeller" type="radio" value={true} name="isSeller" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="isSeller" className="w-full py-[0.70rem] ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Become a freelancer</label>
                        </div>
                    </div>
                  </div>

                  <button type="submit" className="bg-[#21d17f] border-[3px] border-[#21d17f] hover:border-[#19A463] hover:bg-[#19A463] text-white px-5 py-[10px] w-[100%] flex justify-center rounded-md text-[17px] font-bold items-center mb-3">Join</button>
                </div>}
              </form>
            </div>
        </div>
    
    </>
  );
}

export default Register;
