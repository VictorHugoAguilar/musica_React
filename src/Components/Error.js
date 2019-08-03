import React from "react";

function Error({ mensaje }) {
    return (
        <div className="alert alert-warning">
            <p> 
                <i className="fas fa-exclamation-triangle" />
                &nbsp;&nbsp;Error: <span>{mensaje}</span>&nbsp;&nbsp;
                <i className="fas fa-bomb" />
            </p>
        </div>
    );
}

export default Error;
