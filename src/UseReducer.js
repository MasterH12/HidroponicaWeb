import React from 'react';

const SECURITY_CODE = "paradigma";

function UseReducer(props){
    const initialState = {
        error: false,
        loading: false,
        value: ''
    };

    const reducerObject = (state, payload) => ({
        "error": {
            ...state,
            error: true,
            loading: false,
        },
        "check":{
            ...state,
            error: false,
            loading: true,
        },
        "success":{
            ...state,
            error: false,
            loading: false,
        },
        "write":{
            ...state,
            value: payload,
        },
    });

    

    const reducer = (state, action) => {
        console.log(action);
        if(reducerObject(state, action.payload)[action.type]){
            return reducerObject(state, action.payload)[action.type];
        }else{
            console.log("----------> ACTION TYPE DOESN'T EXISTS <----------")
            return state;
        }
    };

    const[state, dispatch] = React.useReducer(reducer, initialState);

    function checkSecurityCode(){
        dispatch({type:'check'});

        setTimeout(() =>{
            console.log(SECURITY_CODE, " == ", state.value);
            if(SECURITY_CODE != state.value){
                dispatch({type:'error'});
            }else{
                dispatch({type:'success'});
            }
        }, 2000);
    }

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
                    
                    dispatch({
                        type:'write',
                        payload: event.target.value
                    });

                    dispatch({
                        type:'success',
                    });
                    
                }}
            />
            <button
                onClick={ () => checkSecurityCode()}
            >Comprobar</button>
        </div>
    );

}
export{ UseReducer }