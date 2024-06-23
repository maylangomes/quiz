import React from 'react';

const InputQuestion3: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 3 : Quelle est la hauteur du panier ? (10 points)</h2>
        <p className='text-sm'>Astuce : la taille moyenne d'une pomme est de 12,5cm.</p>
        <div className="mt-3">
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m" value="3m" {...register("question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m" className="ml-2 text-lg">3 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m05" value="3m05" {...register("question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m05" className="ml-2 text-lg">3,05 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m10" value="3m10" {...register("question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m10" className="ml-2 text-lg">3,10 mètres</label>
        </div>
        </div>
    </div>
  );
};

export default InputQuestion3;