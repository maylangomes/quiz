import React, { useState } from 'react';

const InputQuestion5 = () => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const StarIcon: React.FC<any> = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );

  return (
    <div className="mt-8">
    <h2 className="text-lg font-semibold">Question 5 : Combien de fois les USA ont été champions du monde ? (10 points)</h2>
      <div className="star-rating flex">
        {[...Array(10)].map((_, index) => {
          const starValue = index + 1;
          return (
            <div
              key={index}
              onClick={() => handleClick(starValue)}
            >
              <StarIcon filled={starValue <= rating} />
            </div>
          );
        })}
      </div>
      {rating > 0 && (
        <p>{rating} fois</p>
      )}
    </div>
  );
};

export default InputQuestion5;
