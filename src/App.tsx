import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes';
import { WatchlistProvider } from './context/WatchlistContext.tsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     
function App() {

  return (
    <>
      
    <BrowserRouter>
    <WatchlistProvider>
   <AppRoutes/>
    </WatchlistProvider>
    </BrowserRouter>
    <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        theme="dark"
        draggable 
        pauseOnHover 
            />
    </>
  )
}

export default App
