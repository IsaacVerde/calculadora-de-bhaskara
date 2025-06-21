const form = document.getElementById("form-bhaskara");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
  //LEMBRAR SEMPRE QUE O CODIGO VAI DENTRO DA LISTA DE EVENTOS

  //PEGANDO VALORES DOS IMPUTS

  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);

  //CALCULANDO O DELTA

  const delta = b * b - 4 * a * c;

  //VERIFICANDO O DELTA

  if (delta < 0) {
    resultado.innerHTML = "Delta Negativo. Não Existem Raizes Reais";
    return;
  }
  //⚠️⚠️⚠️SE O DELTA FOR NEGATIVO ,MOSTRA UMA MENSAHEM DIZENDO QUE NAO DA PRA CALCULAR

  //CALCULANDO AS RAIZES
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  //⚠️⚠️ A TAG MATH.SQRT TIRA A RAIZ QUADRADA DE DELTA
  // O X1 E O X2 SAO AS FORMULAS DE BASKHARA PURO

  //EXIBIÇÃO DE RESULTADOS

  resultado.innerHTML = `
  <p>Δ = ${delta}</p>
  <p>x₁ = ${x1.toFixed(2)}</p>
  <p>x₂ =${x2.toFixed(2)}</p>
  `;

  //INNER HTML INSERE O CONTEUDO DO HTML DENTRO DO ESPAÇO DO RESULTADO
  //TO FIXED ARREDONDA OS NUMEROS COM DUAS CASAS DECIMAIS
  //A STRING DENTRO DO ASCENTO CRASEADO FICA MAIS FACIL PARA CONCATENAR
  //TRABALHAMOS COM ${VARIAVEIS} PARA INSERIR O VALOR DENTRO DA STRING

});
