import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import product from '../assets/product.jpg'
import { Button } from '@mui/material';
export default function RecipeReviewCard({prod, name, onClick, handleView}) {

    const [added , setAdded] = React.useState();

    const handleFavClick = ()=>{
        onClick(prod.idMeal);
        setAdded(true);
    }

    return (
        <Card onClick={()=>handleView(prod.idMeal)} sx={{maxWidth:'18%'}}>
            <CardMedia
                component="img"
                width={'50'}
                image={prod.strMealThumb}
                className='rounded-2xl'
                alt="Product"
            />
            <CardContent className=''>
                <Typography variant="body2" color="text.secondary">
                    {name}
                    <IconButton aria-label="add to favorites" onClick={handleFavClick}>
                        {
                            added ? <FavoriteIcon color='primary'/> : <FavoriteBorderOutlinedIcon color='primary'/>
                        }
                        
                        
                    </IconButton>
                </Typography>

                <Typography variant="body2" fontSize={12} height={50}>
                   {prod.strMeal}
                </Typography>
            </CardContent>
        </Card>
    );
}
