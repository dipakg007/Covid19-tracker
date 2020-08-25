import React, {useEffect,useState} from 'react';
import './Table.css';
import axios from 'axios';
import Tablehtml from './Tablehtml';
import TextField from '@material-ui/core/TextField';

function DataApi() {

   const url="https://disease.sh/v3/covid-19/countries";
   const [covidData, setcovidData] = useState([]);
   const [search,setSearch] = useState('');


   useEffect(() => {
    async function getData() {
        const res = await axios.get(url);
        const r=res.data;
        setcovidData(r);
    }
    getData();   
   });

    return (
        <div className="dataApi__main">
            <div className="search">
                <h1>Use Mask {search}</h1>
                <TextField type="text" className="search"  placeholder="search..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <Tablehtml covid={covidData} sear={search}/>
        </div>
    )
}

export default DataApi
