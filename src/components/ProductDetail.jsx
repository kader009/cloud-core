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

  console.log(SingleProduct);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
