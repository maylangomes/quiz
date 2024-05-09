import React from 'react';

const InputQuestion3: React.FC<any> = ({ register, errors }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 3 : Quelle est la hauteur du panier ?</h2>
        <p className='text-sm'>Astuce : la taille moyenne d'une pomme est de 12,5cm.</p>
        <div className="mt-3">
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m" value="3m" {...register("Question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m" className="ml-2 text-lg">3 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m05" value="3m05" {...register("Question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m05" className="ml-2 text-lg">3,05 mètres</label>
        </div>
        <div className="flex items-center space-x-2">
            <input type="radio" id="3m10" value="3m10" {...register("Question3")} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            {errors.question3 && errors.question3.message?.toString()}
            <label htmlFor="3m10" className="ml-2 text-lg">3,10 mètres</label>
        </div>
        </div>
        {/* <Controller
        control={control}
        name="hauteurPanier"
        defaultValue="3m" // Valeur par défaut
        render={({ field }) => (
            <RadioGroup
            value={field.value}
            onChange={field.onChange}
            className="mt-3"
            >
            <div className="flex items-center space-x-2">
                <Label htmlFor='3m' className='text-lg'>3 mètres</Label>
                <RadioGroupItem value="3m" id='3m' />
            </div>
            <div className="flex items-center space-x-2">
                <Label htmlFor='3m05' className='text-lg'>3,05 mètres</Label>
                <RadioGroupItem value="3m05" id='3m05' />
            </div>
            <div className="flex items-center space-x-2">
                <Label htmlFor='3m10' className='text-lg'>3,10 mètres</Label>
                <RadioGroupItem value="3m10" id='3m10'/>
            </div>
            </RadioGroup>
        )}
        /> */}
    </div>
  );
};

export default InputQuestion3;