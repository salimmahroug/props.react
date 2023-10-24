import React from 'react'
import players from './players'
import Player from './Player'
const Playerlist=()=> {
  return (
   <div>
    {players.map(               //cree un copie sur l object players en utilisant .map() pour parcourir les element de lobject dans la card de Player
        (el,index)=>(
        <Player Key={index} {...el}/>
        )
        )
        }
   </div>
  )
}

export default Playerlist
