import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router'

const ProductDetail = () => {
  const { id } = useParams();
  const [SingleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://admin.refabry.com/api/all/product/get/${id}`
        );
        console.log(response.data);
        setSingleProduct(response.data);
      } catch (error) {
        console.error('There was an error fetching the food data!', error); 
      }
    };

    fetchProduct();
  }, [id]);

  console.log(SingleProduct);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail