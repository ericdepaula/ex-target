var numeros = [1]; //definindo os numeros impares.

for (let index = 1; index <= 10; index++) {
  numeros.push(numeros[index - 1] + 2);
}
console.log(numeros);