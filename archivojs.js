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

function botonNumeroAlazar(){
    let botonRamdom  = buscarPorId('botonNumeroRandom');
    
    botonRamdom.addEventListener('click', function(){
        let resultado = Math.random() * 10
        let cajaResultado = buscarPorId('resultado');
        cajaResultado.value = resultado
    
    })

    
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
 

function botonReset(){
    let elementoBotonReset = buscarPorId('reset')

    elementoBotonReset.addEventListener('click', function(){
        location.reload();    })
}

function redondearHaciaArriba() {
    let botonRedondearHaciaArriba = buscarPorId('botonCeil');
  
    botonRedondearHaciaArriba.addEventListener('click', function() {
      let cajaResultado = buscarPorId('resultado');
      let resultado = parseFloat(cajaResultado.value);
      let resultadoRedondeado = Math.ceil(resultado);
      cajaResultado.value = resultadoRedondeado;
    });
  }

function redondearHaciaArriba() {
    let botonRedondearHaciaArriba = buscarPorId('botonCeil');
  
    botonRedondearHaciaArriba.addEventListener('click', function() {
      let cajaResultado = buscarPorId('resultado');
      let resultado = parseFloat(cajaResultado.value);
      let resultadoRedondeado = Math.ceil(resultado);
      cajaResultado.value = resultadoRedondeado;
    });
  }

function redondearHaciaAbajo() {
    let botonRedondearHaciaAbajo = buscarPorId('botonFloor');
  
    botonRedondearHaciaAbajo.addEventListener('click', function() {
      let cajaResultado = buscarPorId('resultado');
      let resultado = parseFloat(cajaResultado.value);
      let resultadoRedondeado = Math.floor(resultado);
      cajaResultado.value = resultadoRedondeado;
    });
  }



configurandoEventListener('botonSumar', 'click', suma);
configurandoEventListener('botonRestar', 'click', resta);
configurandoEventListener('botonMultiplicar', 'click', multiplicar);
configurandoEventListener('botonDividir', 'click', divicion);
configurandoEventListener('botonPotencia', 'click', potencia);
configurandoEventListener('botonRaizCuadra', 'click', raizCuadrada);
botonNumeroAlazar()
redondearHaciaArriba()
redondearHaciaAbajo()

confuguracionBotones('botonSumar')
confuguracionBotones('botonRestar')
confuguracionBotones('botonMultiplicar')
confuguracionBotones('botonDividir')
confuguracionBotones('botonRaizCuadra')

botonReset()


