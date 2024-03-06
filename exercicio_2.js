function sequencia_fibonacci(numero) {
  var n1 = 0;
  var n2 = 1;

  while (n1 <= numero) {
    if (n1 == numero) {
      return true;
    }
    n1 = n2;
    n2 = n1 + n2;
  }
  return false;
}

var numero_escolhido = 64; //qualquer numero q eu quiser.

if (sequencia_fibonacci(numero_escolhido)) {
  console.log(`O número ${numero_escolhido} pertence a sequencia Fibonacci`);
} else {
  console.log(
    `O número ${numero_escolhido} não pertence a sequencia Fibonacci`
  );
}
