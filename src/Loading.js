import React from 'react';

class Loading extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        return (
            <div>
                <p>Cargando ...</p>
            </div>
        );
    }
}
export {Loading};