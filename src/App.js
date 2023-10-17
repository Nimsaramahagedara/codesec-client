import './App.css';
import SignIn from './pages/SignIn';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import SignUp from './pages/SignUp';
import Dashboard from './layout/Dashboard';
import AppBarComponent from './components/AppBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {

  // TODO remove, this demo shouldn't need to reset the theme.

  const defaultTheme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 10,
      }
    },
    palette: {
      primary: {
        main: "#fe5e7f" // This is an pink looking color
      },
      secondary: {
        main: "#fffff" //Another orange-ish color
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      {/* <AppBarComponent/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/register' element={<SignUp />}></Route>
            <Route path='/home' element={<Dashboard />}>
              <Route path='' element={<Home/>}></Route>
              <Route path='favorite' element={<Favourites/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>


    </div>
  );
}

export default App;
