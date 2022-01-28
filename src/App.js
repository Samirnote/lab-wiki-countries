import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import  List from "./components/CountriesList";
import data from "./countries.json";
import './App.css';
import  Countrie from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className="container">
        <div className="row">
        <List countries={data} />
        <Routes>
          
					  <Route path="/:id" element={<Countrie countries={data} />} />
		      
        </Routes> 
        </div>
      </div>
    </div>
  );
}

export default App;
