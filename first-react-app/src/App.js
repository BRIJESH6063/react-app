import './App.css';
import { Route, Link, Routes, NavLink } from "react-router-dom";
import About from "./components/ReactRouterDOM/About"
import Contact from "./components/ReactRouterDOM/Contact"
import Service from './components/ReactRouterDOM/Service';
import UseParams from './components/UseParam/UseParams';
import UseLocation from './components/UseEffect/useLocation';
import Error from './components/Error/Error';


function App() {
  
  return (
    <>
      <>
        <h1>Home Page</h1>
        <Routes>
            <Route exact path="/" element={<Service name="About"/>}/>
            <Route exact path="contact" element={<Service name="Contact"/>} />
            <Route exact path="user/:name/:lname" element={<UseLocation/>} />
            <Route element={Error} />
            {/* <Redirect to="/"/> */}
        </Routes>
        <div className="navbar">
          <Link to="/">About Us</Link> <br /> <br /> <br />
          <Link to="/contact">Contact Us</Link>
        </div>
        
      </>
        
      
      
    </>
  );
}

export default App;





/*
import Practise1 from './components/practise1';
import {nondefault} from './components/practise1' ;
        OR
import * as ques from './components/practise1' ;


<Practise1/>
<h3>Non-Default: {ques.nondefault}</h3>


import Statewise from './components/CovidApp/statewiseData/statewise.js';

<Contact/>
      <About />

<div className="list">
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
    </ul>
</div>


<Routes>
    <Route exact path="/" Component={About} />
    <Route exact path="contact" Component={Contact} />
</Routes>



<Route
  exact
  path="/dashboard"
  render={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/login" />)}
/>


<Routes>
    <Route exact path="/" element={<Service name="About"/>} />
    <Route exact path="contact" element={<Service name="Contact"/>} />
</Routes>


*/








