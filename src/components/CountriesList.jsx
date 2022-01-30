import React from "react";
import { Link, Outlet } from "react-router-dom";

//import  Countrie from "./components/CountryDetails";


const List = ({countries}) => {
    return(
        
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}} >
            
            <div className="list-group"> 
            
                {countries.map((countrie) => {
                    const id = countrie.alpha3Code.toLowerCase();
                    return (
        
                    <Link className="list-group-item list-group-item-action" to={id} key={countrie.alpha3Code}>
                    <img src= {`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}/> 
                    <p>{countrie.name.official}</p>
                    </Link>
              
                    )
                })}
               
            </div>
        </div>
    )
}

export default List;