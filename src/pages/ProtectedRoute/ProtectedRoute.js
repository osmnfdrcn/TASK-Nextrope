import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { cartItems } = useSelector((store) => store.cart);

  if (!cartItems.length) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;