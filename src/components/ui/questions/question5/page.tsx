import React, { useState } from 'react';

interface StarIconProps {
  filled: boolean;
}

interface InputQuestion5Props {
  onRatingChange: (rating: number) => void;
}

const InputQuestion5: React.FC<InputQuestion5Props> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange(value); // Notify parent about the rating change
  };

  const StarIcon: React.FC<StarIconProps> = ({ filled }) => (
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
    <div className="mt-12">
      <h2 className="text-lg font-semibold">Question 5 : Combien de fois les USA ont été champions du monde ? (10 points)</h2>
      <p className='text-sm'>Indice : C'est autant de fois que la Yougoslavie.</p>
      <br />
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
