import React, { useState } from "react";

export default (props) => {
    const [nome, setNome] = useState('Pedro')
    return(
        <>
        <h1>{nome}</h1><br/>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)}
            />
        </>
    );
};