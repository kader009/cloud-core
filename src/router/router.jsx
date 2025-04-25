import { createBrowserRouter } from 'react-router';
import App from '../App';
import ProductDetail from '../components/ProductDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
]);
