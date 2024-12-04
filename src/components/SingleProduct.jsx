import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'
import NewCollection from './NewCollection'
import UseAllProducts from '../Utils/UseAllProducts'
import TopCategory from './TopCategory'
import Carousel from './Carousel'

const SingleProduct = () => {
    // const {all_product} = useContext(Shopcontext)
    // let all_product = UseAllProducts();

    const [allProducts , setAllProducts] = useState([]);
    const {productId} = useParams()

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData =async ()=>{
      const data = await fetch("https://fakestoreapi.com/products")
      const json = await data.json();

      setAllProducts(json);
    }


    const product = allProducts.find((e) => e.id === Number(productId))

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    
     if(allProducts.length == 0) return ;
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product} />
      {/* <NewCollection/> */}
      <Carousel  product={product}/>
      <TopCategory/>
    </div>
  )
}

export default SingleProduct
