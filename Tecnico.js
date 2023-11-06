import {Servidor} from './Servidor.js';
export class Tecnico extends Servidor{
    //atributos de tec
    #setor
    #funcao                   
    #titulo

    //construtor 
constructor(nome, cpf, telefone, ra, horario, email, setor, funcao, titulo){
    super(nome, cpf, telefone, ra, horario, email)
    this.#setor = setor
    this.#funcao = funcao
    this.#titulo = titulo 
}
//encapsulamento
getSetor(){
    return this.#setor
}

setSetor(setor){
    this.#setor = setor 
}

getFuncao(){
    return this.#funcao
}

setFuncao(funcao){
    this.#funcao = funcao
}

getTitulo(){
    return this.#titulo
}

setTitulo(titulo){
    this.#titulo = titulo
}

mostrarDadosS(){
    super.mostrarDadosS
    console.log("setor: " + this.#setor);
    console.log("Função: " + this.#funcao);
    console.log("Titulo: " + this.#titulo);
}
}

