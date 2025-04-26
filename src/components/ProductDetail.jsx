import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
  const { id } = useParams();
  const [SingleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://admin.refabry.com/api/all/product/get`
        );

        const allproduct = response.data.data.data;
        const single = allproduct.find((p) => p.id === parseInt(id, 10));

        if (!single) {
          console.warn(`Product with id=${id} not found in list.`);
        }

        setSingleProduct(single);
      } catch (error) {
        console.error('There was an error fetching the food data!', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1 className='text-center text-2xl font-bold my-4'>Product Details</h1>
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex">
          <div className="lg:w-1/2 h-96">
            <img
              src={`https://admin.refabry.com/storage/product/${SingleProduct.image}`}
              alt={SingleProduct.name}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-8 lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 capitalize">
                {SingleProduct.name}
              </h1>
              <span className="text-[18px]">
                Discount: {SingleProduct.discount_amount}$
              </span>
              {SingleProduct.category && (
                <p className="text-gray-600 mt-1">
                  Category: {SingleProduct.category.name}
                </p>
              )}
              <p className="text-gray-700 mt-4 whitespace-pre-line">
                {SingleProduct.short_desc}
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[22px] font-semibold text-blue-500">
                Price: {SingleProduct.price}$
              </span>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
