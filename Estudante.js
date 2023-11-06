import {Pessoa} from './Pessoa.js';
export class Estudante extends Pessoa{

    //atributos de Pessoa
        #ra
        #matricula
        #curso
    
        //construtor 
    constructor(nome, cpf, telefone,ra, matricula, curso){
        super(nome, cpf, telefone)
        this.#ra = ra
        this.#matricula = matricula
        this.#curso = curso 
    }
    //encapsulamento
    getRa(){
        return this.#ra
    }
    
    setRa(ra){
        this.#ra = ra 
    }
    
    getMatricula(){
        return this.#matricula
    }
    
    setMatricula(matricula){
        this.#matricula = matricula
    }
    
    getCurso(){
        return this.#curso
    }
    
    setCurso(){
        this.#curso = curso
    }
    
    mostrarDadosE(){
        super.mostrarDadosP()
        console.log("Ra: " + this.#ra);
        console.log("Matricula: " + this.#matricula);
        console.log("Curso: " + this.#curso);
    }
    }
