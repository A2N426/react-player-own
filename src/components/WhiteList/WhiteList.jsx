import React from 'react';

const WhiteList = (props) => {
    // const {id,name,team,price}=props.cart;
    // console.log(props.cart)
    let totalPrice = 0;
    for (const player of props.cart) {
        totalPrice = parseInt(totalPrice) + parseInt(player.price);
    }
    return (
        <div>
            <h5>Price: {totalPrice}</h5>
            {
                props.cart.map(item => <li className='bg-red-300 p-3 mt-3 rounded'>{item.name}</li>)
            }
            <p>Player ={props.cart.length}</p>
        </div>
    );
};

export default WhiteList;