import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import Card from './layout/Card'
import './App.css'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './layout/Repeticao'
import Condicional from './layout/Condicional'
import Pai from './comunicacao/direta/Pai'
import Super from './comunicacao/indireta/Super'
import Input from './form/input'
import Contador from './contador/contador'
import MegaSena from './megaSena/mega'


export default props => (
<div className="App">
<h1>Fundamentos React</h1>
<div className="Cards">
<Card titulo='#10 - Numeros Mega Sena' color='#9cb999'>
    <MegaSena qtdNumero={8}></MegaSena>
</Card>
<Card titulo='#09 - Contador' color='#0fff9f'>
    <Contador valor={10} passo={5}></Contador>
</Card>
<Card titulo='#08 - Input' color='#9c0f5f'>
    <Input></Input>
</Card>
<Card titulo="#07 - Comunicação Indireta" color="#7bc043">
    <Super></Super>
</Card>
<Card titulo="#06 - Comunicação Direta" color="#dec3c3">
    <Pai sobreNome="Ferreira"></Pai>
</Card>
<Card titulo="#05 - Condicional V1" color="#FA6900">
    <Condicional numero={151} />    
</Card>
<Card titulo="#04 - Repetição" color="#F95335">
    <Repeticao />    
</Card>
<Card titulo="#03 - Componente com Parametro" color="#50A3A4">
    <ComParametro titulo="Epa"/>
    <ComParametro titulo="Opa"/>
</Card>
<Card titulo="#02 - Componente com Filhos" color="#f6abb6">
<ComFilhos>
    <ul>
        <li>Ana</li>
        <li>Davi</li>
        <li>Nayene</li>
        <li>Luis</li>
    </ul>
</ComFilhos>/
</Card>
<Card titulo="#01 - Primeiro Componente" color="#651e3e">
    <Primeiro />    
</Card>
</div>
</div>
);