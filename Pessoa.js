//classe: Pessoa
export class Pessoa{
//atributos de Pessoa
    #nome
    #cpf
    #telefone

    //construtor 
constructor(nome, cpf, telefone){
    this.#nome = nome
    this.#cpf = cpf
    this.#telefone = telefone 
}
//encapsulamento
getNome(){
    return this.#nome
}

setNome(nome){
    this.#nome = nome 
}

getCpf(){
    return this.#cpf
}

setCpf(cpf){
    this.#cpf = cpf
}

getTelefone(){
    return this.#telefone
}

setTelefone(){
    this.#telefone = telefone
}

mostrarDadosP(){
    console.log("Nome: " + this.#nome);
    console.log("Cpf: " + this.#cpf);
    console.log("Telefone: " + this.#telefone);
}
}
 
