import React, {useState} from 'react';
import Sub from './Sub'

export default (props) =>{

    const [label, setLabel] = useState('Valor')
    const [num, setNum] = useState(0)

    function quandoClicar(ValorGerado, texto) {
        setNum(ValorGerado)
        setLabel(texto)
    }

    return (
        <div>
        <h4>{label}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};

/* Parei 24:55 https://www.youtube.com/watch?v=GJ8Vm-h0V8I&list=PLdPPE0hUkt0q7bwgAlk6UimtBKoNfM1tw&index=2&t=143s */