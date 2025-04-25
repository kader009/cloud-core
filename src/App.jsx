import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/feature/productSlice';
import ProductCard from './components/ProductCard'

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="text-center">
      Cloud Core Store
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default App;
