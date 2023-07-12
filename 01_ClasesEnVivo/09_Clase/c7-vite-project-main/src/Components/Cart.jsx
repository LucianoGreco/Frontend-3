import React from 'react'

const Cart = ({cart}) => {
    return (
        <div>
            {console.log(cart)}
            {cart.map((menu, index) => <li key={index}> {menu.tipo} - Cantidad: {menu.cantidad} 🍕</li>)}
        </div>
    )
}

export default Cart