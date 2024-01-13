import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './React/Header'
import Section from './React/Section'
import Footer from './React/Footer'
import AppleSection from './React/AppleSection'
import FilterPagination from './React/FilterPagination'
import FAQ from './React/FAQ'


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/apple" element={<AppleSection />} />
          <Route path="/brend" element={<FilterPagination />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
