/*function composicao(fn1, fn2, fn3) {
    return function(valor) {
        return fn3(fn2(fn1(valor)));
    }
    
}*/

function composicao(...funcoes) {
    //currying (lazy evaluation)
    return function(valor) {
        return funcoes.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    }
    
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto){
    return `${texto}!!!!`;
}

function tornarLento(texto){
    return texto.split('').join(' ');
}


const exagerado = composicao(
        gritar,
        enfatizar,
        tornarLento
    );

const quaseExagerado = composicao(
    gritar,
    enfatizar
);

console.log(exagerado('Cuidado com o Buraco'));
console.log(exagerado('Para'));

console.log(quaseExagerado('Cuidado com o Buraco'));
console.log(quaseExagerado('Para'));

console.log(composicao(
    gritar,
    enfatizar,
    tornarLento
)('eita'));