import React from 'react';
import './Error.css';
import error from '../../assets/katie-torn-error.jpeg';

const Error = () => {
  return (
    <section className='error'>
      <img src={ error } data-cy='error-image' alt="Error message" />
      <h2>Something Went Wrong! Please Go Home!</h2>
    </section>
  );
};

export default Error;