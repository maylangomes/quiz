import { supabase } from '../../../utils/supabase';

const onSubmit = async (data: any) => {
    try {
      const tabAnswers = [];
      for (const key in data) {
        const answer = data[key];
        // console.log("answer : ");
        // console.log(answer);
        tabAnswers.push(answer);
      }
      await supabase.from('answers').insert([{ values: tabAnswers }]).select();
      console.log('Form submitted successfully!');
    } catch (error: any) {
      console.error('Failed to submit form:', error.message);
    }
  };

export default onSubmit;