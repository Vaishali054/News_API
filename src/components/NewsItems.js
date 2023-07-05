import React, { Component } from "react";

export default class NewsItems extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" >
          <img src={!imageUrl?"//ambchttps:rypto.com/wp-content/uploads/2023/01/doge-fi-1000x600.jpg ":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="norefrerrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
