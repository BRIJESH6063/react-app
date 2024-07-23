import React from 'react'


function Card(props)  {
    console.log(props) ;
    return (
        <>
            <div className="card">
                <img src={props.imgsrc} alt="" />
                <h2>{props.title}</h2>
                <h4>{props.series_name}</h4>
                <h4><a href={props.link}>Watch Now</a></h4>
            </div>
        </>
    )
}

const Cards = () => {
  return (
    <>
        <Card 
            imgsrc="paste-image-link" 
            title = "series-title"
            series_name = "series-name"
            link = "series-watch-link"
        />
    </>
  )
}


export default Cards ;
