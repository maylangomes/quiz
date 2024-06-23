import React from 'react';
import { Controller } from 'react-hook-form';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
import { Button as ButtonDialogue } from "@/components/ui/button";


const InputQuestion7: React.FC<any> = ({ control }) => {
  return (
    <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 7 : Quelle affirmation est fausse* ? (10 points)</h2>
        <p className='text-sm mb-2'>* Tout est relatif.</p>
        <Controller
        control={control}
        name="question7"
        defaultValue=""
        render={({ field }) => (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ButtonDialogue variant="outline" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg">Open</ButtonDialogue>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
                <DropdownMenuRadioGroup value={field.value} onValueChange={field.onChange}>
                <DropdownMenuRadioItem value="Michael">Michael Jordan a quitté la NBA pour aller jouer au golf</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Westbrook">Westbrook a mis plus de briques à 45° que de 3 points dans sa carrière</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Shaq">Shaquille O'Neal subissait volontairement des fautes car il marquait autant de lancers-francs qu'un poussin</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Kobe">Kobe Bryant a fait une passe en 1989</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        )}
        />
    </div>
  );
};

export default InputQuestion7;