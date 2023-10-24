import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const stylee={backgroundColor:"gold",width:"18rem",borderRaduis:"100px" } //styles css en ligne pou modifier la card
const Player=({nom,equip,national,numero,age,photo}) =>{
  return (
    //lappel de la const stylee dans la card
    <Card style={stylee}>   
    <Card.Img variant="top" src={photo} />
    <Card.Body>
        <Card.Title >{nom}</Card.Title>
        <Card.Text>          
        age:{age}<br/>                    
        national:{national}<br/>
        equipe:{equip}<br/>
        numero:{numero}
        </Card.Text>
    </Card.Body>
    </Card>
  );
}

export default Player
