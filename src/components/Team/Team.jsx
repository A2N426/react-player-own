import { useEffect, useState } from 'preact/hooks';
import React from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Player from '../Player/Player';
import WhiteList from '../WhiteList/WhiteList';
import './Team.css'

const Team = () => {
    const [players,setPlayers]=useState([])
    const [cart,setCart]=useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    useEffect(()=>{
        const storedPlayer=getShoppingCart();
        let savedPlayer=[];
        for(const id in storedPlayer){
            const addedPlayer = players.find(plr=>plr.id===id);
            if(addedPlayer){
                const quantity = storedPlayer[id];
                addedPlayer.quantity=quantity;
                savedPlayer.push(addedPlayer);
            }
        }
        setCart(savedPlayer);
    },[cart])

    const handleToWhiteList=player=>{
        let newCart = [];
        const exists = cart.filter(plr=>plr.id===player.id)
        if(!exists){
            player.quantity=1;
            newCart=[...exists,player];
        }
        else{
            const remaining=cart.filter(plr=>plr.id!==exists.id);
            player.quantity=player.quantity+1;
            newCart=[...remaining,exists];
        }
        console.log(newCart)
        setCart(newCart)
        addToDb(player.id)
    }
    return (
        <div className='team'>
            <div className='team-container grid grid-cols-3 gap-5'>
               {
                players.map(player=><Player player={player} handleToWhiteList={handleToWhiteList}></Player>)
               }
            </div>
            <div className='info-container sticky top-0'>
                <WhiteList cart={cart}/>
            </div>
        </div>
    );
};

export default Team;