'use client'

import React, { useState } from 'react';
import Link from "next/link";

const InputPage = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userInput', value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
        <Link href="/">Revenir au quiz</Link>
      </form>
    </div>
  );
};

export default InputPage;
