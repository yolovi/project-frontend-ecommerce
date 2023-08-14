import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Divider, List } from 'antd'

const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext)
    const data = cart.map(product => product.name_product)
    //console.log(cart)
  

    if (cart.length <= 0) {
        return <span>No tienes ningún producto añadido</span>;
      }
    
  
    return (
    <div>
        <Divider orientation="left">Cart</Divider>
    <List
      size="small"
      header={<div>Products</div>}
      footer={<div>
        <button onClick={() => clearCart()}>Clear cart</button>
        <button>Checkout</button>
        </div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    </div>
  )
}

export default Cart


