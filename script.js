/* // Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
valorBTC = document.querySelector('.valorBTC');

function precoBTC() {
  fetch('https://blockchain.info/ticker')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      valorBTC.innerText = ('R$ ' + json.BRL.buy).replace('.', ',');
    });
}

//setInterval(precoBTC, 1000 * 30);

precoBTC();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const jokes = document.querySelector('.jokes');
const btnJokes = document.querySelector('.btnJokes');

function jokesCN() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      jokes.innerText = json.value;
    });
}
btnJokes.addEventListener('click', jokesCN); */

async function puxarDados() {
  const dadosTeste = fetch('./dados.json');
  const clientesTeste = fetch('./clientes.json');

  const jsonDadosTeste = await (await dadosTeste).json();
  const jsonClientesTeste = await (await clientesTeste).json();
  console.log(jsonDadosTeste);
  console.log(jsonClientesTeste);
}
puxarDados();
