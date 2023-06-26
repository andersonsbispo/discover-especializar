/**
 * Promise
 * 
 * A promessa de que algo irá acontecer
 * Poderá dar certou ou errado,
 * mas irá acontecer
**/

let aceitar = true;

console.log("Pedir Uber");

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve("Pedido aceito");
    }
        return reject("Pedido negado!");
});

promessa.then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Finalizado"));

console.log("Aguardando");