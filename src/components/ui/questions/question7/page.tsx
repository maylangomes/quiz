import React from 'react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion7: React.FC<any> = ({ register, errors, isCorrect }) => {
    const [showQuestion7, setShowQuestion7] = useState(false);

    const handleQuestionAChange = (e: any) => {
        setShowQuestion7(e.target.value === 'Oui');
      };

  return (
    <div>
        <div className="mt-12">
            <h2 className="text-lg font-semibold">Question 7 : Est-ce que selon toi le basket est le meilleur sport du monde ?</h2>
            <p className='text-sm'>Bien sûr cette question ne rapporte pas de point et n'a aucune incidence sur le score final.</p>
            <br />
            <select {...register("question7")} onChange={handleQuestionAChange} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg">
            {errors.question7 && errors.question7.message?.toString()}
            <option value="">-- Choix --</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            </select>
        </div>
        {showQuestion7 && (
        <div className="mt-12">
          <h2 className="text-lg font-semibold">
            T'as bien raison <br /> (allez petite question bonus)
            <br></br><br />
            Question 7 bis : Qui a été élu meilleur joueur de la Coupe du monde 2014 ? (10 points)
          </h2>
          <p className='text-sm'>Indice : meilleur joueur de l'histoire tout court, venez on débat maintenant</p>
          <br />
          <Input type="text" {...register("question7bis")} className={`mt-1 w-full ${isCorrect === false ? 'bg-red-500' : 'bg-gray-200'} text-gray-800 px-3 py-2 rounded-lg`} />
          {errors.question7bis && errors.question7bis.message?.toString()}
        </div>
      )}
    </div>
  );
};

export default InputQuestion7;