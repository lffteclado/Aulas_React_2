import React from 'react';
import Filho from './Filho'

export default props =>
    <div>
        {/*Todas as propriedades do Pai passado para os filhos */}
        <Filho {...props}><strong>João</strong></Filho>

        {/*Passa uma propriedade especifica do Pai para o filho */}
        <Filho sobreNome={props.sobreNome}><strong>Maria</strong></Filho>

        <Filho sobreNome="Silva"><strong>Pedro</strong></Filho>
    </div>