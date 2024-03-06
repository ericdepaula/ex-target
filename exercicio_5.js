var texto = "Hello, World!";
var texto_invertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    texto_invertido += texto[i];
}

console.log(`Original: ${texto}`);
console.log(`Invertida: ${texto_invertido}`);
