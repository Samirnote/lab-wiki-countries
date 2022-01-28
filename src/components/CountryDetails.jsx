import React from "react";
import { useParams } from "react-router-dom";


const Countrie = (props) => {
    const params = useParams();
    const myCountrie = props.countries.find((count)=> count.alpha3Code === params.alpha3Code);
    
    return (

        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${myCountrie.alpha2Code.toLowerCase()}.png`} alt="country flag" style={{width: "300px"}}/>
            <h1>{myCountrie.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{myCountrie.capital.official}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        {myCountrie.area.official} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
                            </ul>  
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Countrie;