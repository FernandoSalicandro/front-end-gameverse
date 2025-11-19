import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from './Layout/GuestLayout.jsx'
import ScrollToTop from './Utils/scrollToTop.jsx'
import Homepage from './Pages/Homepage/Homepage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import { GamesProvider } from './Context/GlobalContext.jsx';


function App() {
  return (
    <GamesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/:id' element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GamesProvider>
  )
}

export default App
