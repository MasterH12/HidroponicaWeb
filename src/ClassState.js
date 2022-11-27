import React from 'react';
import {Loading} from './Loading.js';

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            error: false,
            loading: false,
            value: ""
        }
    }
    
    checkSecurityCode(){
        this.setState({
            error: false,
            loading: true
        });

        //Validación
        setTimeout(() =>{
            this.setState({
                error: this.state.value != SECURITY_CODE,
                loading: false
            });            
        }, 2000);   
        
    }

    render(){
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
    
                <p>Ingrese código de seguridad</p>

                {(this.state.error && !this.state.loading) &&(
                    <p>Error: código incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}

                <input 
                    placeholder="Código de seguridad"
                    value= {this.state.value}
                    onChange={ (event) =>{
                        this.setState({value: event.target.value});
                    }}
                />
                <button
                    onClick={ () => this.checkSecurityCode() }
                >Comprobar</button>
            </div>
        );
    }

    
}

export{ ClassState };