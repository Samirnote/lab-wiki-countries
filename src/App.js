import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import  List from "./components/CountriesList";
import Data from "./countries.json";
import './App.css';
import  Countrie from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className="container">
        <div className="row">
        <List countries={Data} />
        <Routes>
          
					  <Route path='/:alpha3Code' element={<Countrie countries={Data} />} />
		      
        </Routes> 
        </div>
      </div>
    </div>
  );
}

export default App;
