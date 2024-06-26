'use client'

import "./globals.css";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import SendButton from '@/components/ui/questions/bouton-envoyer/page';
import InputUserQuestion from '@/components/ui/user-questions/user-question/page';


const Quiz = () => {
  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [sliderValue, setSliderValue] = useState<any>(40);
  const [points, setPoints] = useState<any>(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setValue("question5", rating); // Update form value when rating changes
  }, [rating, setValue]);


  const onSubmit = (data: any) => {
    let newPoints = 0;

    if (data.question1.toLowerCase() === "curry" || data.question1.toLowerCase() === "stephen curry") {
      newPoints += 10;
      console.log("question7");
      
      console.log(data.question7bis);
    }

    if (data.question2 === "8") {
      newPoints += 10;
    }

    if (data.question3 === "3m05") {
      newPoints += 10;
    }

    if (typeof data.question4 !== 'undefined') {
      if (
        data.question4[0].value === "Courbe" &&
        data.question4[1].value === "Doigts" &&
        data.question4[2].value === "Coude"
      ) {
        newPoints += 30;
      }
    }

    if (typeof data.question5 !== 'undefined') {
      if (data.question5 === 5) {
        newPoints += 10;
      }
    }

    if (data.question6 !== "") {
      if (data.question6 === "Westbrook") {
        newPoints += 20;     
      }
    }

    if (data.question7bis !== "") {
      if (data.question7bis.toLowerCase() === "kyrie irving") {
        newPoints += 10;
      }
    }
    
    setPoints(newPoints);

    Request(data, sliderValue, setIsSubmit);
  };
  

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

  return (
    <div className="font-quicksand">
      <h1 className="text-4xl font-bold text-center mb-8 mt-6">Basket Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto mt-10 bg-gray-800 text-gray-200 p-8 rounded-xl">
        <InputNom register={register} errors={errors} />
        <div className={userTitleQuestion1 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion1} userDescription={userDescriptionQuestion1} />
        </div>
        <div className={userTitleQuestion1 !== '' ? "hidden" : ""}>
          <InputQuestion1 register={register} errors={errors} />
        </div>
        <div className={userTitleQuestion2 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion2} userDescription={userDescriptionQuestion2} />
        </div>
        <div className={userTitleQuestion2 !== '' ? "hidden" : ""}>
          <InputQuestion2 register={register} errors={errors} />
        </div>
        <div className={userTitleQuestion3 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion3} userDescription={userDescriptionQuestion3} />
        </div>
        <div className={userTitleQuestion3 !== '' ? "hidden" : ""}>
          <InputQuestion3 register={register} errors={errors} />
        </div>
        <div className={userTitleQuestion4 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion4} userDescription={userDescriptionQuestion4} />
        </div>
        <div className={userTitleQuestion4 !== '' ? "hidden" : ""}>
        <InputQuestion4 control={control} />
        </div>
        <div className={userTitleQuestion5 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion5} userDescription={userDescriptionQuestion5} />
        </div>
        <div className={userTitleQuestion5 !== '' ? "hidden" : ""}>
          <InputQuestion5 onRatingChange={setRating} />
        </div>
        <div className={userTitleQuestion6 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion6} userDescription={userDescriptionQuestion6} />
        </div>
        <div className={userTitleQuestion6 !== '' ? "hidden" : ""}>
          <InputQuestion6 control={control} setValue={setValue} />
        </div>
        <div className={userTitleQuestion7 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion7} userDescription={userDescriptionQuestion7} />
        </div>
        <div className={userTitleQuestion7 !== '' ? "hidden" : ""}>
          <InputQuestion7 register={register} errors={errors} />
        </div>
        <div className={userTitleQuestion8 !== '' ? "" : "hidden"}>
          <InputUserQuestion userTitle={userTitleQuestion8} userDescription={userDescriptionQuestion8} />
        </div>
        <div className={userTitleQuestion8 !== '' ? "hidden" : ""}>
          <InputQuestion8 setSliderValue={setSliderValue} />
        </div>
        <div className="flex justify-between items-center mt-8">
          <Link href="/edit-question" className='bg-primary text-gray-800 px-4 py-2 rounded hover:bg-primary"'><h1>Crée tes propres questions !</h1></Link>
          <SendButton points={points} />
        </div>
      </form>
    </div>
  );
};

export default Quiz;
