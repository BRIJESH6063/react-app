
/*

const name = "BRIJESH KUMAR YADAV" ;
const image1 = "https://picsum.photos/seed/picsum/200/400" ;
const image2 = "https://picsum.photos/200/300" ;
const image3 = "https://picsum.photos/200/300.jpg" ;

<h2 contentEditable="true">My name is {`${name}`}</h2>
<a href="http://juet.ac.in" target="_blank" rel="noopener noreferrer">Click Here!</a>
{
  // js
}


<h2>My name is <span style={headingName}>{`${name}`}</span></h2> 
<h2>My name is <span style={{color: "blue",}}>{`${name}`}</span></h2>
both are inline css-ing. 

// camelCasing to key, and values string.
const headingName = {
  color:"blue"
}


*/

/*
RETURN CONTENT --

      <h2>My name is <span style={headingName}>{`${name}`}</span></h2>
      <h2>My name is <span style={{color: "blue",}}>{`${name}`}</span></h2>


      <h1 className='heading'>Hello Fucking World!!!!....</h1>
      <h2>My Lucky number is {Math.floor((Math.random()*100+1))} </h2>

      <div className="image">
        <img src={image1} alt="random.image" />
        <img src={image2} alt="random.image" />
        <img src={image3} alt="random.image" />
      </div>

*/


function fun1() {
  return "Function1 called successfully!...." ;
}

function fun2 () {
  return "Function2 called successfully!...." ;
}







const nondefault = "Exporting Non default item";

function Practise1() {
  return (
    <>
      <h2>Practise 1 Items</h2>
      
      
      
    </>
  );
}

export default Practise1 ;
export {nondefault, fun1, fun2 } ;
// this way export as many variables as you want... 
