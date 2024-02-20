import Image from 'next/image'
import React from 'react'
import { StarIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { CurrencyFormatter } from './CurrencyFormatter';

const CheckoutProduct = ({ 
  id, 
  title, 
  price, 
  rating, 
  description, 
  category, 
  image, 
  hasPrime }) => {
  const dispatch = useDispatch();
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
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //remove item from redux
    dispatch(removeFromBasket({id}));
  }

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />


      {/* middle */}
      <div className='col-span-3 mx-5'>
        <p>
          {title}
        </p>
        <div className='flex'>
          {Array(rating).fill().map((_, idx) => (
            <StarIcon key={idx} color="gold" className='h-5' />
          ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        {CurrencyFormatter(price, {code: 'USD' })}

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img 
              loading='lazy'
              className='w-12'
              src="https://iili.io/JEzhVhF.png"
              alt="Amazon Prime logo"
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='button'>Add to Basket</button>
        <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;