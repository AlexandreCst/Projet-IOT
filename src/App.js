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
          fetch("http://172.20.8.176:5000/maison/light").then(response =>
            response.json().then(data => {
              setEtat(data);
              console.log('debut');
              console.log(etat);
            })
          );
      },[]); 

    
    // // On récupère l'état des volets


    //On récupère les URL pour la gestion des lumières

    //var ip = "http://172.20.8.176:8080/maison/"
    var chambre1_lon = "http://172.20.8.176:5000/maison/light/3/1"; // Chambre 1
    var chambre2_lon = "http://172.20.8.176:5000/maison/light/5/1"; // Chambre 2
    var cuisine_lon = "http://172.20.8.176:5000/maison/light/7/1"; // Cuisine
    var salon_lon = "http://172.20.8.176:5000/maison/light/11/1"; //Salon

    var chambre1_loff = "http://172.20.8.176:5000/maison/light/3/0"; // Chambre 1
    var chambre2_loff = "http://172.20.8.176:5000/maison/light/5/0"; // Chambre 2
    var cuisine_loff = "http://172.20.8.176:5000/maison/light/7/0"; // Cuisine
    var salon_loff = "http://172.20.8.176:5000/maison/light/11/0"; //Salon

    // axios.post(chambre2_URL)
    // .then(data => console.log(data))
    // .catch(data => console.log('error', data));   

    // axios.post(cuisine_URL)

  return (

    <html>

      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      </head>

      <body>

        <div className="App-header">
          <p>Ma Maison Connectée</p>
        </div>

        <div class="container">

          <div class="row-2">
            <br></br>
          </div>

          <div class='col-md-2 offset-md-11 border border-dark' style={{'right':'15px'}}>
            <div class='text-center'> 
              <p>Mode automatique</p>
              <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Activer'></input> 
              <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Désactiver'></input>
            </div> 
          </div>

          <div class="row-2">
            <br></br>
          </div>

          <div class="row justify-content-center">

            {/* Chambre 1 */}

            <div class="col-4 border border-dark" style={{'paddingLeft':"0", 'paddingRight':"0"}}>
                <LightRoom roomId='1' name="Chambre 1" etatlum={etat['Chambre1']} urlOn='chambre1_on' urlOff='chambre1_off'></LightRoom>
                <div class="row">
                <div class="col">
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(chambre1_lon)}></input>
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(chambre2_loff)}></input>
                </div>
                <div class="col">
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(chambre1_von)}></input>
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(chambre1_voff)}></input>
                </div>
              </div>
            </div>              

            {/* Chambre 2 */}

            <div class="col-4 border border-dark" style={{'paddingLeft':"0", 'paddingRight':"0"}}>
              <LightRoom roomId='2' name="Chambre 2" etatlum={etat['Chambre2']}></LightRoom>
              
              <div class="row">
                <div class="col">
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(chambre2_lon)}></input>
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(chambre2_loff)}></input>
                </div>
                <div class="col">
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(chambre2_von)}></input>
                  <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(chambre2_von)}></input>
                </div>
              </div>
            </div>

          </div>

          <div class="row justify-content-center">

            {/* Cuisine */}

            <div class="col-4 border border-dark" style={{'paddingLeft':"0", 'paddingRight':"0"}}>
              <LightRoom roomId='3' name="Cuisine" etatlum={etat['Cuisine']}></LightRoom>
              <div class="row">
                  <div class="col">
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(cuisine_lon)}></input>
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(cuisine_voff)}></input>
                  </div>
                  <div class="col">
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(cuisine_von)}></input>
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(cuisine_voff)}></input>
                  </div>
              </div>
            </div>            

            {/* Salon */}

            <div class="col-4 border border-dark" style={{'paddingLeft':"0", 'paddingRight':"0"}}>
              <LightRoom roomId='4' name="Salon" etatlum={etat['Salon']}></LightRoom>
              <div class="row">
                  <div class="col">
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(salon_lon)}></input>
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(salon_loff)}></input>
                  </div>
                  <div class="col">
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Allumer' onClick={() => axios.post(salon_von)}></input>
                    <input type='submit' class="btn btn-outline-secondary btn-sm position" value='Eteindre' onClick={() => axios.post(salon_voff)}></input>
                  </div>
              </div>
            </div>           
                
          </div>

        </div>

      </body>

    </html>

    
  );
}

export default App;
