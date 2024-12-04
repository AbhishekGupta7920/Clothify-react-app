import React, { useEffect, useState } from 'react'

const UseAllProducts = () => {
    const [allProducts , setAllProducts] = useState([]);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData =async ()=>{
      const data = await fetch("https://fakestoreapi.com/products")
      const json = await data.json();

      setAllProducts(json);
      return json;  
    }
    
    return allProducts;
}

export default UseAllProducts
