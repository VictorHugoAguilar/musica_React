import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

//Importamos los componentes
import Formulario from "./Components/Formulario";
import Cancion from "./Components/Cancion";

function App() {
    // Utilizar useState con 3 states
    const [artista, setArtista] = useState("");
    const [letra, setLetra] = useState([]);
    const [info, setInfo] = useState({});


    //Metoto para consultar la API de las letras de canciones
    const consultarAPILetra = async (busqueda) => {
      // hacemos distroccion desde busqueda a los objetos
      const {artista, cancion} = busqueda;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      // Consultar la API
      const resultado = await axios(url);
     
      setLetra(resultado.data.lyrics);
    }

    return (
        <Fragment>
            <Formulario 
              consultarAPILetra={consultarAPILetra}
            />
            <div className="container mt-5">
              <div className="row">
                <div className="col-6">
                   
                </div>
                <div className="col-6">
                  <Cancion letra={letra} />
                </div>
              </div>

            </div>
        </Fragment>
    );
}

export default App;
