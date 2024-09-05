'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const SearchPageResultsContainer = () => {
  const searchParams = useSearchParams();
  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');
  return (
    <div className='w-screen bg-primary flex'>
      <div className='w-1/3 bg-accent h-[50vh] text-primary-content'>{arrival}</div>
      <div className='w-2/3 bg-primary h-[50vh] text-primary-content'>{departure}</div>
    </div>
  )
}

export default SearchPageResultsContainer