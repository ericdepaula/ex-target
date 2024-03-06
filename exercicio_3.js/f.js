var numeros = [2];

for (let index = 1; index <= 10; index++) {
  numeros.push(numeros[index - 1] + 2 * index);
}
console.log(numeros);
