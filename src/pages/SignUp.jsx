import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import authAxios from '../utils/authAxios';

const SignUp = () => {

    const [error , setError] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const result = await authAxios.post('/register', {
                email: data.get('email'),
                password: data.get('password'),
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                phoneNumber: data.get('phoneNumber')
            })
            if(result){
                navigate('/');
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
                    backgroundColor: 'white',
                    padding: '60px 30px'
                }}
            >
                <Box>
                    <img src={logo} className='w-full h-full object-contain' alt='logo'/>
                </Box>
                <Box sx={{ textAlign: 'left', width: '100%' }}>
                    <Typography component="h1" variant="h6" >
                        Register
                    </Typography>
                </Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="mobile-number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassoword"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, color: 'white' }}
                    >
                        Sign Up
                    </Button>
                    <Box className='text-center'>
                    {
                        error && <Typography variant="subtitle1" color={'primary'}>{error}</Typography>
                    }
                    </Box>
                    
                    <Box sx={{ fontSize: '10px',width:'100%', textAlign:'center',mt:4}}>
                        <p><span className='text-black'>Already have an account?</span><Link href="/" variant="body2" sx={{fontSize:'inherit'}}>Login</Link></p>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
export default SignUp;