function calcularIMC () {
    const form = document.querySelector('.form');
    const resultadoCalculo = document.querySelector('.resultadoCalculo');

    function recebeEventoForm (evento) {
        evento.preventDefault();
    
        const inputPeso = form.querySelector('.peso');
        const inputAltura = form.querySelector('.altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
    
        const calculo = peso / (altura * altura);
        
        if (calculo < 18.5) {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Abaixo do peso)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }else if (calculo > 18.5 && calculo < 24.9) {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Peso normal)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }else if (calculo > 25.9 && calculo < 29.9) {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Sobrepeso)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }else if (calculo > 30 && calculo < 34.9) {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 1)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }else if (calculo > 35 && calculo < 39.9) {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 2)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }else {
            resultadoCalculo.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 3)</p>`;
            resultadoCalculo.style.background = "#40E0D0";
        }

    }

    form.addEventListener('submit', recebeEventoForm);
}

calcularIMC();