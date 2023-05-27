import logo from './jpg1.jpg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Booking from './components/Booking';
import Payment from './components/Payment';
import Pay from './components/Pay';
import MyComponent from './components/MyComponent';
// import Payment from './components/Payment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';


function App() {
  return(
    <div className="App">
        <div className="App-body">
          <Container>
            <Navigation />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/reg' element={<Registration />} />
                <Route path='/abo' element={<About />} />
                <Route path='/hom' element={<Home />} />
                <Route path='/con' element={<Contact />} />
                {/* <Route path='/pay' element={<Payment />} /> */}
                <Route path='/boo' element={<Booking />} />
                <Route path='/pay' element={<Payment />} />
                <Route path='/poo' element={<Pay />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
        <div>
      <h1>My App</h1>
      <MyComponent />
    </div>
    </div>
    
  );
}

export default App;
