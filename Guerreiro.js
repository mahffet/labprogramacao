//criando classe chamado: guerreiro

export class Guerreiro {
    //atributos de Guerreiro

    #nome
    #pontosDeVida
    #quantidadesDeFlechas
    #precisao

    //construtor
    constructor(nome){
        this.#nome = nome
        this.#pontosDeVida = 100
        this.#quantidadesDeFlechas = 0
        this.#precisao = 10

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

    getQuantidadeDeFlechas(){
        return this.#quantidadesDeFlechas
    }
    setQuantidadeDeFlechas(qntdeFlechas){
        this.#quantidadesDeFlechas = qntdeFlechas
    }

    getPrecisao(){
        return this.#precisao
    }
    setPrecisao(precisao){
        this.#precisao = precisao
    }

    //métodos da classe
    //pequenas quantidades de galhos/penas somando a quantidade de folhas
    produzirFlechas(pequenosGalhosEpenas){
       this.#quantidadesDeFlechas = pequenosGalhosEpenas + qntdeFlechas

    }
    // se a quantidade de flechas dor maior ou igual a 0 retorna true, se não for maior retorna false
    temFlechas(){
        if ( qntdeFlechas >= 0 ) {
            return true
        } else {
            return false
        }
    }
// se a quantidade de flechas for maior que o alvo, consegue matar e ganha pontos e vida
    matarBichnho(alvo){
        if (qntdeFlechas > alvo) {
            return " seus pontos de vida aumentaram!"
        }

    }
    // sauação: mostra uma tabela po exemplo: "olá!! guerreiro"
    saudacao(){
        console.log("olà!! " + this.#nome);
        console.log("Pontos de Vida:" + this.#pontosDeVida);
        console.log("Precisão:" + this.#precisao);
        console.log("quantidades De Flechas:" + this.#quantidadesDeFlechas);
      
    }
}