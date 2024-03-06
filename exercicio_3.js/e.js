var numeros = [1, 1];

for (let index = 2; index <= 10; index++) {
  numeros.push(numeros[index - 1] + numeros[index - 2]);
}
console.log(numeros);
