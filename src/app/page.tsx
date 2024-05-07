'use client'

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';
import Select from 'react-select';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Button as ButtonDialogue } from "@/components/ui/button"
import FuncSubmit from "./requete/page"

const Quiz = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [showQuestion6, setShowQuestion6] = useState(false);

  useEffect(() => {
    console.log(inputValid);
  },  [inputValid]);

  const onSubmit = async (data: any) => {
    //setInputValid(true);
    setIsSubmit(true);
    try {
      const tabAnswers = [];
      for (const key in data) {
        const answer = data[key];
        // console.log("answer : ");
        // console.log(answer);
        tabAnswers.push(answer);
        //setInputValid(true);
      }
      await supabase.from('answers').insert([{ values: tabAnswers }]).select();
      console.log('Form submitted successfully!');
    } catch (error: any) {
      console.error('Failed to submit form:', error.message);
    } finally {
      setIsSubmit(false);
      //setInputValid(true);
    }
  };

  const testFunc = () => {
    console.log("Le Jahman");
  };

  const handleQuestionAChange = (e: any) => {
    const selectedValue = e.target.value;
    setShowQuestion6(selectedValue === 'Oui');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, testFunc)}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <h2>Prénom :</h2>
        <Input type="text" {...register('prenom', { required: "prenom empty" })} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <h2>Question 1 : Nom du plus grand joueur de basket de l'histoire</h2>
        <p>Aucun jugement, tu peux citer n'importe lequel.</p>
        <Input type="text" {...register('question1')} />
        {errors?.question1 && <p>errors.question1.message</p>}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <h2>Question 2 : Quelle est le nombre de secondes accordé pour franchir le milieu de terrain ?</h2>
        <p>C'est bien d'être tranquille dans la vie, sauf quand t'attaques au basket.</p>
        <Input type="number" {...register('question2')} />
        {errors?.question2 && <p>errors.question2.message</p>}
      </div>

      {/* <div>
        <RadioGroup defaultValue="3m" {...register('question3')}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3m" id="3m" {...register('question3')}/>
            <Label htmlFor="3m">3 mètres</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3m05" id="3m05" {...register('question3')}/>
            <Label htmlFor="3m05">3,05 mètres</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3m10" id="3m10" {...register('question3')}/>
            <Label htmlFor="3m10">3,10 mètres</Label>
          </div>
        </RadioGroup>
        {errors?.question3 && <p>errors.question3.message</p>}
      </div> */}
      <div>
        <h2>Question 3 : Quelle est la hauteur du panier ?</h2>
        <p>Astuce : la taille moyenne d'une pomme est de 12,5cm.</p>
      <Controller
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onChange={(value) => onChange(value)}
          >
            <div className="flex items-center space-x-2">
              <Label>3 mètres</Label>
              <RadioGroupItem value="3m" />
            </div>
            <div className="flex items-center space-x-2">
              <Label>3,05 mètres</Label>
              <RadioGroupItem value="3m05" />
            </div>
            <div className="flex items-center space-x-2">
              <Label>3,10 mètres</Label>
              <RadioGroupItem value="3m10" />
            </div>
          </RadioGroup>
        )}
      />
      </div>
      <div>
        <h2>Question 4 : Quels sont les 3 éléments les plus importants pour le shoot au basket ?</h2>
        <p>Oui c'est une question très relative, mais je suis coach so I don't care.</p>
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
            />
          )}
        />
      </div>
      <div>
        <h2>Question 5 : Quel est le meilleur sport pour toi ?</h2>
        <p>Possibilité d'argumenter si c'est le basket.</p>
        <Textarea {...register('question5')} />
        {errors?.question5 && <p>errors.question5.message</p>}
      </div>
      <div>
        <h2>Question 6 : As-tu déjà fait du basket ?</h2>
        <p>Le questionnaire étant à but statistique, la question paraît pertinente.</p>
        <select {...register('question6')} onChange={handleQuestionAChange}>
          <option value="">Choisir ici</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
        {errors?.question6 && <p>errors.question5.message</p>}
      </div>
      {showQuestion6 && (
        <div>
          <h2>Question 6 bis : Combien de temps ?</h2>
          <p>Toujours pour les stats.</p>
          <Input type="text" {...register('question6bis')} />
          {errors?.question6bis && <p>errors.question5.message</p>}
        </div>
      )}
      <div>
        <h2>Question 7 : Quelle affirmation est fausse ?</h2>
        <p>Relativement* fausse.</p>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              Make your choice
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="Jordan">Michael Jordan a arrêté sa saison NBA pour aller jouer au golf</DropdownItem>
            <DropdownItem key="Westbrook">Westbrook a mis plus de briques à 45° que de 3 points dans sa carrière</DropdownItem>
            <DropdownItem key="Shaq">Shaquille O'Neal subissait volontairement des fautes tellement il ratait ses lancers-francs.</DropdownItem>
            <DropdownItem key="Kobe">Kobe Bryant a fait une passe en 1989</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/* <button type='submit'>Envoyer</button> */}
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {/* <ButtonDialogue type="submit" variant="outline" onClick={() => setInputValid(true)}>Envoyer les réponses</ButtonDialogue> */}
            <ButtonDialogue type="submit" variant="outline">Envoyer les réponses</ButtonDialogue>
            {/* <button type='submit'>Envoyer</button> */}
            </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Merci !</AlertDialogTitle>
                  <AlertDialogDescription>
                    Tes réponses ont bien été envoyées. Tu peux répondre au questionnaire autant que tu le souhaites, seul ton dernier envoi sera pris en compte.
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