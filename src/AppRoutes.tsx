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
function AppRoutes() {

  const location = useLocation();
  const isLoginPage = location.pathname === "/login"||location.pathname==='/signup';

  return (
    <>
    
    {isLoginPage ? <OnlyForLogin /> : <NAVBAR />}

    
    <Routes>
      <Route path='/' element={<ProtecteRouted><Home/></ProtecteRouted>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='movie/:id' element={<MovieDetails/>}/>
      <Route path='/list' element={<List/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default AppRoutes
