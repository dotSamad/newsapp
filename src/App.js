import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pagesize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>        
        <Navbar/>
        <LoadingBar
        height={3}
        color='#000'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={< News setProgress={setProgress} apiKey={apiKey} key='general' pagesize={pagesize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} key='business'  pagesize={pagesize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment'  pagesize={pagesize} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={ <News setProgress={setProgress} apiKey={apiKey} key='general'  pagesize={pagesize} country="in" category="general" />}></Route>
          <Route exact path="/health" element={ <News setProgress={setProgress} apiKey={apiKey} key='health'  pagesize={pagesize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={ <News setProgress={setProgress} apiKey={apiKey} key='science'  pagesize={pagesize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey} key='sports'  pagesize={pagesize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} key='technology' pagesize={pagesize} country="in" category="technology" />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
export default App