import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    let {image,name,price,shortDescription} = this.props.product;
    let {showInfo} = this.props
    return (
      <div className="card">
        <img className="img-fluid card-img-top" src={image} />
        <div className="card-body">
          <h4 className="card-title text-primary">{name}</h4>
          <h5 className="card-title text-danger">{price} $</h5>
          <p className="card-text">{shortDescription}</p>
          <button onClick={()=>{showInfo(this.props.product)}} data-toggle="modal" data-target="#exampleModal" className="btn btn-success">Details</button>
        </div>
      </div>
    )
  }
}
