import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';


const InputQuestion4: React.FC<any> = ({ control }) => {
  return (
    <div className="mt-8">
    <h2 className="text-lg font-semibold">Question 4 : Quels sont les éléments les plus importants pour le shoot au basket ?</h2>
    <p className='text-sm'>Oui c'est une question très relative, mais je suis coach so I don't care.</p>
    <Controller
      control={control}
      name="question4"
      render={({ field }) => (
        <Select
          {...field}
          isMulti={true}
          options={[
            { label: 'Le cassage du poignet' },
            { value: 'Courbe', label: 'La courbe du tir' },
            { value: 'Rotation', label: 'La rotation du ballon' },
            { value: 'Tete', label: 'La balle au-dessus de la tête au tir' },
            { value: 'Coude', label: 'Le coude en direction du panier' },
            { value: 'Appuis', label: 'Les appuis en direction du panier' },
            { value: 'Transfert', label: 'Transfert de force des jambes' }
          ]}
          className="mt-1 w-full text-black"
        />
      )}
    />
  </div>
  );
};

export default InputQuestion4;