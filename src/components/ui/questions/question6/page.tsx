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
            <h2 className="text-lg font-semibold">Question 6 : Est-ce que selon toi le basket est le meilleur sport du monde ?</h2>
            <p className='text-sm'>Bien sûr cette question ne rapporte pas de point et n'a aucune incidence sur le score final.</p>
            <select {...register("question6")} onChange={handleQuestionAChange} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg">
            {errors.question6 && errors.question6.message?.toString()}
            <option value="">-- Choix --</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            </select>
        </div>
        {showQuestion6 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Félicitations tu viens de débloquer une question ! <br></br> Question 6 bis : Qui a été élu meilleur joueur de la Coupe du monde 2014 ? (10 points)</h2>
          <p className='text-sm'>indice : meilleur joueur de l'histoire tout court (venez on débat maintenant)</p>
          <Input type="text" {...register("question6bis")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
          {errors.question6bis && errors.question6bis.message?.toString()}
        </div>
      )}
    </div>
  );
};

export default InputQuestion6;