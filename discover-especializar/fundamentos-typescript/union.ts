//Para que uma variável posso ser de mais de um tipo, utilizados o "|"

function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");