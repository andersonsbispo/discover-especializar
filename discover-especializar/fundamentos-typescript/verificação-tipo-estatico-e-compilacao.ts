function showTicket(user: string | null, ticket: number) {
    console.log(`Olá ${user ?? "Usuário Padrão"}. Seu número de bilhete é ${ticket}.`);
}

showTicket("Anderson Bispo", 115);