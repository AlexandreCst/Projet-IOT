import logo from './logo.svg';
import './App.css';
import LightRoom from './LightRoom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {

      // On récupère l'état des lumières

    // useEffect nous permettra de déclencher le fetch; useState permettra de stocker le retour de l'API dans le state 
      
    const [etat, setEtat] = useState ([]) ;

      useEffect(() => {
          fetch("http://172.23.11.52:8080/maison/light").then(response =>
            response.json().then(data => {
              setEtat(data);
              console.log('debut');
              console.log(etat);
            })
          );
      },[]);
  
  return (

    <html>

      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      </head>

      <body>

        {/* <button type="button" class="btn">vdkehdl</button> */}


        <div className="App-header">
          <p>Ma Maison Connectée</p>
        </div>

        {/* <h1 className="App-piece">{etat} </h1> */}


        <div class="container">

          <div class="row-2">
            <br></br>
          </div>

          <div class="row justify-content-center">

              <div class="col-4 border border-dark">
                  <LightRoom roomId='1' name="Chambre 1" etatlum={etat['Chambre1']}></LightRoom>
              </div>

              <div class="col-4 border border-dark">
                <LightRoom roomId='2' name="Chambre 2" etatlum={etat['Chambre2']}></LightRoom>
              </div>

          </div>

          <div class="row justify-content-center">

            <div class="col-4 border border-dark">
              <LightRoom roomId='3' name="Cuisine" etatlum={etat['Cuisine']}></LightRoom>
            </div>


            <div class="col-4 border border-dark">
              <LightRoom roomId='4' name="Salon" etatlum={etat['Salon']}></LightRoom>
            </div>


          </div>

        </div>

      </body>

    </html>

    
  );
}

export default App;
