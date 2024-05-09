'use client'

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import {Slider} from "@nextui-org/react";
import InputNom from '@/components/ui/questions/nom/page';
import Link from "next/link";
import Request from "@/components/ui/request/page";
import InputQuestion1 from '@/components/ui/questions/question1/page';
import InputQuestion2 from '@/components/ui/questions/question2/page';
import InputQuestion3 from '@/components/ui/questions/question3/page';
import InputQuestion4 from '@/components/ui/questions/question4/page';
import InputQuestion5 from '@/components/ui/questions/question5/page';
import InputQuestion6 from '@/components/ui/questions/question6/page';
import InputQuestion7 from '@/components/ui/questions/question7/page';
import InputQuestion8 from '@/components/ui/questions/question8/page';


const Quiz = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  console.log(errors);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showQuestion6, setShowQuestion6] = useState(false);
  const [sliderValue, setSliderValue] = useState<any>(40);

  // useState pour le mode éditeur
  const [userTitleQuestion1, setUserTitleQuestion1] = useState('');
  const [userDescriptionQuestion1, setUserDescriptionQuestion1] = useState('');
  const [userTitleQuestion2, setUserTitleQuestion2] = useState('');
  const [userDescriptionQuestion2, setUserDescriptionQuestion2] = useState('');
  const [userTitleQuestion3, setUserTitleQuestion3] = useState('');
  const [userDescriptionQuestion3, setUserDescriptionQuestion3] = useState('');
  const [userTitleQuestion4, setUserTitleQuestion4] = useState('');
  const [userDescriptionQuestion4, setUserDescriptionQuestion4] = useState('');
  const [userTitleQuestion5, setUserTitleQuestion5] = useState('');
  const [userDescriptionQuestion5, setUserDescriptionQuestion5] = useState('');
  const [userTitleQuestion6, setUserTitleQuestion6] = useState('');
  const [userDescriptionQuestion6, setUserDescriptionQuestion6] = useState('');
  const [userTitleQuestion7, setUserTitleQuestion7] = useState('');
  const [userDescriptionQuestion7, setUserDescriptionQuestion7] = useState('');
  const [userTitleQuestion8, setUserTitleQuestion8] = useState('');
  const [userDescriptionQuestion8, setUserDescriptionQuestion8] = useState('');

  // (sorry j'ai pas réussi à faire de boucle)
  useEffect(() => {
    const titleQuestion1 = localStorage.getItem('userTitleQuestion1');
    if (titleQuestion1) {
      setUserTitleQuestion1(titleQuestion1);
    }
    const descriptionQuestion1 = localStorage.getItem('userDescriptionQuestion1');
    if (descriptionQuestion1) {
      setUserDescriptionQuestion1(descriptionQuestion1);
    }
    const titleQuestion2 = localStorage.getItem('userTitleQuestion2');
    if (titleQuestion2) {
      setUserTitleQuestion2(titleQuestion2);
    }
    const descriptionQuestion2 = localStorage.getItem('userDescriptionQuestion2');
    if (descriptionQuestion2) {
      setUserDescriptionQuestion2(descriptionQuestion2);
    }
    const titleQuestion3 = localStorage.getItem('userTitleQuestion3');
    if (titleQuestion3) {
      setUserTitleQuestion3(titleQuestion3);
    }
    const descriptionQuestion3 = localStorage.getItem('userDescriptionQuestion3');
    if (descriptionQuestion3) {
      setUserDescriptionQuestion3(descriptionQuestion3);
    }
    const titleQuestion4 = localStorage.getItem('userTitleQuestion4');
    if (titleQuestion4) {
      setUserTitleQuestion4(titleQuestion4);
    }
    const descriptionQuestion4 = localStorage.getItem('userDescriptionQuestion4');
    if (descriptionQuestion4) {
      setUserDescriptionQuestion4(descriptionQuestion4);
    }
    const titleQuestion5 = localStorage.getItem('userTitleQuestion5');
    if (titleQuestion5) {
      setUserTitleQuestion5(titleQuestion5);
    }
    const descriptionQuestion5 = localStorage.getItem('userDescriptionQuestion5');
    if (descriptionQuestion5) {
      setUserDescriptionQuestion5(descriptionQuestion5);
    }
    const titleQuestion6 = localStorage.getItem('userTitleQuestion6');
    if (titleQuestion6) {
      setUserTitleQuestion6(titleQuestion6);
    }
    const descriptionQuestion6 = localStorage.getItem('userDescriptionQuestion6');
    if (descriptionQuestion6) {
      setUserDescriptionQuestion6(descriptionQuestion6);
    }
    const titleQuestion7 = localStorage.getItem('userTitleQuestion7');
    if (titleQuestion7) {
      setUserTitleQuestion7(titleQuestion7);
    }
    const descriptionQuestion7 = localStorage.getItem('userDescriptionQuestion7');
    if (descriptionQuestion7) {
      setUserDescriptionQuestion7(descriptionQuestion7);
    }
    const titleQuestion8 = localStorage.getItem('userTitleQuestion8');
    if (titleQuestion8) {
      setUserTitleQuestion8(titleQuestion8);
    }
    const descriptionQuestion8 = localStorage.getItem('userDescriptionQuestion8');
    if (descriptionQuestion8) {
      setUserDescriptionQuestion8(descriptionQuestion8);
    }
  }, []);

  const onSubmit = (data: any) => {
    Request(data, sliderValue, setIsSubmit);
  };

  const handleQuestionAChange = (e: any) => {
    setShowQuestion6(e.target.value === 'Oui');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 bg-gray-800 text-gray-200 p-6 rounded-lg">
      <InputNom register={register} errors={errors} />
      <Link href="/edit-question">Page éditeur</Link>
      <div className={userTitleQuestion1 !== '' ? "" : "hidden"}>
        <h2>User Title: {userTitleQuestion1}</h2>
        <p>User Description : {userDescriptionQuestion1}</p>
      </div>
      <div className={userTitleQuestion1 !== '' ? "hidden" : ""}>
        <InputQuestion1 register={register} errors={errors} />
      </div>
      <div className={userTitleQuestion2 !== '' ? "" : "hidden"}>
        <h2>User Title: {userTitleQuestion2}</h2>
        <p>User Description : {userDescriptionQuestion2}</p>
      </div>
      <div className={userTitleQuestion2 !== '' ? "hidden" : ""}>
        <InputQuestion2 register={register} errors={errors} />
      </div>
      <div>
        <InputQuestion3 register={register} errors={errors} />
      </div>
      <div>
      <InputQuestion4 control={control} />
      </div>
      <div>
        <InputQuestion5 register={register} errors={errors} />
      </div>
      <div>
        <InputQuestion6 register={register} errors={errors} />
      </div>
      <div>
        <InputQuestion7 control={control} />
      </div>
      <div>
        <InputQuestion8 setSliderValue={setSliderValue} />
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
