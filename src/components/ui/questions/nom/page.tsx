import React from 'react';
import { Input } from "@/components/ui/input";

const InputNom: React.FC<any> = ({ register, errors }) => {
  return (
    <div>
    <h2 className="text-xl font-bold text-primary">Prénom</h2>
    <p className='text-sm'>Si vous souhaitez que le score soit enregistré.</p>
    <Input type="text" {...register("nom")} className="mt-1 w-full bg-gray-200 text-gray-800" />
    {errors.nom && errors.nom.message?.toString()}
  </div>
  );
};

export default InputNom;