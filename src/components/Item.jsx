import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Utils/cartSlice';
import { addToWishList } from '../Utils/wishlistSlice';

const Item = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item)=>{
    dispatch(addItemToCart(item))
  }

  const handleAddToWishlist = (item)=>{
    dispatch(addToWishList(item))
  }
  return (
    <div className='group relative border border-gray-400 hover:scale-105 rounded-xl relative shadow-xl p-4'>
      <Link to={`/products/${product.id}`}>
        <div onClick={window.scrollTo(0, 0)} className='aspect-h-1 aspect-w-1w-full h-[60%] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <img src={product.image} alt={product.name} className=' rounded-t-xl h-full w-full object-cover object-center' />
        </div>
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-base text-black-700'>
            <Link to={`/products/${product.id}`}>
              <span aria-hidden="true" className=' inset-0'>{product?.title.split("-")[0]}</span>
            </Link>
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>${product?.price}</p>
      </div>
      <div>
        <p className='text-gray-700'>rating: <span className='bg-green-400 border rounded-lg px-2'>{product.rating.rate} </span></p>
      </div>
         {/* add to cart and add to wishlist  */}
      <div className="flex flex-row text-sm gap-10 mt-2" >
        {/* // add to cart btn */}
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-gradient-to-r from-gray-200 to-gray-500 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
        >
          <span className="">
            Add to cart
          </span>
          <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
        </button>
        {/* add to wishlist  */}
        <button
          onClick={() => handleAddToWishlist(product)}
          className="bg-gradient-to-r from-blue-300 to-blue-600 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
        >
          <span className="">
            Add to wishlist
          </span>
          <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
        </button>
      </div>

    </div>
  )
}

export default Item
