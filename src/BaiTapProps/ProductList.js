import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ProductList extends Component {

  

    renderShoes = () => {
        let {Data,showInfo} = this.props
        return (
            Data.map((item, index) => {
                return (
                    <div className='col-4 mt-3' key={`shoes${index}`}>
                       <ProductItem  showInfo = {showInfo} product = {item}/>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className='row'>
                {this.renderShoes()}
            </div>
        )
    }
}
