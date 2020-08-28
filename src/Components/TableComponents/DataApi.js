import React, {useEffect,useState} from 'react';
import './Table.css';

import ColTable from './ColTable';

function DataApi() {

   const url="https://disease.sh/v3/covid-19/countries";
   const [covidData, setcovidData] = useState([]);
   const [header,setHeader] = useState([]);



    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const headers = data[0] && Object.keys(data[0]);
            setHeader(headers);
            setcovidData(data);
        });
    }, []);

    return (
        <div className="dataApi__main">
            <ColTable covid={covidData} column={header}/>
        </div>
    )
}

export default DataApi; 
