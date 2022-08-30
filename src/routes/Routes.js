import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Home,
  Cart,
  Book
} from '../pages'

import { Navbar } from '../components';

const AppRoutes = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/book/:id' element={<Book />} />


        <Route path='*' element={<  Home />} />
      </Routes>

      <ToastContainer autoClose={3000} position='top-left' theme="colored" pauseOnFocusLoss={false} closeOnClick pauseOnHover={false} />
    </Router>
  )
}

export default AppRoutes