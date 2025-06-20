const nums = [1, 2, 3, 4, 5];

const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];

const primeiraLetra = texto => texto[0];

const letras = nomes.map(primeiraLetra);

console.log(nomes, letras);

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const nomesCarrinho = carrinho.map(el => el.nome);

console.log(nomesCarrinho);

const totalCarrinho = carrinho.map(el => el.qtde * el.preco);

console.log(totalCarrinho);