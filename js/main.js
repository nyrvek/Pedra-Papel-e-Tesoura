const escolhaComputadorDisplay = document.getElementById("escolhaDoCOmputador");
const escolhadoUsuarioDisplay = document.getElementById("escolhaDoUsuario");
const resultadoDisplay = document.getElementById("resultado");
const possiveisEscolhas = document.querySelectorAll("button");
let escolhaDoCOmputador;
let escolhaDoUsuario;
let resultado;

possiveisEscolhas.forEach((escolhapossivel) =>
  escolhapossivel.addEventListener("click", (e) => {
    escolhaDoUsuario = e.target.id;
    escolhadoUsuarioDisplay.innerHTML = escolhaDoUsuario;

    gerandoEscolha();
    obterResultado();
  })
);

function gerandoEscolha() {
  const numeroGerado = Math.floor(Math.random() * 3) + 1;
  if (numeroGerado === 1) {
    escolhaDoCOmputador = "Pedra";
  } else if (numeroGerado === 2) {
    escolhaDoCOmputador = "Papel";
  } else {
    escolhaDoCOmputador = "Tesoura";
  }
  escolhaComputadorDisplay.innerHTML = escolhaDoCOmputador;
}
function obterResultado() {
  if (escolhaDoCOmputador === escolhaDoUsuario) {
    resultado = "Empate";
  } else if (escolhaDoCOmputador === "Pedra" && escolhaDoUsuario === "Papel") {
    resultado = "Você venceu";
  } else if (
    escolhaDoCOmputador === "Pedra" &&
    escolhaDoUsuario === "Tesoura"
  ) {
    resultado = "Você perdeu";
  } else if (escolhaDoCOmputador === "Papel" && escolhaDoUsuario === "Pedra") {
    resultado = "Você perdeu";
  } else if (
    escolhaDoCOmputador === "Tesoura" &&
    escolhaDoUsuario === "Pedra"
  ) {
    resultado = "Você venceu";
  } else if (
    escolhaDoCOmputador === "Tesoura" &&
    escolhaDoUsuario === "Papel"
  ) {
    resultado = "Você perdeu";
  } else if (
    escolhaDoCOmputador === "Papel" &&
    escolhaDoUsuario === "Tesoura"
  ) {
    resultado = "Você venceu";
  } else {
    resultado = "";
  }
  resultadoDisplay.innerHTML = resultado;
}
