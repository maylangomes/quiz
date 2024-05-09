import React from 'react';
import { Input } from "@/components/ui/input";

const InputNom: React.FC<any> = ({ register, errors }) => {
  return (
    <div>
    <h2 className="text-xl font-bold text-primary">NOM PRENOM *</h2>
    <p className='text-sm'>* sans quoi vos réponses ne seront pas prises en compte.</p>
    <Input type="text" {...register("nom", { required: true, maxLength: 60 })} className="mt-1 w-full bg-gray-200 text-gray-800" />
    {errors.nom && errors.nom.message?.toString()}
  </div>
  );
};

export default InputNom;