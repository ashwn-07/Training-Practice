import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";

const Stars = ({ stars }) => {
  const rating = Array.from({ length: 5 }, (star, i) => {
    
    const number = i + 0.5;

    return stars >= i + 1 ? (
      <FaStar key={i}/>
    ) : stars >= number ? (
      <FaStarHalf key={i} />
    ) : (
      <FaRegStar key={i} />
    );
  });

  return <span className="flex text-yellow-400">{rating}</span>;
};

export default Stars;
