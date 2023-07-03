//Declarar que um tiop é opcional em um objeto utilizado o "?"

type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

let newUser: User = {
    name: "Anderson",
    email: "anderson@anderson.com",
    age: 25,
}