'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { Button as ButtonDialogue } from "@/components/ui/button";

const InputPage = () => {
  const [valueTitleQuestion1, setValueTitleQuestion1] = useState('');
  const [valueDescriptionQuestion1, setValueDescriptionQuestion1] = useState('');
  const [valueTitleQuestion2, setValueTitleQuestion2] = useState('');
  const [valueDescriptionQuestion2, setValueDescriptionQuestion2] = useState('');
  const [valueTitleQuestion3, setValueTitleQuestion3] = useState('');
  const [valueDescriptionQuestion3, setValueDescriptionQuestion3] = useState('');
  const [valueTitleQuestion4, setValueTitleQuestion4] = useState('');
  const [valueDescriptionQuestion4, setValueDescriptionQuestion4] = useState('');
  const [valueTitleQuestion5, setValueTitleQuestion5] = useState('');
  const [valueDescriptionQuestion5, setValueDescriptionQuestion5] = useState('');
  const [valueTitleQuestion6, setValueTitleQuestion6] = useState('');
  const [valueDescriptionQuestion6, setValueDescriptionQuestion6] = useState('');
  const [valueTitleQuestion7, setValueTitleQuestion7] = useState('');
  const [valueDescriptionQuestion7, setValueDescriptionQuestion7] = useState('');
  const [valueTitleQuestion8, setValueTitleQuestion8] = useState('');
  const [valueDescriptionQuestion8, setValueDescriptionQuestion8] = useState('');

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  const changeTitleQuestion1 = (e: any) => {
    setValueTitleQuestion1(e.target.value);
  };
  const changeDescriptionQuestion1 = (e: any) => {
    setValueDescriptionQuestion1(e.target.value);
  };
  const changeTitleQuestion2 = (e: any) => {
    setValueTitleQuestion2(e.target.value);
  };
  const changeDescriptionQuestion2 = (e: any) => {
    setValueDescriptionQuestion2(e.target.value);
  };
  const changeTitleQuestion3 = (e: any) => {
    setValueTitleQuestion3(e.target.value);
  };
  const changeDescriptionQuestion3 = (e: any) => {
    setValueDescriptionQuestion3(e.target.value);
  };
  const changeTitleQuestion4 = (e: any) => {
    setValueTitleQuestion4(e.target.value);
  };
  const changeDescriptionQuestion4 = (e: any) => {
    setValueDescriptionQuestion4(e.target.value);
  };
  const changeTitleQuestion5 = (e: any) => {
    setValueTitleQuestion5(e.target.value);
  };
  const changeDescriptionQuestion5 = (e: any) => {
    setValueDescriptionQuestion5(e.target.value);
  };
  const changeTitleQuestion6 = (e: any) => {
    setValueTitleQuestion6(e.target.value);
  };
  const changeDescriptionQuestion6 = (e: any) => {
    setValueDescriptionQuestion6(e.target.value);
  };
  const changeTitleQuestion7 = (e: any) => {
    setValueTitleQuestion7(e.target.value);
  };
  const changeDescriptionQuestion7 = (e: any) => {
    setValueDescriptionQuestion7(e.target.value);
  };
  const changeTitleQuestion8 = (e: any) => {
    setValueTitleQuestion8(e.target.value);
  };
  const changeDescriptionQuestion8 = (e: any) => {
    setValueDescriptionQuestion8(e.target.value);
  };

  const submitQuestion1 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion1', valueTitleQuestion1);
  };
  const submitDescription1 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion1', valueDescriptionQuestion1);
  };
  const submitQuestion2 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion2', valueTitleQuestion2);
  };
  const submitDescription2 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion2', valueDescriptionQuestion2);
  };
  const submitQuestion3 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion3', valueTitleQuestion3);
  };
  const submitDescription3 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion3', valueDescriptionQuestion3);
  };
  const submitQuestion4 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion4', valueTitleQuestion4);
  };
  const submitDescription4 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion4', valueDescriptionQuestion4);
  };
  const submitQuestion5 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion5', valueTitleQuestion5);
  };
  const submitDescription5 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion5', valueDescriptionQuestion5);
  };
  const submitQuestion6 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion6', valueTitleQuestion6);
  };
  const submitDescription6 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion6', valueDescriptionQuestion6);
  };
  const submitQuestion7 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion7', valueTitleQuestion7);
  };
  const submitDescription7 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion7', valueDescriptionQuestion7);
  };
  const submitQuestion8 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userTitleQuestion8', valueTitleQuestion8);
  };
  const submitDescription8 = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userDescriptionQuestion8', valueDescriptionQuestion8);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 mb-10 bg-gray-800 text-gray-200 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-10">
          <Link href="/" className="bg-primary text-gray-800 px-4 py-2 rounded hover:bg-primary">Revenir au quiz</Link>
          <ButtonDialogue onClick={clearLocalStorage} className="bg-primary text-gray-800 px-4 py-2 rounded hover:bg-primary">Réinitialiser les questions</ButtonDialogue>
        </div>
        <h1 className="text-3xl font-bold text-center mb-4 mt-4 underline">Page éditeur</h1>
        <p className='text-sm text-center mb-8 italic'>Les descriptions s'ajoutent uniquement si tu as modifié la question</p>
        <form onSubmit={submitQuestion1}>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Écris ta question 1 ici :</h2>
            <input type="text" value={valueTitleQuestion1} onChange={changeTitleQuestion1} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription1}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion1} onChange={changeDescriptionQuestion1} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg" />
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion2}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 2 ici :</h2>
            <input type="text" value={valueTitleQuestion2} onChange={changeTitleQuestion2} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription2}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion2} onChange={changeDescriptionQuestion2} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion3}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 3 ici :</h2>
            <input type="text" value={valueTitleQuestion3} onChange={changeTitleQuestion3} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription3}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion3} onChange={changeDescriptionQuestion3} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion4}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 4 ici :</h2>
            <input type="text" value={valueTitleQuestion4} onChange={changeTitleQuestion4} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription4}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion4} onChange={changeDescriptionQuestion4} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion5}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 5 ici :</h2>
            <input type="text" value={valueTitleQuestion5} onChange={changeTitleQuestion5} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription5}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion5} onChange={changeDescriptionQuestion5} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion6}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 6 ici :</h2>
            <input type="text" value={valueTitleQuestion6} onChange={changeTitleQuestion6} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription6}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion6} onChange={changeDescriptionQuestion6} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion7}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 7 ici :</h2>
            <input type="text" value={valueTitleQuestion7} onChange={changeTitleQuestion7} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription7}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion7} onChange={changeDescriptionQuestion7} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitQuestion8}>
          <div className='mt-8'>
            <h2 className="text-lg font-semibold">Écris ta question 8 ici :</h2>
            <input type="text" value={valueTitleQuestion8} onChange={changeTitleQuestion8} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
        <form onSubmit={submitDescription8}>
          <div className='mt-2'>
            <h2 className="text-lg font-semibold">Ajoute une description si tu le souhaites :</h2>
            <input type="text" value={valueDescriptionQuestion8} onChange={changeDescriptionQuestion8} className="mt-1 w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"/>
            <button type="submit" className='font-bold'>Modifier</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputPage;
