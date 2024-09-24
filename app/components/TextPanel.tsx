import React from 'react'

const TextPanel = () => {
  return (
    <div className='hero  text-primary-content'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
      src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/flight-hero.jpg?itok=LKyRwKDq"
      className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className='text-6xl font-bold'>Why you should choose us?</h1>
                <p className="py-6 text-xl">
        We are the best site regarding searching flights in Poland and whole Europe <br/>
        By choosing us we guarantee best experience which you 
      </p>
            </div>
        </div>
    </div>
  )
}

export default TextPanel