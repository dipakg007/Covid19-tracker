import React from 'react';

function Tablehtml({covid,sear}) {

    const filterdata = covid.filter(data1 =>{
        return data1.country.toLowerCase().includes(sear.toLowerCase() )
    })
    return (
        <>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Country</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">Active Cases</th>
                    <th scope="col">Recovered Cases</th>
                    <th scope="col">Total Death</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       filterdata.map((row,index) =>(
                           <tr key={row.country}>
                               <td>{index+1}</td>
                               <td>{row.country}</td>
                                <td>{row.cases}</td>
                                <td>{row.active}</td>
                                <td>{row.recovered}</td>
                                <td>{row.deaths}</td>
                            </tr>
                       ))
                   }
                </tbody>
            </table>
        </div>  
    </>
    );
}

export default Tablehtml;
