import logo from './logo.svg';
import './App.css';
import LightRoom from './LightRoom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {

      // On récupère l'état des lumières
      //const req = async () => {
        //const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        //console.log(response)
      //}
      //req() // Calling this will make a get request and log the response.
      
      // var etat = null ;

      // axios.get("http://172.20.8.176:8080/maison/light")
      // .then(function (response) {
      //   console.log(response);
      //   etat = response.data ;
      //   setResult(response.data)
      // });

      // console.log("wololo")
      // console.log(etat)


      // etat = JSON.parse(etat)

      // console.log('oui')
      // console.log(etat)
   
      // cuis = etat.Cuisine;
      // sal = etat['Salon'] ;

      // console.log(yep)
      // console.log(cuis)

      

    
    // // On récupère l'état des volets

    // axios.get("http://172.20.8.176:5000/maison/rideaux")
    // .then(function (response) {
    // console.log(response);
    // var etat = response.data ;
    // });

    var chambre1_URL = "http://172.23.11.52:8080/maison/light/3/1"; // Chambre 1
    var chambre2_URL = "http://172.23.11.52:8080/maison/light/5/toggle"; // Chambre 2
    var cuisine_URL = "http://172.23.11.52:8080/maison/light/7/toggle"; // Cuisine
    var salon_URL = "http://172.23.11.52:8080/maison/light/11/toggle"; //Salon

    axios.post(chambre1_URL)
    .then(data => console.log(data))
    .catch(data => console.log('error', data));
  
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

            <span class="border border-dark">
              <div class="col">
                <LightRoom roomId='1' name="Chambre 1" etat='mettre etat'></LightRoom>
              </div>
            </span>

            <span class="border border-dark">
              <div class="col">
                <LightRoom roomId='2' name="Chambre 2" etat='mettre etat'></LightRoom>
              </div>
            </span>

          </div>

          <div class="row justify-content-center">

            <span class="border border-dark">
              <div class="col">
                <LightRoom roomId='3' name="Cuisine" etat='mettre etat'></LightRoom>
              </div>
            </span>

            <span class="border border-dark">
              <div class="col">
                <LightRoom roomId='4' name="Salon" etat='mettre etat'></LightRoom>
              </div>
            </span>

          </div>

        </div>

      </body>

    </html>

    
  );
}

export default App;
