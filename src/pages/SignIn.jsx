import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Cookies from 'js-cookie'
import authAxios from '../utils/authAxios';

export default function SignIn() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit =async (event) => {
        event.preventDefault();
        try {
        const data = new FormData(event.currentTarget);
       
            const result = await authAxios.post('/login', {
                email: data.get('email'),
                password: data.get('password'),
            })
            Cookies.set('token', result.data.token,{expires:1})
            
            if(result){
                navigate('/home');
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '20px',
                    width: 'fit-content',
                    backgroundColor: 'white',
                    padding: '70px 40px'
                }}
            >
                <Box>
                    <img src={logo} className='w-full h-full object-contain' alt='logo'/>
                </Box>
                <Typography component="h1" variant="h5" sx={{ width: '100%', textAlign: 'left' }}>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1, color: 'white' }}
                    >
                        Sign In
                    </Button>
                    <Box className='text-center'>
                        {
                            error && <Typography variant="subtitle1" color={'primary'}>{error}</Typography>
                        }
                    
                    </Box>

                    <Box sx={{ fontSize: '10px',width:'100%', textAlign:'center',mt:4}}>
                        <p><span className='text-black'>Don't have an account?</span><Link href="/register" variant="body2" sx={{fontSize:'inherit'}}> Create an account</Link></p>
                    </Box>


                </Box>
            </Box>
            </Container>
    );
}