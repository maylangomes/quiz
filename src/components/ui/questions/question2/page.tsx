import React from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion2: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 2 : Quelle est le nombre de secondes accordé pour franchir le milieu de terrain ?</h2>
        <p className='text-sm'>C'est bien d'être tranquille dans la vie, mais pas trop quand t'attaques au basket.</p>
        <Input type="number" {...register("question2")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question2 && errors.question2.message?.toString()}
    </div>
  );
};

export default InputQuestion2;