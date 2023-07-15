import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pagesize = 9;
  render() {
    return (
      <div>
        <Router>        
        <Navbar/>
        <Routes>
          <Route exact path="/" element={< News  key='general' pagesize={this.pagesize} country="in" category="general" heading="Daily News"/>}></Route>
          <Route exact path="/business" element={ <News key='business'  pagesize={this.pagesize} country="in" category="business"heading="Business"/>}></Route>
          <Route exact path="/entertainment" element={<News key='entertainment'  pagesize={this.pagesize} country="in" category="entertainment" heading="Entertainment"/>}></Route>
          <Route exact path="/general" element={ <News key='general'  pagesize={this.pagesize} country="in" category="general" heading="Top Headlines"/>}></Route>
          <Route exact path="/health" element={ <News key='health'  pagesize={this.pagesize} country="in" category="health" heading="Health"/>}></Route>
          <Route exact path="/science" element={ <News key='science'  pagesize={this.pagesize} country="in" category="science" heading="Science"/>}></Route>
          <Route exact path="/sports" element={ <News key='sports'  pagesize={this.pagesize} country="in" category="sports" heading="Sports"/>}></Route>
          <Route exact path="/technology" element={ <News  key='technology}>' pagesize={this.pagesize} country="in" category="technology" heading="Technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}