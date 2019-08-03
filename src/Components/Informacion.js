/* eslint-disable no-template-curly-in-string */
import React from "react";

function Informacion({info}) {
    
    if (Object.keys(info).length === 0) return null;

    //console.log(info.strBiographyES);

    const biografia = (info.strBiographyES === null)?info.strBiographyEN:info.strBiographyES;

    return (
        <div className="card border-ligth">
            <div className="card-header bg-primary text-light font-weight-bold ">
                Información Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Imagen grupo" />
                <p className="card-text">Género: {info.strGenre}</p>
                <h2 className="card-text text-center">Biografía</h2>
                <p className="card-text">{biografia}</p>
                <p className="card-text">
                    <a href="{`http://${info.strFacebook}`}" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="{`http://${info.strTwitter}`}" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="{info.strLastFMChart}" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>

                </p>
            </div>
        </div>
    );
}

export default Informacion;
