import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    let {image,name,price,description} = this.props.shoe
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Shoe Detail</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body">
                    <img className='img-fluid' src={image} alt="" />
                    <h5 className='text-success'>{name}</h5>
                    <h6 className='text-danger'>{price} $</h6>
                    <p>{description}</p>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
  )
  }
}
