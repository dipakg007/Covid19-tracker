import React, {useEffect,useState} from 'react';
import './Table.css';
import TextField from '@material-ui/core/TextField';
import MultCheck from './MultipleSelect';
import Tablehtml from './Tablehtml';
import ColTable from './ColTable'

function DataApi() {

   const url="https://disease.sh/v3/covid-19/countries";
   const [covidData, setcovidData] = useState([]);
   const [search,setSearch] = useState('');
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
            <div className="search">
                <TextField type="text" className="search"  placeholder="search..." value={search} onChange={e => setSearch(e.target.value)} />
                <MultCheck column={header}/>
            </div>
            {/* <Tablehtml covid={covidData} sear={search}/>   */}
            <ColTable covid={covidData} sear={search}/>
        </div>
    )
}

export default DataApi
