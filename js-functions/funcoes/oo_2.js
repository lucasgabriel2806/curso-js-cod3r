class Produto {

    constructor(nome, preco, desc = 0.5) {

        // Inicializando as variáveis que foram 
        // passadas na construção do meu objeto

        this.nome = nome;

        this._preco = preco;

        this.desc = desc;

    }

    get nome() {

        return `Produto: ${this._nome}`;

    }

    set nome(novoNome) {

        this._nome = novoNome.toUpperCase();

    }

    get preco() {

        return this._preco;

    }

    set preco(novoPreco) {

        if(novoPreco >= 0) {

            this._preco = novoPreco;

        }

    }

    // Com o uso do get, eu não quero 
    // mais chamar a função como função,
    // mas como atributo, mas na verdade
    // o que está sendo chamado por trás é uma função.
    get precoFinal() {

        return this.preco * (1 - this.desc);

    }

}

const p1 = new Produto('Caneta', 10);

// p1.nome = 'caneta'

p1.preco = -20;

console.log(p1.nome);

console.log(p1.preco);

const p2 = new Produto('Geladeira', 10000, 0.8);

console.log(p2.preco);

console.log(p2.precoFinal);