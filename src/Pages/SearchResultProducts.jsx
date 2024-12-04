import React from "react";
import { useLocation } from "react-router-dom";
import image from '../assets/electronics.jpeg'
import UseAllProducts from "../Utils/UseAllProducts";
import Item from "../components/Item";

const SearchResultProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query").toLocaleLowerCase();

  let all_product = UseAllProducts();
  // searchQuery = searchQuery.toLocaleLowerCase()
  const searchProducts = all_product.filter((product) => product.title.toLowerCase().includes(searchQuery))
  console.log(searchProducts)

  return (
    <div className="container mx-auto mt-10 p-4">
      {searchProducts.length == 0 ? <p className="m-5 p-5  text-4xl text-center w-[full] h-1/2">no result found for
        <span className="text-red-600">{searchQuery}</span> </p>

        :
        <div className='md:mt-3 mt-5 max-w-7xl mx-auto'>

          <div className='mx-auto max-w-2xl px-4 py-1 sm:pt-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start'>Top result of <span className="text-red-600">{searchQuery}</span> </h2>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {
                searchProducts.map((product) => {
                  return <Item key={product.id} product={product} />
                })
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SearchResultProducts;
