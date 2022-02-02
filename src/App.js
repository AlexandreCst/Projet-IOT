import logo from "./logo.svg";
import "./App.css";
import LightRoom from "./LightRoom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // On récupère l'état des lumières

  // useEffect nous permettra de déclencher le fetch; useState permettra de stocker le retour de l'API dans le state

  const [etatlum, setEtatLum] = useState([]);
  const [etatvol, setEtatVol] = useState([]);

  useEffect(() => {
    fetch("http://172.23.11.52:5000/maison/light").then((response) =>
      response.json().then((data) => {
        setEtatLum(data);
        console.log(etatlum);
      })
    );
  }, []);

  // // On récupère l'état des volets

  useEffect(() => {
    fetch("http://172.23.11.52:5000/maison/rideaux").then((response) =>
      response.json().then((data) => {
        setEtatVol(data);
        console.log(etatvol);
      })
    );
  }, []);

  //On récupère les URL pour la gestion des lumières

  //var ip = "http://172.20.8.176:8080/maison/"
  var chambre1_lon = "http://172.23.11.52:5000/maison/light/3/1"; // Led Chambre 1
  var chambre2_lon = "http://172.23.11.52:5000/maison/light/5/1"; // Led Chambre 2
  var cuisine_lon = "http://172.23.11.52:5000/maison/light/7/1"; // Led Cuisine
  var salon_lon = "http://172.23.11.52:5000/maison/light/11/1"; //Led Salon

  var chambre1_loff = "http://172.23.11.52:5000/maison/light/3/0"; // Led Chambre 1
  var chambre2_loff = "http://172.23.11.52:5000/maison/light/5/0"; // Led Chambre 2
  var cuisine_loff = "http://172.23.11.52:5000/maison/light/7/0"; // Led Cuisine
  var salon_loff = "http://172.23.11.52:5000/maison/light/11/0"; // Led Salon

  //On récupère les URL pour la gestion des lumières

  var chambre1_von = "http://172.23.11.52:5000/maison/rideaux/1/1"; // Volet Chambre 1
  var chambre2_von = "http://172.23.11.52:5000/maison/rideaux/2/1"; // Volet Chambre 2
  var cuisine_von = "http://172.23.11.52:5000/maison/rideaux/3/1"; // Volet Cuisine
  var salon_von = "http://172.23.11.52:5000/maison/rideaux/4/1"; // Volet Salon

  var chambre1_voff = "http://172.23.11.52:5000/maison/rideaux/1/0"; // Volet Chambre 1
  var chambre2_voff = "http://172.23.11.52:5000/maison/rideaux/2/0"; // Volet Chambre 2
  var cuisine_voff = "http://172.23.11.52:5000/maison/rideaux/3/0"; // Volet Cuisine
  var salon_voff = "http://172.23.11.52:5000/maison/rideaux/4/0"; // Volet Salon

  //Gestion du mode automatique

  var mode_automatique = "http://172.23.11.52:5000/maison/auto/1"; // activation du mode auto
  var mode_manuel = "http://172.23.11.52:5000/maison/auto/0"; // désactivation du mode auto

  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </head>

      <body>
        <div className="App-header" style={{ paddingBlockEnd: "15px" }}>
          <p style={{ fontVariant: "small-caps", fontSize: "20pt" }}>
            Ma Maison Connectée
          </p>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2668/premium/2668334.png?token=exp=1643791192~hmac=e890026dfbb893d331ec47a141a160ae"
            width="70px"
          />
          <br></br>
        </div>

        <div class="container">
          <div class="row-2">
            <br></br>
          </div>

          <div class="row justify-content-center">
            <div
              class="col-md-auto border border-dark"
              style={{ right: "100px", width: "250px" }}
            >
              <div class="text-center">
                <p>Gestion généralisée lumières</p>
                <img
                  class="position"
                  src="https://media.istockphoto.com/vectors/light-bulb-with-rays-lighting-electric-lamp-creative-idea-solution-vector-id1149246206?k=20&m=1149246206&s=612x612&w=0&h=yz2GuTngOnZAHYq4wDsAwq0mp20OWlIUSSdmyIU3sRM="
                  width="100"
                  height="70"
                ></img>
                <br />
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Ouvrir"
                  onClick={() => axios.post(mode_automatique)}
                ></input>
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Fermer"
                  onClick={() => axios.post(mode_manuel)}
                ></input>
              </div>
            </div>

            <div
              class="col-md-auto border border-dark"
              style={{ right: "100px", width: "250px" }}
            >
              <div class="text-center">
                <p>Gestion généralisée volets </p>
                <img
                  class="position"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2RlM1U8Neiv0EJ3JBUWg046KssJYF-Qt9Q&usqp=CAU"
                  width="70"
                  height="70"
                ></img>
                <br />
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Ouvrir"
                  onClick={() => axios.post(mode_automatique)}
                ></input>
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Fermer"
                  onClick={() => axios.post(mode_manuel)}
                ></input>
              </div>
            </div>

            <div class="col" />
            <div class="col" />

            <div
              class="col-md-auto offset-md-4 border border-dark"
              style={{ left: "100px" }}
            >
              <div class="text-center" style={{ alignContent: "center" }}>
                <p>Mode automatique</p>
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Activer"
                  onClick={() => axios.post(mode_automatique)}
                ></input>
                <input
                  type="submit"
                  class="btn btn-outline-secondary btn-sm position"
                  value="Désactiver"
                  onClick={() => axios.post(mode_manuel)}
                ></input>
              </div>
            </div>
          </div>

          <div class="row-2">
            <br></br>
          </div>

          <div class="row justify-content-center">
            {/* Chambre 1 */}

            <div
              class="col-4 border border-dark"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <LightRoom
                roomId="1"
                name="Chambre 1"
                etatlum={etatlum["Chambre1"]}
                etatvol={etatvol["Chambre1"]}
              ></LightRoom>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Allumer"
                      onClick={() => axios.post(chambre1_lon)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Eteindre"
                      onClick={() => axios.post(chambre1_loff)}
                    ></input>
                  </div>
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Ouvrir"
                      onClick={() => axios.post(chambre1_von)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Fermer"
                      onClick={() => axios.post(chambre1_voff)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            {/* Chambre 2 */}

            <div
              class="col-4 border border-dark"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <LightRoom
                roomId="2"
                name="Chambre 2"
                etatlum={etatlum["Chambre2"]}
              ></LightRoom>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Allumer"
                      onClick={() => axios.post(chambre2_lon)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Eteindre"
                      onClick={() => axios.post(chambre2_loff)}
                    ></input>
                  </div>
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Ouvrir"
                      onClick={() => axios.post(chambre2_von)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Fermer"
                      onClick={() => axios.post(chambre2_von)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            {/* Cuisine */}

            <div
              class="col-4 border border-dark"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <LightRoom
                roomId="3"
                name="Cuisine"
                etatlum={etatlum["Cuisine"]}
              ></LightRoom>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Allumer"
                      onClick={() => axios.post(cuisine_lon)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Eteindre"
                      onClick={() => axios.post(cuisine_voff)}
                    ></input>
                  </div>
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Ouvrir"
                      onClick={() => axios.post(cuisine_von)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Fermer"
                      onClick={() => axios.post(cuisine_voff)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            {/* Salon */}

            <div
              class="col-4 border border-dark"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <LightRoom
                roomId="4"
                name="Salon"
                etatlum={etatlum["Salon"]}
              ></LightRoom>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Allumer"
                      onClick={() => axios.post(salon_lon)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Eteindre"
                      onClick={() => axios.post(salon_loff)}
                    ></input>
                  </div>
                  <div class="col" style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Ouvrir"
                      onClick={() => axios.post(salon_von)}
                    ></input>
                    <input
                      type="submit"
                      class="btn btn-outline-secondary btn-sm position"
                      value="Fermer"
                      onClick={() => axios.post(salon_voff)}
                    ></input>
                  </div>
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
