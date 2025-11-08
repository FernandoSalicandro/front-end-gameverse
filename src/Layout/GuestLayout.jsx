import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer.jsx'

const GuestLayout = () => {
  return (
    
    <>
    <Outlet />
    <Footer />
    </>
  )
}

export default GuestLayout