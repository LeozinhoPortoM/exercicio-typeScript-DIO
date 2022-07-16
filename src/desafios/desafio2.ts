// Como podemos melhorar o esse código usando TS? 

let pessoa1: { nome: string, idade: number, profissao: string } = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}

let pessoa2: { nome: String, idade: Number, profissao: String } = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

interface Funcionario {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa3: Funcionario = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}