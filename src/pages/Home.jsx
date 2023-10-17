import React, { useEffect, useState } from 'react'
import CategoryBtn from '../components/CategoryBtn'
import RecipeReviewCard from '../components/Card'
import authAxios from '../utils/authAxios'
import ProductModal from '../components/ProductModal'

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [currentCat, setCurrentCat] = useState('Beef');
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [viewItem, setViewItem] = useState('1');

    //SET THE SELECTED CATEGORY
    const handleClick = (label) => {
        setCurrentCat(label);
    }

    //GET ALL THE CATEGORIES AVAILABLE
    const getCategories = async () => {
        const result = await authAxios.get(`/recipe/`)
        setCategories(result.data.categories);

    }

    //GET PRODUCTS BELONGS TO SELECTED CATEGORY
    const getProducts = async () => {
        const result = await authAxios.get(`/recipe/${currentCat}`)
        setProducts(result.data);
        // console.log(result.data.meals);
    }

    const addToFavorite = async (id) => {
        try {
            const result = await authAxios.put(`/add/${id}`)
            if(result){
                alert('Added to fav');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    const handleView = (id) => {
        setViewItem(id);
        setIsOpen(true);
    }
    const handleCancel = () => {
        setViewItem('1')
        setIsOpen(false);
    }

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        getProducts();
    }, [currentCat])



    return (
        <>
            <ProductModal open={isOpen} handleClose={handleCancel} id={viewItem}/>
            <div className='py-5'>
                <div className='mt-0'>
                    {
                        categories.map((cat) => (
                            //  <Button variant={variant} color='primary' sx={{ borderRadius: '50px', ml: 2 }} size='large' onClick={handleCatChange}>{cat}</Button>
                            <CategoryBtn label={cat.strCategory} key={cat.idCategory} onClick={handleClick} />
                        ))
                    }
                </div>
                <div className='mt-5 flex flex-wrap justify-between gap-y-4'>
                    {
                        products.map((prod, key) =>
                        (
                            <RecipeReviewCard name={currentCat} prod={prod} key={key} onClick={addToFavorite} handleView={handleView} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Home