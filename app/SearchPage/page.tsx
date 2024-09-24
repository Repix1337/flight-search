import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ResultsContainer from '../components/ResultsContainer'

const SearchPage = () => {
  return (
    <div className=''>
        <Navbar/>
        <Main/>
        <ResultsContainer/>
        <Footer/>
    </div>
  )
}

export default SearchPage