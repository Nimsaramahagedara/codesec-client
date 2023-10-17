import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import authAxios from '../utils/authAxios';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductModal({ open, handleClose, id }) {
    const [item, setItem] = React.useState({});

   

    useEffect(() => {
        const getItem = async () => {
            try {
                const data = await authAxios.get(`/recipe/product/${id}`)
                const obj = data.data[0];
                setItem(obj);
            } catch (error) {
                console.log(error);
            }
        }
        getItem();
    }, [id])
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card style={style} >
                    <CardMedia
                        component="img"
                        width={'50'}
                        image={item.strMealThumb}
                        className='rounded-2xl'
                        alt="Product"
                    />
                    <CardContent className=''>
                        <Typography variant="body2" color="text.secondary">
                            {item.strMeal}
                            {/* <IconButton aria-label="add to favorites" onClick={handleFavClick}>
                                {
                                    added ? <FavoriteIcon color='primary' /> : <FavoriteBorderOutlinedIcon color='primary' />
                                }


                            </IconButton> */}
                        </Typography>

                        <Typography variant="body2" fontSize={12} height={50}>
                            {item.strMeal}
                        </Typography>
                        <Button onClick={ handleClose}>Close</Button>
                    </CardContent>
                </Card>
            </Modal>
            </div>
    );
}
