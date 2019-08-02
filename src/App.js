import React, { useState, useEffect, Fragment } from "react";

//Importamos los componentes
import Formulario from "./Components/Formulario";

function App() {
    // Utilizar useState con 3 states
    const [artista, setArtista] = useState("");
    const [letra, setLetra] = useState([]);
    const [info, setInfo] = useState({});

    return (
        <Fragment>
            <Formulario />
        </Fragment>
    );
}

export default App;
