import { Routes,Route,useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import NAVBAR from './components/NAVBAR/Navbar.tsx'
import Footer from './components/FOOTER/Footer.tsx'
import OnlyForLogin from './components/NAVBAR/NavbarOnlyLogin.tsx'
import Signup from './pages/signup.tsx'
import ProtecteRouted from './components/ProtectedRoute'
import MovieDetails from './pages/MovieDetail.tsx'
import List from './pages/List.tsx'
import Watch from './pages/Watch.tsx'
import PublicRoute from './components/PublicRoute.tsx'

function AppRoutes() {

  const location = useLocation();
  const isLoginPage = location.pathname === "/login"||location.pathname==='/signup';
     

  return (
    <>
    
    {isLoginPage ? <OnlyForLogin /> : <NAVBAR />}

    
    <Routes>
      <Route path='/' element={<ProtecteRouted><Home/></ProtecteRouted>}/>
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}/>
      <Route path='/play/:id' element={<ProtecteRouted><Watch/></ProtecteRouted>}/>
      <Route path='movie/:id' element={<ProtecteRouted><MovieDetails/></ProtecteRouted>}/>
      <Route path='/list' element={<ProtecteRouted><List/></ProtecteRouted>}/>
      </Routes>
    
    <Footer/>
    
    </>
  )
}

export default AppRoutes
