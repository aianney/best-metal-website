import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1589315493075-135153be9372?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80'
              text='DESIGN DIFFERENT METAL PROFILES'
              label='Metal Prof'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1564182999211-0992ff88172a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              text='SHEAR AND BREAK METAL UP TO 16 GA'
              label='Shear & Break'
              path='/products'
            />
             <CardItem
              src='https://images.unsplash.com/photo-1600965581129-eef8a214ec9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              text='CUT METAL PLASMA CUTTER'
              label='Cut Metal'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1608126841512-ed53266c1d62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80'
              text='FABRICATE CUSTOM METAL PARTS'
              label='Metal Parts'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
