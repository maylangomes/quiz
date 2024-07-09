import React from 'react';

const InputQuestion3: React.FC<any> = ({ register, errors, isCorrect }) => {
  return (
    <div className="mt-12">
        <h2 className="text-lg font-semibold">Question 3 : Quelle est la hauteur du panier ? (10 points)</h2>
        <p className='text-sm'>Astuce : la taille moyenne d'une pomme est de 12,5cm.</p>
        <div className="mt-3">
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m" value="3m" {...register("question3")} />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m" className={`ml-2 text-lg ${isCorrect === false ? 'text-red-500' : 'text-white'}`}>3 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m05" value="3m05" {...register("question3")} />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m05" className={`ml-2 text-lg ${isCorrect === false ? 'text-red-500' : 'text-white'}`}>3,05 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m10" value="3m10" {...register("question3")} />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m10" className={`ml-2 text-lg ${isCorrect === false ? 'text-red-500' : 'text-white'}`}>3,10 mètres</label>
        </div>
        </div>
    </div>
  );
};

export default InputQuestion3;