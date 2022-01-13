import logo from './logo.svg';
import './App.css';
import LightRoom from './LightRoom';
import axios from 'axios';

function App() {
  axios.post("http://172.23.11.52:5000/maison/light/3/0")
  .then(function (response) {
    console.log(response);


  });
  return (

    
    <div className="App">
      <p>Ma Maison Connectée</p>
      <LightRoom roomId="1" etat="on"></LightRoom>
      <LightRoom roomId="2" etat="on"></LightRoom>
      <LightRoom roomId="3" etat="off"></LightRoom>
      <LightRoom roomId="4" etat="off"></LightRoom>
    </div>
  );
}

export default App;
