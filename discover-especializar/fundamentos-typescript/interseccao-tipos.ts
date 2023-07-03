//União de tipos

type User = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: "Anderson Bispo",
    nickname: "TacheedKun",
    level: 99,
}