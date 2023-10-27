import React, { useEffect, useRef, useState } from 'react';
import GigCard from '../../components/gig-card/GigCard';
import { useGigsSearchQuery } from '../../redux/api/apiSlice.js';
import { useLocation } from 'react-router-dom';


const Gigs = () => {

  const minPrice = useRef();
  const maxPrice = useRef();
  const [minState, setMinState] = useState();
  const [maxState, setMaxState] = useState();
  
  const { search } = useLocation();

  useEffect(() => {
    setMinState(minPrice.current?.value);
    setMaxState(maxPrice.current?.value);
  }, [minPrice, maxPrice]); 
  
  const { data, isLoading, error } = useGigsSearchQuery({minPrice : minState, maxPrice : maxState, search : search});

  const handleApply = () => {
    setMinState(minPrice.current?.value);
    setMaxState(maxPrice.current?.value);
  }

  let content = null;

  if(isLoading) content = "Loading . . .";
  if(!isLoading && error) content = "Something went wrong!";
  if(!isLoading && !error && data?.gigs?.length === 0 ) content = "Data not found!";
  if(!isLoading && !error && data?.gigs?.length > 0 ) content = data.gigs.map((gig) => <GigCard key={gig._id} gig={gig} width={"297px"} imgHeight={"177px"}/>);

  return (
    <>
    
      <div className="container py-[60px] pt-[170px]">

        <h4 className="text-[10px] text-[gray] mb-5 font-bold uppercase">Fiverr {">"} Ai Artist</h4>
        <h4 className="text-[30px] text-[#3e3e3e] mb-4 font-bold">Ai Artist</h4>
        <h4 className="text-[19px] text-[gray] mb-4 font-medium">Explore the boundaries of art and technology with Fiverr{"'"}s AI artists</h4>

        <div className="flex justify-start items-center mb-10">
          <span className="text-[17px]">Budget : </span>
          <input ref={minPrice} type="number" placeholder="min" className="py-[5px] px-4 border-[3px] border-[#e0e0e0] outline-none w-[200px] text-[#292929] rounded-md ml-4" />
          <input ref={maxPrice} type="number" placeholder="max" className="py-[5px] px-4 border-[3px] border-[#e0e0e0] outline-none w-[200px] text-[#292929] rounded-md ml-4" />
          <button onClick={handleApply} className="bg-[#1DBF73] hover:bg-[#1ed982] text-white px-5 py-[5px] rounded-md text-[17px] font-bold ml-4">Apply</button>
        </div>

        <div className="grid grid-cols-4 gap-[32px]">

          {/* {
            
            isLoading ? "Loading . . ." : error ? "Something went wrong!" :
            data.gigs.map((gig) => <GigCard key={gig._id} gig={gig} width={"297px"} imgHeight={"177px"}/>)
          
          } */}

          {content}

        </div>
      </div>
    
    </>
  );
}

export default Gigs;
