import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/feature/productSlice';
import ProductCard from './components/ProductCard';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();
  const { data: products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="text-center">
      <h1 className='mt-6 text-2xl font-bold'>

      Cloud Core Store
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16 my-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
