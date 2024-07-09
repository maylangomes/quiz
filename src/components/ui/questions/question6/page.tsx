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

const InputQuestion6: React.FC<{ control: any, setValue: (name: string, value: any) => void, isCorrect: boolean }> = ({ control, setValue, isCorrect }) => {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold">Question 6 : Quelle affirmation est fausse* ? (20 points)</h2>
      <p className='text-sm mb-2'>* Tout est relatif.</p>
      <br />
      <Controller
        control={control}
        name="question6"
        defaultValue=""
        render={({ field }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ButtonDialogue variant="outline" className={`${isCorrect === false ? 'bg-red-500' : 'bg-gray-200'} text-gray-800 px-6 py-2 rounded-lg`}>Open</ButtonDialogue>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
              <DropdownMenuRadioGroup 
                value={field.value} 
                onValueChange={(value) => {
                  field.onChange(value);
                  setValue("question6", value);
                }}
              >
                <DropdownMenuRadioItem value="Michael">Michael Jordan a quitté la NBA pour aller jouer au baseball</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Westbrook">Westbrook a mis plus de briques à 45° que de 3 points dans sa carrière</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Shaq">Shaquille O'Neal subissait volontairement des fautes car il marquait autant de lancers-francs qu'un U9</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Kobe">Kobe Bryant a fait une passe en 1989</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      />
    </div>
  );
};

export default InputQuestion6;
