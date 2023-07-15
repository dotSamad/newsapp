import React, { Component } from 'react'
import logo from './logo.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width="55" height="34" style={{paddingLeft: '10px'}}/></Link>
                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" onClick={this.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">☼/☾</label>
                        </div> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Daily News</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/">Weather</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link></li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/general">general</Link></li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">technology </Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
