import React from "react";
import axios from 'axios';

function LightRoom(props) {

    
    // // Variable pour l'état des volets dans la pièce

    var etatvolet = 'on';
   
    return(

        <div class='container'>

            <div class="row justify-content-center">

            <h1 className="App-piece">{props.name} </h1>

            <div class="col">
                <div class="text-center">
                    <p> Lumière : {props.etatlum}</p>
                    <img class="position" src='https://media.istockphoto.com/vectors/light-bulb-with-rays-lighting-electric-lamp-creative-idea-solution-vector-id1149246206?k=20&m=1149246206&s=612x612&w=0&h=yz2GuTngOnZAHYq4wDsAwq0mp20OWlIUSSdmyIU3sRM=' width='150' height='120'></img>
                </div>
            </div>


            <div class="col">
                <div class="text-center">                  
                    <p class="text-center"> Volets : {etatvolet} </p>
                    <img class="position" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2RlM1U8Neiv0EJ3JBUWg046KssJYF-Qt9Q&usqp=CAU' width='120' height='120'></img>
                </div>  
            </div>

            </div>
            
            <div class="row justify-content-center"></div>


            <div class="row justify-content-center">
                <div class="col">
                    <div class="text-center">
                        <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer'></input>
                        <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre'></input>
                    </div>
                </div>

                <div class="col">
                    <div class="text-center">                  
                        <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Ouvrir'></input>
                        <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Fermer'></input>
                    </div>  
                </div>

            </div> 

        </div>
    )
}

export default LightRoom;
