import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';


const InputQuestion4: React.FC<any> = ({ control }) => {
  return (
    <div className="mt-12">
    <h2 className="text-lg font-semibold">Question 4 : Quels sont les 3 éléments les plus importants, dans l'ordre, pour avoir un shoot stable ? (30 points)</h2>
    <p className='text-sm'>Quesion subjective ? Vous pensez ? Moi j'pense pas</p>
    <br />
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
            { value: 'Doigts', label: 'Doigts vers le panier au lâché du ballon' }
          ]}
          className="mt-1 w-full text-black"
        />
      )}
    />
  </div>
  );
};

export default InputQuestion4;