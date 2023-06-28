function buscarPorId(elementoId){
    let elementoHtml = document.getElementById(elementoId);
    return elementoHtml
}

function confuguracionBotones(elementoid){
    let botonOperador = buscarPorId(elementoid);
    
    botonOperador.addEventListener('click', function(){
        let cajaOperadores = buscarPorId('cajaDeOperadores');
        let valorBoton = botonOperador.textContent ;
        cajaOperadores.value = valorBoton;

    })
}

function suma (){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = numero1 + numero2;

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado

}

function resta (){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = numero1 - numero2;

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado

}

function multiplicar(){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = numero1 * numero2;

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado
}

function divicion(){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = numero1 / numero2;

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado
}

function potencia(){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = Math.pow(numero1, numero2);

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado
}

function raizCuadrada(){
    let numero1 = +buscarPorId('cajaEntrada1').value;
    let numero2 = +buscarPorId('cajaEntrada2').value;
    let resultado = Math.sqrt(numero1);

    let cajaResultado = buscarPorId('resultado');
    cajaResultado.value = resultado
    
}

function configurandoEventListener(idBotonReferencia, evento, funcion){
    let botonDeReferenciaOperacion  = buscarPorId(idBotonReferencia);

    botonDeReferenciaOperacion.addEventListener(evento, function(){
        imprimirResultado(funcion)
    })
}


function imprimirResultado(funcion) {
    let botonIgual = buscarPorId('botonIgual');
  
    botonIgual.addEventListener('click', funcion);
  }
 




configurandoEventListener('botonSumar', 'click', suma);
configurandoEventListener('botonRestar', 'click', resta);
configurandoEventListener('botonMultiplicar', 'click', multiplicar);
configurandoEventListener('botonDividir', 'click', divicion);
configurandoEventListener('botonPotencia', 'click', potencia);
configurandoEventListener('botonRaizCuadra', 'click', raizCuadrada);

confuguracionBotones('botonSumar')
confuguracionBotones('botonRestar')
confuguracionBotones('botonMultiplicar')
confuguracionBotones('botonDividir')
confuguracionBotones('botonRaizCuadra')





