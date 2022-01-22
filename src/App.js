
import './App.css';
import React, { Fragment, } from 'react'
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage';
import FooterSide from './components/footer/Footer';
import Details from './components/details/Details';
import TvDetails from './components/details/TvDetails';
import About from './components/About';

function App() {
  return (



    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>



           
            <Route exact path='/details/movie/:id' element={<Details />} />
            <Route exact path='/details/tv/:id' element={<TvDetails />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<MainPage />} />
          </Routes >
    
          <FooterSide />
        </Fragment>
      </Router>
   
    </div>

  );
}


export default App;
