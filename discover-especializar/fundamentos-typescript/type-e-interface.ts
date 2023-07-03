//Tipo com Intercecção

type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

type TAcout = TUser & TPayment;

//Interface com Intersecção

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

interface IAcout extends IUser, IPayment{};