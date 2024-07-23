import React from 'react';
import Cards from './components/Cards';

// SeriesData -- array of object of data.
// cant be const 
let SeriesData = [
  {

  }, 
  {

  }, 
  {

  }
]

/*

// callback functiion of map function 
function netflix_card(val) {
  return (
    <Cards
      imgsrc={val.image}
      title={val.title}
      series_name={val.series}
      link={val.link}
    />
  )
}


const FavSeries = () => {
  const favSeries = "netflix" ;
  if(favSeries == 'netflix'){
    return (
      <Cards
        imgsrc={SeriesData[0].image}
        title={SeriesData[0].title}
        series_name={SeriesData[0].series}
        link={SeriesData[0].link}
      />  
    )
  } else {
    return (
      <Cards
        imgsrc={SeriesData[3].image}
        title={SeriesData[3].title}
        series_name={SeriesData[3].series}
        link={SeriesData[3].link}
      />  
    )
  }
  
}

TRY CONDITIONAL || TERNARY OPERATOR 
cond ? true : false 

*/

const FavouriteSeries = 'netflix' ;



function Data() {
    return (
        <>
            <Cards />
            
            {
                // SeriesData.map(netflix_card) 
                // netflix_card is a callback function
                // javascript code in jsx

                SeriesData.map((val) => {
                    return (
                        <Cards
                          imgsrc={val.image}
                          title={val.title}
                          series_name={val.series}
                          link={val.link}
                        />
                      )
                }) 
            }

            <FavSeries />

            { FavouriteSeries == 'netflix' ? <Netflix /> : <Amazon /> }
        </>
    )
}

export default Data ;