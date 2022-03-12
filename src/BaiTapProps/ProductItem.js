import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    let {image,name,price,shortDescription} = this.props.product;
    let {showInfo} = this.props
    return (
      <div className="card mb-3 rounded shadow" style={{border: 'none'}}>
      <img  height={350} src={image} alt={true} />
        <div className="card-body">
          <h6 style={{fontSize : '23px'}} className="card-title text-primary">{name}</h6>
          <h5 className="card-title text-danger">{price} $</h5>
          <p style={{fontSize: '15px'}} className="card-text">{shortDescription}</p>
          <button onClick={()=>{showInfo(this.props.product)}} data-toggle="modal" data-target="#exampleModal" className="btn btn-success">Details</button>
        </div>
      </div>
    )
  }
}
