// eslint-disable-next-line no-undef, no-unused-vars
const btnMostrar = document.querySelector('#botao');

// eslint-disable-next-line no-undef
botao.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  const kg = document.getElementById('kg').value;
  // eslint-disable-next-line no-undef
  const altura = document.getElementById('altura').value;
  const calculo = kg / (altura * altura);
  // eslint-disable-next-line no-undef
  const resposta = document.getElementById('resposta');

  if (calculo < 18.5) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de magreza`;
  } else if (calculo >= 18, 95 && calculo <= 24.9) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é Normal`;
  } else if (calculo >= 25 && calculo < 29.9) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Sobrepeso`;
  } else if (calculo >= 30 && calculo <= 34.9) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau I`;
  } else if (calculo >= 35 && calculo <= 39.9) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau II`;
  } else if (calculo > 40) {
    resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau III`;
  }
});
