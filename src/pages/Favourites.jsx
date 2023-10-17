import React, { useEffect, useState } from 'react'
import RecipeReviewCard from '../components/Card'
import axios, { all } from 'axios';
import authAxios from '../utils/authAxios';

const Favourites = () => {
  const [allItems, setItems] = useState([]);

  const getItems = async() =>{
    try {
      const result = await authAxios.get('/favourite');
      setItems(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getItems();

  },[])
  

  return (
    <div className='flex justify-between flex-wrap mt-5'>
      {
        allItems.map((el)=>(
          <RecipeReviewCard prod={el} key={el}/>
        ))
      }
        
    </div>
  )
}

export default Favourites