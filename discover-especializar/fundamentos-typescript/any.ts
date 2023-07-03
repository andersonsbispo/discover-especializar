// Variável Any aceita qualquer tipo, utilizar essa variável faz perder o sentido do uso do TypeScript

let info: any;

info = [1,2,3];
info = "Anderson";
info = true;
info = 10.50;

function sum(a: any, b: any) {
    return a + b;
}

sum(1, 3); // 4
sum("1", 3); // 13