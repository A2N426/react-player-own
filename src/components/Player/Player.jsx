import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const handleToWhiteList=props.handleToWhiteList;
    const {img, name, price, team, } = props.player;
    return (
        <div className='border text-center p-10 border-sky-300 rounded w-70'>
            <img className=' w-64 h-64 rounded-md' src={img} alt="" />
            <h3 className='mt-4 text-2xl font-semibold'>Name: {name}</h3>
            <p className='text-xl'>Price: {price}</p>
            <p>Team: {team}</p>
            <button onClick={()=>handleToWhiteList(props.player)} className='btn bg-orange-600 text-white rounded-lg w-full p-3'>Add White List <FontAwesomeIcon icon={faBolt} /></button>
        </div>
    );
};

export default Player;