const ProductCard = () => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <img src="" alt="" className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">name</h2>
      <p className="text-gray-600 mb-2">price</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">view product</button>
    </div>
  </div>;
};

export default ProductCard;
