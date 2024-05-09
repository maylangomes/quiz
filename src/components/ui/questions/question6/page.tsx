import React from 'react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion6: React.FC<any> = ({ register, errors }) => {
    const [showQuestion6, setShowQuestion6] = useState(false);

    const handleQuestionAChange = (e: any) => {
        setShowQuestion6(e.target.value === 'Oui');
      };

  return (
    <div>
        <div className="mt-8">
            <h2 className="text-lg font-semibold">Question 6 : As-tu déjà fait du basket ?</h2>
            <p className='text-sm'>Le questionnaire étant à but statistique, la question paraît pertinente.</p>
            <select {...register("question6")} onChange={handleQuestionAChange} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg">
            {errors.question6 && errors.question6.message?.toString()}
            <option value="">-- Choix --</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            </select>
        </div>
        {showQuestion6 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Question 6 bis : Combien de temps ?</h2>
          <p className='text-sm'>Toujours pour les stats.</p>
          <Input type="text" {...register("question6bis")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
          {errors.question6bis && errors.question6bis.message?.toString()}
        </div>
      )}
    </div>
  );
};

export default InputQuestion6;