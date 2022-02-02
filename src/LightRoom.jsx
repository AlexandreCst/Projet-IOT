import React from "react";
import axios from 'axios';

function LightRoom(props) {

    
    // Variable pour l'état des volets dans la pièce

    return(

        <div class='container'>

            <div class="row justify-content-center">

                <h1 className="App-piece">{props.name} </h1>

                <div class="col" style={{'textAlign':'center'}}>
                    <p> Lumière : {props.etatlum}</p>
                    <img class="position" src='https://media.istockphoto.com/vectors/light-bulb-with-rays-lighting-electric-lamp-creative-idea-solution-vector-id1149246206?k=20&m=1149246206&s=612x612&w=0&h=yz2GuTngOnZAHYq4wDsAwq0mp20OWlIUSSdmyIU3sRM=' width='150' height='100'></img>
                </div>


                <div class="col" style={{'textAlign':'center'}}>               
                    <p class="text-center"> Volets : {props.etatvol} </p>
                    <img class="position" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2RlM1U8Neiv0EJ3JBUWg046KssJYF-Qt9Q&usqp=CAU' width='120' height='120'></img>
                </div>

            </div>

        </div>
    )
}

export default LightRoom;
