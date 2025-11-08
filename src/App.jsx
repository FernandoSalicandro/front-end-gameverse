import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from './Layout/GuestLayout.jsx'
import ScrollToTop from './Utils/scrollToTop.jsx'
import Homepage from './Pages/Homepage/Homepage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/:id' element={<DetailsPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
