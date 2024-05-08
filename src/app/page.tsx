'use client'

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';
import Select from 'react-select';
//import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button as ButtonDialogue } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {Slider} from "@nextui-org/react";
import InputPrenom from '@/components/ui/request/page';

// function TextFieldError({ error }: { error?: string }) {
//   return error ? (
//     <div
//       style={{
//         color: "red",
//         position: "absolute",
//         top: "-16px",
//         fontSize: "0.8em"
//       }}
//     >
//       {error}
//     </div>
//   ) : null;
// }


const Quiz = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  console.log(errors);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showQuestion6, setShowQuestion6] = useState(false);
  const [sliderValue, setSliderValue] = useState<number | number[] | string >(40);

  const onSubmit = async (data: any) => {
    setIsSubmit(true);
    try {
      const answers = {
        nom: data.nom,
        question1: data.question1,
        question2: data.question2,
        question3: data.Question3,
        question4: data.question4,
        question5: data.question5,
        question6: data.question6,
        question6bis: data.question6bis,
        question7: data.question7,
        question8: sliderValue
      };
      await supabase.from('answer').insert(answers).select();
      console.log('Form submitted successfully!');
    } catch (error: any) {
      console.error('Failed to submit form:', error.message);
    } finally {
      setIsSubmit(false);
    }
  };

  const handleQuestionAChange = (e: any) => {
    setShowQuestion6(e.target.value === 'Oui');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 bg-gray-800 text-gray-200 p-6 rounded-lg">
      <InputPrenom register={register} />
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 1 : Nom du plus grand joueur de basket de l'histoire</h2>
        <p className='text-sm'>Aucun jugement, tu peux citer n'importe lequel (même Westbrook).</p>
        <Input type="text" {...register("question1")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question1 && errors.question1.message?.toString()}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 2 : Quelle est le nombre de secondes accordé pour franchir le milieu de terrain ?</h2>
        <p className='text-sm'>C'est bien d'être tranquille dans la vie, sauf quand t'attaques au basket.</p>
        <Input type="number" {...register("question2")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question2 && errors.question2.message?.toString()}
      </div>
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
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 4 : Quels sont les 3 éléments les plus importants pour le shoot au basket ?</h2>
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
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 5 : Quel est le meilleur sport pour toi ?</h2>
        <p className='text-sm'>Possibilité d'argumenter si c'est le basket.</p>
        <Textarea {...register("question5")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
        {errors.question5 && errors.question5.message?.toString()}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 6 : As-tu déjà fait du basket ?</h2>
        <p className='text-sm'>Le questionnaire étant à but statistique, la question paraît pertinente.</p>
        <select {...register("question6")} onChange={handleQuestionAChange} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg">
        {errors.question6 && errors.question6.message?.toString()}
          <option value="">-- Choix --</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>
      {showQuestion6 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Question 6 bis : Combien de temps ?</h2>
          <p className='text-sm'>Toujours pour les stats.</p>
          <Input type="text" {...register("question6bis")} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
          {errors.question6bis && errors.question6bis.message?.toString()}
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 7 : Quelle affirmation est fausse* ?</h2>
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
        {/* <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="bg-gray-800 text-white px-3 py-2 rounded-lg"
            >
              Make your choice
            </Button>
          </DropdownTrigger>
          <Controller
            control={control}
            name="question7"
            render={({ field }) => (
              <DropdownMenu {...field} aria-label="Static Actions">
                <DropdownItem key="Jordan">Michael Jordan a quitté la NBA pour aller jouer au golf</DropdownItem>
                <DropdownItem key="Westbrook">Westbrook a mis plus de briques à 45° que de 3 points dans sa carrière</DropdownItem>
                <DropdownItem key="Shaq">Shaquille O'Neal subissait volontairement des fautes car il marquait autant de lancers-francs qu'un poussin.</DropdownItem>
                <DropdownItem key="Kobe">Kobe Bryant a fait une passe en 1989</DropdownItem>
              </DropdownMenu>
            )}
          />
        </Dropdown> */}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Question 8 : Selon toi, quel pourcentage de chance a l'équipe de France d'être championne du monde en 2027 ?</h2>
        <p className='text-sm mb-2'>Avis perso : 92%.</p>
        <Slider
          name="question8"
          label="Sélectionne ton pourcentage ci-dessous"
          step={1} 
          maxValue={100} 
          minValue={0} 
          defaultValue={40}
          onChange={(value) => setSliderValue(value)}
        />
      </div>
      <div className="flex justify-end mt-8">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <ButtonDialogue type="submit" variant="outline" className="bg-primary text-gray-800 px-4 py-2 rounded hover:bg-primary">Envoyer les réponses</ButtonDialogue>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Merci !</AlertDialogTitle>
              <AlertDialogDescription>
                Tes réponses ont bien été envoyées avec le nom indiqué. Tu peux répondre au questionnaire autant que tu le souhaites, seul ton dernier envoi sera pris en compte.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Ok</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </form>
  );
};

export default Quiz;
