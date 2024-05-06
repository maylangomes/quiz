'use client'

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';
import Select from 'react-select';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Quiz = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [showQuestion6, setShowQuestion6] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmit(true);
    try {
      const tabAnswers = [];
      for (const key in data) {
        const answer = data[key];
        console.log("answer : ");
        console.log(answer);
        tabAnswers.push(answer);
      }
      await supabase.from('answers').insert([{ values: tabAnswers }]).select();
      console.log('Form submitted successfully!');
    } catch (error: any) {
      console.error('Failed to submit form:', error.message);
    } finally {
      setIsSubmit(false);
    }
  };

  const handleQuestionAChange = (e: any) => {
    const selectedValue = e.target.value;
    setShowQuestion6(selectedValue === 'Oui');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Question 1 : Nom du plus grand joueur de basket de l'histoire</h2>
        <p>Aucun jugement, tu peux citer n'importe quel joueur.</p>
        <input type="text" {...register('question1', { required: "Answer to the question 1 please" })} />
        {errors?.question1 && <p>errors.question1.message</p>}
      </div>

      <div>
        <h2>Question 2 : Quelle est le nombre de secondes accordées pour franchir le milieu de terrain ?</h2>
        <p>C'est bien d'être tranquille dans la vie, sauf quand t'attaques au basket.</p>
        <input type="number" {...register('question2')} />
        {errors?.question2 && <p>errors.question2.message</p>}
      </div>

      <div>
        <h2>Question 3 : Quelle est la hauteur du panier ?</h2>
        <p>Astuce : la taille moyenne d'une pomme est de 12,5cm.</p>
        <label>
          3m <input type="radio" value="3m" {...register('question3')} />
        </label>
        <label>
          3m05 <input type="radio" value="3m05" {...register('question3')} />
        </label>
        <label>
          3m10 <input type="radio" value="3m10" {...register('question3')} />
        </label>
        {errors?.question3 && <p>errors.question3.message</p>}
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
                { value: 'Poignet', label: 'Le cassage du poignet' },
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
        <textarea {...register('question5')} />
        {errors?.question5 && <p>errors.question5.message</p>}
      </div>
      <div>
        <h2>Question 6 : As-tu déjà fait du basket ?</h2>
        <p>Ce questionnaire étant à but statistique, la question paraît pertinente.</p>
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
          <input type="text" {...register('question6bis')} />
          {errors?.question6bis && <p>errors.question5.message</p>}
        </div>
      )}
      <div>
        <h2>Question 7 : Quelle affirmation est vraie ?</h2>
        <p>Relativement* vraie.</p>
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
            <DropdownItem key="Shaq">Shaquille O'Neal subissait volontairement des fautes tellement il tirait mal les lancers-francs.</DropdownItem>
            <DropdownItem key="Kobe">Kobe Bryant a fait une passe en 1989</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <button type='submit'>Envoyer les réponses !</button>
      </div>
    </form>
  );
};

export default Quiz;