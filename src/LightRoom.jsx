import React from "react";

function LightRoom(props) {
    console.log(props);
    var pic = "toto";

    if (props.etat === "on") {
        pic = "titi";
    
    return(
        <div>
            <p>
                Bonjour de Lightroom {props.roomId} {pic}
            </p>
        </div>
    )
    }else{
        return(
            <div>
                <p>popop</p>
            </div>
        )
    }
}

export default LightRoom;
