import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

//Importamos los componentes
import Formulario from "./Components/Formulario";
import Cancion from "./Components/Cancion";
import Informacion from "./Components/Informacion";

function App() {
    // Utilizar useState con 3 states
    const [artista, setArtista] = useState("");
    const [letra, setLetra] = useState([]);
    const [info, setInfo] = useState({});

    //Metoto para consultar la API de las letras de canciones
    const consultarAPILetra = async busqueda => {
        // hacemos distroccion desde busqueda a los objetos
        const { artista, cancion } = busqueda;

        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

        // Almacenar artista que se almaceno
        setArtista(artista);

        try {
            // Consultar la API
            const resultado = await axios(url);

            if (resultado.data.lyrics.length > 0)
                // Almacenar letra
                setLetra(resultado.data.lyrics);
        } catch {
            setLetra([false]);
            console.log(letra)
        }
    };

    // Metodo para consultar la API de informacion del artista
    const consultarAPIInfo = async () => {
        if (artista) {
            const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

            const resultado = await axios(url);

            setInfo(resultado.data.artists[0]);

            // console.log(info);
        }
    };

    useEffect(() => {
        consultarAPIInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artista]);

    const letraEncontrada =
        letra[0] !== false ? (
            <Cancion letra={letra} />
        ) : (
            <div className="alert alert-danger">No se ha encontrado letra</div>
        );

    return (
        <Fragment>
            <Formulario consultarAPILetra={consultarAPILetra} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <Informacion info={info} />
                    </div>
                    <div className="col-6">{letraEncontrada}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
