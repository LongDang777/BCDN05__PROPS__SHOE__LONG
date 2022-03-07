import React, { Component } from 'react'
import ProductList from './ProductList'
import Data from '../Data/Data.json'
import Modal from './Modal'

export default class ShoesStore extends Component {

    state={
        shoe : Data[0]
    }

    showInfo=(newShoe)=>{
        this.setState({
            shoe : newShoe
        })
    }

  render() {
    return (
      <div>
          <h3  className='text-center p-3 text-light bg-dark'>BÀI TẬP PROPS (SHOES)</h3>
          <ProductList showInfo ={this.showInfo} Data = {Data}/>
          <Modal shoe = {this.state.shoe}/>
      </div>
    )
  }
}
