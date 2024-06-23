import React from 'react';
import { Input } from "@/components/ui/input";

const InputUserQuestion: React.FC<any> = ({ userTitle, userDescription }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Question : {userTitle}</h2>
      <p className='text-sm'>{userDescription}</p>
      <Input type="text" className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
    </div>
  );
};

export default InputUserQuestion;