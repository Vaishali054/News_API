import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=9152851345524823a4d206eb7e81722c";
    let data =await fetch(url);
    let parsedata = await data.json()
    this.setState({articles: parsedata.articles})
  }

  handlePrevClick=()=>{
    
  }


  handleNextClick=()=>{

  }


  render() {
    return (
      <div className="container my-4 ">
        <h2>NewsDose - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-4"key={element.url} >
                <NewsItems
                  title={element.title /*.slice(0,25)*/}
                  description={element.description /*?element.description.slice(0,88):" "*/}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between ">
        <button  disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr;  Previous</button>
        <button type="button" class="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
 