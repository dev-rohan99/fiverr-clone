import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddNewGigMutation } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast.js';


const NewGigs = () => {

  const navigate = useNavigate();
  const [addNewGig] = useAddNewGigMutation();
  const [input, setInput] = useState({
    title : "",
    description : "",
    category : "",
    gigCoverImg : "",
    gigImgs : [],
    price : null,
    shortTitle : "",
    shortDesc : "",
    deliveryTime : "",
    revision : "",
    features : []
  });

  // const handleGigPhotos = (e) => {
  //   const images = Array.from(e.target.files);
  //   if(images.length > 0){
  //     let urls = [];
  //     images.map((item) => {
  //       const url = URL.createObjectURL(item);
  //       urls.push(url)
  //     })
  //     images.map((item) => {
  //       const url = URL.createObjectURL(item);
  //       return url;
  //     })
  //     setInput((prevState) => ({
  //       ...prevState,
  //       gigImgs : urls
  //     }))
  //   }
  // }

  const handleCoverPhoto = (e) => {
    const image = e.target.files[0];
    if(image){
      const url = URL.createObjectURL(image);
      setInput({
        gigCoverImg : url
      })
    }
  }

  const handleGigPhotos = (e) => {
    const images = Array.from(e.target.files);
    if (images.length > 0) {
      const urls = images.map((item) => URL.createObjectURL(item));
  
      setInput((prevState) => ({
        ...prevState,
        gigImgs: urls
      }));
    }
  };

  const handleFeatures = (e) => {
    const feature = e.target.value;
    const isChecked = e.target.checked;

    setInput((prevInput) => {
      const features = prevInput.features || [];

      if (isChecked) {
        // Add the feature if it doesn't already exist in the array
        if (!features.includes(feature)) {
          return {
            ...prevInput,
            features: [...features, feature],
          };
        }
      } else {
        // Remove the feature from the array if it exists
        const updatedFeatures = features.filter((item) => item !== feature);
        return {
          ...prevInput,
          features: updatedFeatures,
        };
      }

      return prevInput;
    });
  }

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleGigFormSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    if(!input.title || !input.category || !input.deliveryTime || !input.description || !input.gigCoverImg || !input.price || !input.shortTitle || !input.shortDesc || !input.revision){
      toaster("warn", "All fields required!");
    }else{
      await addNewGig(input).then((res) => {
        console.log(res);
        toaster("success", `Congrats! Your new gig published.`);
        navigate(`/profile/${res.data.userId}`);
      }).catch((error) => {
        toaster("warn", error.data.message);
      });
    }
  }

  return (
    <>
    
      <div className="py-[60px] mt-[125px]">
        <div className="container">
          <div>
            <h4 className="text-[30px] text-[#3e3e3e] mb-5 font-bold">Add new gig</h4>

            <form onSubmit={handleGigFormSubmit} className="w-[100%]">
              <div className="flex justify-between">

                <div className="w-[47%]">

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="titleOne">Title</label>
                    <input name="title" onChange={handleInputChange} type="text" id='titleOne' className="py-[0.60rem] px-4 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Enter your title" />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="revision">Category</label>
                    <select name="category" onChange={handleInputChange} id="revision" className="bg-gray-50 py-[0.75rem] border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Choose one</option>
                      <option value="graphics-design">Graphics & Design</option>
                      <option value="programming-tech">Programming & Tech</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="writing-translation">Writing & Translation</option>
                      <option value="video-animation">Video & Animation</option>
                      <option value="music-audio">Music & Audio</option>
                      <option value="data">Data</option>
                      <option value="business">Business</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="photography">Photography</option>
                      <option value="end-to-end-projects">End to end projects</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="file_input">Cover Photo</label>
                    <input name='gigCoverImg' onChange={handleCoverPhoto} className="block w-full text-md text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 rounded-sm focus:outline-none p-2" id="file_input" type="file"/>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="file_input2">Upload Images</label>
                    <input name="gigImgs" onChange={handleGigPhotos} className="block w-full text-md text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 rounded-sm focus:outline-none p-2" id="file_input2" type="file" multiple/>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="desc">Desciption</label>
                    <textarea name="description" onChange={handleInputChange} rows="15" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." id="desc"></textarea>
                  </div>

                  <button type="submit" className="bg-[#1DBF73] hover:bg-[#1ed982] text-white px-5 py-[11px] rounded-md text-[17px] font-bold w-[100%]">Create</button>

                </div>

                <div className="w-[47%]">

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="sTitle">Service Title</label>
                    <input name="shortTitle" onChange={handleInputChange} type="text" id="sTitle" className="py-[0.60rem] px-4 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Enter your service title" />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="shortDesc">Short Desciption</label>
                    <textarea name="shortDesc" onChange={handleInputChange} rows="6" id="shortDesc" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="deliveryTime">Delivery Time</label>
                    <select name="deliveryTime" onChange={handleInputChange} id="deliveryTime" className="bg-gray-50 py-[0.75rem] border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Choose one</option>
                      <option value="1 day delivery">1 day delivery</option>
                      <option value="3 day delivery">3 days delivery</option>
                      <option value="5 day delivery">5 days delivery</option>
                      <option value="7 day delivery">7 days delivery</option>
                      <option value="10 day delivery">10 days delivery</option>
                      <option value="15 day delivery">15 days delivery</option>
                      <option value="20 day delivery">20 days delivery</option>
                      <option value="25 day delivery">25 days delivery</option>
                      <option value="30 day delivery">30 days delivery</option>
                      <option value="45 day delivery">45 days delivery</option>
                      <option value="60 day delivery">60 days delivery</option>
                      <option value="70 day delivery">70 days delivery</option>
                      <option value="85 day delivery">85 days delivery</option>
                      <option value="100 day delivery">100 days delivery</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="price">Price</label>
                    <input name="price" onChange={handleInputChange} type="number" id="price" className="py-[0.60rem] px-4 border-[3px] text-[#292929] text-[16px] border-[#eaeaea] w-[100%] outline-none rounded-sm" placeholder="Enter your price" />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="revision">Revisions</label>
                    <select name="revision" onChange={handleInputChange} id="revision" className="bg-gray-50 py-[0.75rem] border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Choose one</option>
                      <option value="3">3</option>
                      <option value="6">6</option>
                      <option value="9">9</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="unlimited">unlimited</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 text-[16px] font-bold text-[gray] block" htmlFor="features">Features</label>
                    
                    <div className="flex justify-between">

                      <div className="w-[49%]">

                        <div className="flex items-center pl-4 border border-[#bababa] rounded dark:border-gray-700">
                          <input name='features' onChange={handleFeatures} id="contomize" type="checkbox" value="Design customization" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="contomize" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Design customization</label>
                        </div>

                        <div className="flex items-center pl-4 border border-[#bababa] rounded mt-3 dark:border-gray-700">
                          <input name='features' onChange={handleFeatures} id="content" type="checkbox" value="Content upload" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="content" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Content upload</label>
                        </div>

                        <div className="flex items-center pl-4 border border-[#bababa] rounded mt-3 dark:border-gray-700">
                          <input name='features' onChange={handleFeatures} id="responsive" type="checkbox" value="Responsive design" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="responsive" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Responsive design</label>
                        </div>

                      </div>

                      <div className="w-[49%]">

                        <div className="flex items-center pl-4 border border-[#bababa] rounded">
                          <input name='features' onChange={handleFeatures} id="source" type="checkbox" value="Source code" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"/>
                          <label htmlFor="source" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Source code</label>
                        </div>

                        <div className="flex items-center pl-4 mt-3 border border-[#bababa] rounded dark:border-gray-700">
                          <input name='features' onChange={handleFeatures} id="functional" type="checkbox" value="Functional website" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="functional" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Functional website</label>
                        </div>

                        <div className="flex items-center pl-4 mt-3 border border-[#bababa] rounded dark:border-gray-700">
                          <input name='features' onChange={handleFeatures} id="comments" type="checkbox" value="Detailed code comments" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="comments" className="w-full py-4 ml-2 text-sm font-medium text-[gray] dark:text-gray-300">Detailed code comments</label>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    
    </>
  );
}

export default NewGigs;
