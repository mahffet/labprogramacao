import {Servidor} from './Servidor.js';
export class Professor extends Servidor{
    //atributos de Prof
    #baterPonto
    #aulas
    #materia

    //construtor 
constructor(nome, cpf, telefone, ra, horario, email, baterPonto, aulas, materia){
    super(nome, cpf, telefone, ra, horario, email)
    this.#baterPonto = baterPonto
    this.#aulas = aulas
    this.#materia = materia 
}
//encapsulamento
getBaterPonto(){
    return this.#baterPonto
}

setBaterPonto(baterPonto){
    this.#baterPonto = baterPonto 
}

getAulas(){
    return this.#aulas
}

setAulas(aulas){
    this.#aulas = aulas
}

getMateria(){
    return this.#materia
}

setMateria(materia){
    this.#materia = materia
}

mostrarDadosS(){
    super.mostrarDadosS
    console.log("Bater ponto: " + this.#baterPonto);
    console.log("Aulas: " + this.#aulas);
    console.log("Materia: " + this.#materia);
}
}

