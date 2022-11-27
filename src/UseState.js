import React from 'react';

const SECURITY_CODE = "paradigma";

function UseState(props){
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    });


    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Ingrese código de seguridad</p>
            {state.error && (
                <p>Error: código incorrecto</p>
            )}
            {state.loading && (
                <p>Cargando ...</p>
            )}
            <input 
                placeholder="Código de seguridad"
                value={state.value}
                onChange={ (event) => {
                    setState({...state, value: event.target.value});
                }}
            />
            <button
                onClick={ () => setState({...state, loading: true})}
            >Comprobar</button>
        </div>
    );
}

export{ UseState };