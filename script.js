// nessa função recursiva, a problemática inicial é multiplicar 2 números, se o número 1 ou o número 2 forem iguais a zero, a função retornará zero e finalizará. Se não forem igual a zero a função irá pegar o valor do num1 e multiplicar pelo valor do num2. Para exibir o resultado, iremos criar uma variável resultado que recebera a função e mostrará no console o resultado.

function multiplicar(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  } else {
    return `A multiplicação dos valores é: ${num1 * num2} `;
  }
}

let resultado = multiplicar(1, 5);
console.log(resultado);
