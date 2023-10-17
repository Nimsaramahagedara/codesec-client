import { Button } from '@mui/material'
import React, { useState } from 'react'

const CategoryBtn = ({ label, onClick }) => {
    const [variant, setVariant] = useState('outlined')

    const handleClick = ()=>{
        if(variant === 'contained'){
            setVariant('outlined')
        }else{
            setVariant('contained')
        }
        onClick(label);
        
    }
    return (
        <Button variant={variant} color='primary' sx={{ borderRadius: '50px', ml: 2 }} size='large' onClick={handleClick}>{label}</Button>
    )

}
export default CategoryBtn