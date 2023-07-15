import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="container">
                <div className="card my-3">
                    <img src={!imageUrl ? "https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80" : imageUrl} className="card-img-top" style={{ height: "12rem" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "16px" }}>{title}...<span class="badge rounded-pill text-bg-secondary">{source}</span></h5>
                        
                        {/* <p className="card-text">{description}...</p> */}
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark my-1">Read More</a>
                        <div className="card-footer">
                            <small className="text-body-secondary">By- {!author?"Unknown": author}, <br/> Date- {new Date(date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
