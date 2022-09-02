import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import {
  Home,
  Cart,
  BookDetail,
  Order,
  ProtectedRoute
} from '../pages'

import { Navbar } from '../components';

const AppRoutes = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/book/:id' element={<BookDetail />} />
        <Route
          path='/order'
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<  Home />} />
      </Routes>

    </Router>
  )
}

export default AppRoutes