import React from "react";
import './estilos/Error.css'


 const Error = ()=>{
    return(
        <>
            <div className="error-page">
                <h1 className="txt">
                    Error 404 not found
                </h1>

                <img className="img"
                    src="src/recursos/error.jpg" 
                    alt="Error 404" 
                />
            </div>
        </>
        
    )
}

export default Error;