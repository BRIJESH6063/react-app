import React, { useEffect, useState } from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Statewise = () => {
  const [data, setData] = useState([]) ;

  const getCovidData = async () => {
    const response = await fetch("https://data.covid19india.org/data.json") ;
    const actualData = await response.json() ;
    console.log(actualData.statewise) ;
    setData(actualData.statewise) ;
  }

  useEffect(() => {
    getCovidData() ;
  }, []) ;
  return (
    <>
    <div>
      <h1>INDIA COVID-19 DASHBOARD</h1>
      <div className='container-fluid mt-5'>
        <div className="main-heading">
          <h1><span>INDIA</span> Covid-19 Dashboard</h1>
        </div>
      </div>
    </div>

    {
      data.map((curElement, index) => {
          return (
            <tr key={index}>
              <th>{curElement.state}</th>
              <th>{curElement.confirmed}</th>
              <th>{curElement.deadth}</th>
              <th>{curElement.active}</th>
              <th>{curElement.recovered}</th>
              <th>{curElement.lastUpdatedTime}</th>
            </tr>
          )
      })
    }
      
    </>
  )
}

export default Statewise ;
