import { supabase } from '../../../../utils/supabase';

const Request = async (data: any, sliderValue: number, setIsSubmit: (value: boolean) => void) => {
  setIsSubmit(true);
  try {
    const answers = {
      nom: data.nom,
      question1: data.question1,
      question2: data.question2,
      question3: data.question3,
      question4: data.question4,
      question5: data.question5,
      question6: data.question6,
      question6bis: data.question6bis,
      question7: data.question7,
      question8: sliderValue
    };

    await supabase.from('answer').insert(answers).select();
    console.log('Request send !');
  } catch (error: any) {
    console.error('error request :', error.message);
  } finally {
    setIsSubmit(false);
  }
};

export default Request;
