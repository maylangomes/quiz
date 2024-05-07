import React from 'react';
import { Input } from "@/components/ui/input";

const InputPrenom: React.FC<any> = ({ register }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-cyan-300">Prénom</h2>
      <Input type="text" {...register('prenom', { required: "prenom empty" })} className="mt-1 w-full" />
    </div>
  );
};

export default InputPrenom;
