function buscarPorId(elementoId){
    let elementoHtml = document.getElementById(elementoId);
    return elementoHtml
}

function confuguracionBotones(elementoid){
    let botonOperador = buscarPorId(elementoid);
    console.log('id:', elementoid)
    console.log('boton:', botonOperador)
    
    botonOperador.addEventListener('click', function(){
        console.log('lolito')
        let cajaOperadores = buscarPorId('cajaDeOperadores');
        let valorBoton = botonOperador.textContent ;
        cajaOperadores.value = valorBoton;

    })
}

confuguracionBotones('botonSumar');
confuguracionBotones('botonRestar');
confuguracionBotones('botonMultiplicar');
confuguracionBotones('botonDividir');
confuguracionBotones('botonPotencia');
confuguracionBotones('botonRaizCuadra');
