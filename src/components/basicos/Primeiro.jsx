import React from 'react'
//1º Exemplo
/*function Primeiro(){
    return(
        <div>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um Componente React</h2>
        </div>
    );
}

export default Primeiro;*/

//2º Exemplo Não se pode passar dois elementos no retorno da função <h1> e <h2> por exemplo
/*export default function Primeiro(){
    return(
        <>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um Componente React</h2>
        </>
    );
}*/

//3º Exemplo
/*export default function (){
    return(
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um Componente React</h2>
        </React.Fragment>
    );
}*/

//4º Exemplo Arrow function
/*export default () => {
    return(
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um Componente React</h2>
        </React.Fragment>
    );
}*/

//5º Exemplo Arrow function
export default () => 
        <>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um Componente React</h2>
        </>