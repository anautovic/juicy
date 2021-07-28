import React, {useState} from 'react';
import Body from './components/Body';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Services from './components/Services'
import Navbar from './components/Navbar'
//import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';

//import ClipLoader from "react-spinners/ClipLoader"
//import {SliderData} from './data/SliderData';

function App() {
  const [isOpen,  setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(! isOpen);
  }
  
  //const [loading, setLoading] = useState(false);
  //useEffect(()=>{
   /* setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 4000);
  }, [])*/
  //const  [People, setPeople]=useState(data);
  return (
    <>
    < GlobalStyle />
    <h1>test</h1>
    <Navbar  toggle={toggle} />
    <Dropdown  isOpen={isOpen} toggle={toggle} />
    <Hero  />
    
    <Body />
    <Services  />
  </>
    
   
  );
}

export default App;
