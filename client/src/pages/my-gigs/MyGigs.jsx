import React from 'react';
import { MdContacts } from 'react-icons/md';


const MyGigs = () => {

  

  return (
    <>
    
      <div className="py-[60px] mt-[125px]">
          <div className="container">
            <div className="">
              <h4 className="text-[30px] text-[#3e3e3e] mb-5 font-bold">Orders</h4>

              <div className="relative overflow-x-auto w-[100%]">
                  <table className="w-full text-sm text-left text-[#292929] dark:text-gray-400">
                      <thead className="text-lg text-[#353535] uppercase bg-transprent dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Image
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Title
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Buyer
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Contact
                              </th>
                          </tr>
                      </thead>
                      
                      <tbody>

                        <tr className="bg-[#cfffe7] border-b font-semibold text-[15px] dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-[80px] h-[50px] object-cover rounded-md" src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216703594/original/3dc7d974fc2416c51ca5bf561a42d936132ca5d4.jpg" alt="" />
                            </th>
                            <td className="px-6 py-4 w-[400px]">
                              <div className="line-clamp-1">Find high-quality services at every price point. No hourly rates, just project-based pricing.</div>
                            </td>
                            <td className="px-6 py-4">
                                $100
                            </td>
                            <td className="px-6 py-4">
                                Rohan Mostofa
                            </td>
                            <td className="px-6 py-4">
                                <a href="/" className="w-[40px] h-[40px] rounded-full bg-[#5fa4ff] flex justify-center items-center"><MdContacts className="text-2xl text-[#ffffff]" /></a>
                            </td>
                        </tr>

                      </tbody>
                  </table>
              </div>
            </div>
          </div>
      </div>
    
    </>
  );
}

export default MyGigs;
