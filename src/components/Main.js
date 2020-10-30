import React from 'react';
import photo from '../images/main.JPG';

export default function Main() {
  return (
    <section className='main'>
      <div className='main__info'>
        <h1 className='main__name'>
          Marina <br />
          Pisareva
        </h1>
        <p className='main__about'>
          Frontend developer
          <br />
          Russia, Rostov-on-Don{' '}
        </p>
      </div>
      <img src={photo} className='main__photo' />
    </section>
  );
}
