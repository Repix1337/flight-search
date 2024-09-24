import React from 'react'

const ContactPanel = () => {
  return (
    <div className='hero  text-primary-content'>
        <div className='hero-content flex-col lg:flex-row'>
        <img
      src="https://www.buid.ac.ae/wp-content/uploads/2022/02/contactus.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className='text-6xl font-bold mb-2'>Contact:</h1>
                <h1 className='text-6xl font-extrabold'>+48 123 321 123</h1>
                <h1 className='text-6xl font-extrabold'>Flight-Search@gmail.com</h1>
                
            </div>
        </div>
    </div>
  )
}

export default ContactPanel