import React from 'react';
import { Textarea } from "@/components/ui/textarea";


const InputQuestion5: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 5 : Quel est le meilleur sport pour toi ?</h2>
        <p className='text-sm'>Possibilité d'argumenter si c'est le basket.</p>
        <Textarea {...register("question5")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question5 && errors.question5.message?.toString()}
    </div>
  );
};

export default InputQuestion5;