import React from 'react';
import { Textarea } from "@/components/ui/textarea";


const InputQuestion5: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 5 : Quelle est la principale différence entre un poste 4 et un poste 5 ? Explique avec un système concret</h2>
        <p className='text-sm'>Si tu ne fais pas de basket, bonne chance.</p>
        <Textarea {...register("question5")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question5 && errors.question5.message?.toString()}
    </div>
  );
};

export default InputQuestion5;