import React from 'react';
import SectionTitel from '../../components/SectionTitel';
import LottieAnimation from '../../assets/lottianiamation';
import { useSelector } from 'react-redux';

function Contact() {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { contact } = portfolioData;

  const {lottieUrl ,_id , ...firstObject} = contact;
  
  

  return (
    <div className='h-[full]'>
      <SectionTitel titel={"Say Hello"} />
      <div className="flex sm:flex-col items-center sm:items-start justify-between">
        <div className="flex flex-col gap-1">
          <pre className='text-tertiary ml-5 text-sm'>
            {JSON.stringify(firstObject, null, 2)}
          </pre>
        </div>
        <div className='w-1/2 sm:items-start '>
        
            <img src={lottieUrl} alt="Contact Image" />
        
        </div>
      </div>
    </div>
  );
}

export default Contact;
