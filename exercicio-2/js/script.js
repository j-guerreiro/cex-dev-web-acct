const botoesTeclado = document.querySelector( ".conteiner-teclado" );

const display = document.querySelector( ".conteiner-display");

const botao = document.querySelector(".conteiner-botao");

botoesTeclado.addEventListener( 'click', event => {

    if ( !event.target.closest(' button ')) return

    const valor = event.target;
    const valorBotao = valor.textContent;
    const valorDisplay = display.textContent;
    display.textContent = valorBotao;

    if ( valorDisplay == 0 ) {
        display.textContent = valorBotao;
    }
    else {
        display.textContent = valorDisplay + valorBotao;
    }

    

});

// CLEAR
function limparVisor () {
    //limpa o visor
}

// ÷
function dividir( num1, num2 ) {
    //recebe dois valores divide o primeiro pelo segundo e retorna o resultado
    var resultado = num1 / num2 ;
    return resultado;
    
}

// X
function multiplicar( num1, num2 ) {
    //recebe dois valores, multiplica o primeiro pelo segundo e retorna o resultado
    var resultado = num1 * num2 ;
    return resultado;
}

// -
function subtrair( num1, num2 ) {
    //recebe dois valores, subtrai o primeiro pelo segundo e retorna o resultado
    var resultado = num1 - num2 ;
    return resultado;
}

// +
function somar( num1, num2 ) {
    //recebe dois valores, subtrai o primeiro pelo segundo e retorna o resultado
    var resultado = num1 + num2 ;
    return resultado;
}

// =
function igual( valor ) {
    //recebe o retorno de uma operação de dois valores e printa o resultado no visor
    return resultado;
}