import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

//Importamos los componentes
import Formulario from "./Components/Formulario";

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
        </Fragment>
    );
}

export default App;
