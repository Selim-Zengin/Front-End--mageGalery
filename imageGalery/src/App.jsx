import './App.css'
import { Manzara } from './Manzara';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Anasayfa } from './Anasayfa';
import { Doga } from './Doga';
import { Hayvan } from './Hayvan';
import { Sehir } from './Sehir';

function App() {
  
  return (
    <>
<Router>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{padding:0}}>
  <div className="container-fluid" style={{backgroundColor:'red'}}>
    <div className="navbar-brand ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1MkNbNEu3Cxl8XYkUzyxTo4l_-vvZ5MZ9Zn5qd6FsiKUo8ETrRWiogGbEv93_PYqBZY&usqp=CAU" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
    </div>
    <a className="navbar-brand textCss" href="/" style={{marginLeft:10}}><h2 >Anasayfa</h2></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
    
        <li className="nav-item">
          <a className="nav-link textCss"  href="/Manzara" ><h4>Manzara</h4></a>
        </li>
  

        <li className="nav-item">
          <a className="nav-link textCss" href="/Doga"><h4>Doğa</h4></a>
        </li>
        <li className="nav-item">
          <a className="nav-link textCss" href="/Hayvan"><h4>Hayvan</h4></a>
        </li>
     
     
        <li className="nav-item">
          <a className="nav-link textCss" href='/Sehir'><h4>Şehir</h4></a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
<Routes>
  <Route path='/' element={<Anasayfa/>}/>
<Route path="/Manzara" element={<Manzara/>} />
<Route path='/Doga' element={<Doga/>}/>
<Route path='/Hayvan' element={<Hayvan/>} />
<Route path='/Sehir' element={<Sehir/>} />
</Routes>
</Router>

<div style={{width:"100%",backgroundColor:"red",height:70}}>
  <br />
<h4 style={{color:'white',textAlign:'center'}} >İmage Galery</h4>
</div>
    </>
  )
}

export default App
