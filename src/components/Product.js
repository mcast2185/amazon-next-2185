'use client'

import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { format } from 'currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = (({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();
  const dispatch = useDispatch()
  const currencyFormatter = format;
  
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    }
    
    // sending the product as an action to the REDUX store... the basketslice
    dispatch(addToBasket(product))
  }

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  });

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic'>{category}</p>
      <Image
        className='mx-auto my-auto'
        src={image}
        alt={`${title} product image`}
        height={200}
        width={200}
        objectFit='contain'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, idx) => (
          <StarIcon key={idx} suppressHydrationWarning={true} color="gold" className='h-5' />
        ))}
      </div>
      <p className=" line-clamp-2 text-xs my-2 ">{description}</p>
      <div className='mb-5'>
        {currencyFormatter(price, { code: 'USD' })}
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <div className='h-10 w-12 flex items-center'>
            <img src="https://iili.io/JEzhVhF.png" alt="Amazon prime image" fill />
          </div>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
})

export default Product