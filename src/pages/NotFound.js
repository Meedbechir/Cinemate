import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../assets/images/pagenotfound.png';
import Button from '../components/Button';

const NotFound = () => {

 
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
            <p className='text-6xl text-gray-700 font-bold my-6 dark:text-white'>404, Oups!</p>
            <div className='max-w-lg'>
              <img className='rounded' src={PageNotFoundImage} alt="404 Not Found" />
            </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound