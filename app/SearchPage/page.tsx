import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import SearchPageResultsContainer from '../components/SearchPageResultsContainer'

const SearchPage = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <SearchPageResultsContainer/>
        <Footer/>
    </div>
  )
}

export default SearchPage