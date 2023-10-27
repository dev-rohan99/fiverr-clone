import React from 'react';
import Review from '../review/Review';
import { useGetreviewsQuery } from '../../redux/api/apiSlice.js';


const Reviews = ({gigId}) => {

  const { data, isLoading, error } = useGetreviewsQuery(gigId);

  return (
    <>
    
        <div className="reviewWrap">
            <h3 className="text-[25px] text-[#4b4b4b] mb-5 font-bold">Reviews</h3>

            {
              isLoading ? "Loading . . ." : error ? "Something went wrong!" : [...data?.reviews].map((item, index) => 
              
                <Review key={item._id} review={item} />
              
              )
            }
        </div>
    
    </>
  )
}

export default Reviews;
