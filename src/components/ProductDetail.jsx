import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProductById } from '../redux/feature/singleProductSlice';
import Spinner from './Spinner';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.singleProduct);
  console.log(product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading === 'loading') {
    return <p className="text-center">Loading…</p>;
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-center text-2xl font-bold my-4">
            Product Details
          </h1>
          <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex">
              <div className="lg:w-1/2 h-96">
                <img
                  src={`https://admin.refabry.com/storage/product/${product?.image}`}
                  alt={product?.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 capitalize">
                    {product?.name}
                  </h1>
                  <span className="text-[18px]">
                    Discount: {product?.discount_amount}$
                  </span>
                  {product?.category && (
                    <p className="text-gray-600 mt-1">
                      Category: {product?.category.name}
                    </p>
                  )}
                  <p className="text-gray-700 mt-4 whitespace-pre-line">
                    {product?.short_desc}
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-[20px] font-semibold text-blue-500">
                    Price: {product?.price}$
                  </span>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
