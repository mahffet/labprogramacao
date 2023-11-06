//criando classe chamado: Bichinho

export class Bichinho{
    //atributos de bichinho
    #nome
    #pontosDeVida
    #esquiva

    //construtor para a classe
    constructor(nome){
        this.#nome = nome
        this.#pontosDeVida = 10
        this.#esquiva = 1
    }

    //encapsulamento dos atributos
 // getNome retorna como this.#nome e setNome muda o "this.#nome" para nome, e mesma coisa com os outros.
    getNome(){
        return this.#nome
    }
    setNome(nome){
        this.#nome = nome
    }

    getPontosDeVida(){
        return this.#pontosDeVida
    }
    setPontosDeVida(pontosDeVida){
        this.#pontosDeVida = pontosDeVida
    }

    getEsquiva(){
        return this.#esquiva
    }
    setEsquiva(esquiva){
        this.#esquiva = esquiva
    }

    //método da classe Bichinho
    // sauação: mostra uma tabela po exemplo: "olá!! bichinho"
    saudacao(){
        console.log("olà!! " + this.#nome);
        console.log("Seus Pontos de Vida:" + this.#pontosDeVida);
        console.log("Esquiva:" + this.#esquiva);

    }

}