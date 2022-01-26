import React from "react";
import axios from 'axios';

function LightRoom(props) {

    //console.log(props);

    console.log(props.roomId)


    // Variable pour l'état des lumières dans la pièce

    // etatlum = etat

    // console.log('wesh')
    // console.log(etatlum)

    
    // // Variable pour l'état des volets dans la pièce

    var etatvolet = 'on';

    var etatlum = 'on';

    // etatvolet= etat['props.name'] ;
    
    return(
        <div>
            <h1 className="App-piece">{props.name} </h1>
            <p class="text-center"> Lumière : {etatlum}
            <br></br> Volets : {etatvolet} 
            </p>
            <img src='https://media.istockphoto.com/vectors/light-bulb-with-rays-lighting-electric-lamp-creative-idea-solution-vector-id1149246206?k=20&m=1149246206&s=612x612&w=0&h=yz2GuTngOnZAHYq4wDsAwq0mp20OWlIUSSdmyIU3sRM=' width='100'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2RlM1U8Neiv0EJ3JBUWg046KssJYF-Qt9Q&usqp=CAU' width='100'></img>
           
            {/* if etatlum == 'Allumée'
            <button value = 'Eteindre'></button>
            <button value = 'Allumer'></button> */}
        </div>
    )
}

export default LightRoom;
