import React from 'react';
import { Input } from "@/components/ui/input";

const InputPrenom: React.FC<any> = ({ register }) => {
  return (
    <div>
    <h2 className="text-xl font-bold text-primary">NOM PRENOM *</h2>
    <p className='text-sm'>* sans quoi vos réponses ne seront pas prise en compte.</p>
    <Input type="text" {...register("nom", { required: true, maxLength: 60 })} className="mt-1 w-full" />
  </div>
  );
};

export default InputPrenom;