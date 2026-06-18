import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Wrap from './Wrap'
import Container from './Container'
import Page3 from './Page3'
import TopMenu from './TopMenu'
import Row2 from './Row2'
import Footer from './Footer'
import Wrapper from './Wrapper'

import Row3 from './Row3'
import Niceheader from './Niceheader'
import Nicerow1 from './Nicerow1'
import Nicerow2 from './Nicerow2' 
import Nicerow3 from './Nicerow3'
import Nicerow4 from './Nicerow4'
import Nicerow5 from './Nicerow5'
import Nicerow6 from './Nicerow6'
import Nicerow7 from './Nicerow7'
import Nicerow8 from './Nicerow8'
import Pass from './Pass'
import Color from './Color'
import Netflix from './Netflix'
import Salesapp from './Salesapp'
import  Minicaculator from './Minicaculator'
import  Api from './Api'
import Api2 from './Api2'
import Api3 from './Api3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import Service from './Service'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Row2/>
    <Header/>
    <Row3/>
    <Page3/> */}
    {/* <Niceheader/>
     <Nicerow1/>
     <Nicerow2/>
     <Nicerow3/>
     <Nicerow4/>
     <Nicerow5/>
     <Nicerow6/>
    <Nicerow7/>
    <Nicerow8/> */}
    {/* <Pass/>
    <Color/> */}
     {/* <Netflix/> */}
     {/* <Salesapp/> */}
     {/* <Minicaculator/> */}
     {/* <Api/> */}
     {/* <Api2/> */}
     {/* <Api3/> */}
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        
      </Routes>
     </BrowserRouter>
    
  </StrictMode>,
)
