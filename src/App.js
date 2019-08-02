import React, { useState, useEffect, Fragment } from "react";

//Importamos los componentes
import Formulario from "./Components/Formulario";

function App() {
    // Utilizar useState con 3 states
    const [artista, setArtista] = useState("");
    const [letra, setLetra] = useState([]);
    const [info, setInfo] = useState({});


    //Metoto para consultar la API de las letras de canciones
    const consultarAPILetra = (busqueda) => {
      console.log(busqueda);
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
