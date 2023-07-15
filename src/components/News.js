import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general',
        heading: 'Top Headlines',
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        heading: PropTypes.string,
    }
    // article = []
    constructor() {
        super();
        // console.log("This is constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async newsUpdate() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=63127768a812452bbd494c08642c7b06&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        });
    }

    async componentDidMount() {
        this.newsUpdate();
    }

    handlePrevClick = async () => {
        // console.log("Previous button is clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=63127768a812452bbd494c08642c7b06&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({page: this.state.page - 1});
        this.newsUpdate();
    }
    handleNextClick = async () => {
        // console.log("Next button is clicked");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=63127768a812452bbd494c08642c7b06&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        //     this.setState({loading: true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        this.setState({page: this.state.page + 1});
        this.newsUpdate();
    }

render() {
    return (
        <div>
            <div className="container my-3" >
                <h1 className="my-3" style={{ textAlign: "center" }}>{this.props.heading}</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title.slice(0, 55)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })
                    }

                </div>
            </div>
            <div className="container my-3 d-flex justify-content-evenly" >
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        </div>
    )
}
}
export default News
