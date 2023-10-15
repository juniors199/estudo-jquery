$(function () {
  let timerInicial = $(".timer").text();
  let campo = $("#campoTexto");

  attTamanhoFrase();
  contadores();
  cronometro();

  $("#btn-reiniciar").click(function () {
    reiniciaJogo();
  });

  function attTamanhoFrase() {
    let frase = $(".texto").text();
    let numeroPalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numeroPalavras);
  }

  function contadores() {
    campo.on("input", function () {
      let conteudo = campo.val();
      let qtdPalavras = conteudo.split(/\S+/).length - 1;
      let qtdCaracteres = conteudo.length;

      $("#contadorPalavras").text(qtdPalavras);
      $("#contadorCaracteres").text(qtdCaracteres);
    });
  }

  function cronometro() {
    let timer = $(".timer").text();
    campo.one("focus", function () {
      var cronometroId = setInterval(() => {
        timer--;
        $(".timer").text(timer);
        if (timer < 1) {
          campo.attr("disabled", true);
          clearInterval(cronometroId);
          campo.addClass("campo-disabled");
        }
      }, 1000);
    });
  }

  let frase = $(".texto").text();

  campo.on("input", function () {
    let digitado = campo.val();
    let compara = frase.substr(0, digitado.length);
    console.log("Digitado: " + digitado);
    console.log("Frase C.: " + compara);

    if (digitado == compara) {
      // console.log("certo");
    } else {
      // console.log("errado");
    }
  });

  function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    $(".timer").text(timerInicial);
    cronometro();
    campo.removeClass("campo-disabled");
  }
}); // Document Ready
