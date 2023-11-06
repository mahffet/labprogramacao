import {Pessoa} from './Pessoa.js';
export class Servidor extends Pessoa{
    //atributos de Servidor
    #ra
    #horario
    #email

    //construtor 
constructor(nome, cpf, telefone, ra, horario, email){
    super(nome, cpf, telefone)
    this.#ra = ra
    this.#horario = horario
    this.#email = email 
}
//encapsulamento
getRa(){
    return this.#ra
}

setRa(ra){
    this.#ra = ra 
}

getHorario(){
    return this.#horario
}

setHorario(horario){
    this.#horario = horario
}

getEmail(){
    return this.#email
}

setEmail(){
    this.#email = email
}

mostrarDadosS(){
    super.mostrarDadosP
    console.log("Ra: " + this.#ra);
    console.log("Horario: " + this.#horario);
    console.log("Email: " + this.#email);
}
}

