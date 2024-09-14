function generarTicket() {
    const ticket = Math.floor(Math.random() * (3000 - 1999 + 1)) + 1999;
    alert('Tu ticket de compra es: ' + ticket);
}

function canjearCodigo(tipo) {
    const codigo = document.getElementById('codigo').value;
    const mensaje = document.getElementById('mensaje');
    const planes = document.querySelectorAll('.plan');

    // Directorios de códigos válidos
    const codigosValidosMTA = {
        'JKMI': true,
        'ABCD': true,
        'XYZ123': true
    };

    const codigosValidosMinecraft = {
        'MINE1': true,
        'MINE2': true
    };

    const codigosValidosSAMP = {
        'SAMP1': true,
        'SAMP2': true
    };

    let codigosValidos;

    if (tipo === 'mta') {
        codigosValidos = codigosValidosMTA;
    } else if (tipo === 'minecraft') {
        codigosValidos = codigosValidosMinecraft;
    } else if (tipo === 'samp') {
        codigosValidos = codigosValidosSAMP;
    }

    const codigoUsado = localStorage.getItem('codigoUsado');

    if (!codigosValidos[codigo]) {
        mensaje.textContent = 'Este código no existe.';
        mensaje.style.color = 'red';
    } else if (codigoUsado === codigo) {
        mensaje.textContent = 'El código ya ha sido usado.';
        mensaje.style.color = 'red';
    } else if (codigosValidos[codigo]) {
        localStorage.setItem('descuentoAplicado', 'true');
        localStorage.setItem('codigoUsado', codigo);
        mensaje.textContent = '¡Código canjeado con éxito!';
        mensaje.style.color = 'green';

        aplicarDescuento(planes);
    } else {
        mensaje.textContent = 'Código inválido. Inténtalo de nuevo.';
        mensaje.style.color = 'red';
    }
}

function aplicarDescuento(planes) {
    planes.forEach(plan => {
        const precioElement = plan.querySelector('p:last-child');
        const precioTexto = precioElement.textContent.match(/💳 PRECIO \$(\d+(\.\d+)?)/);
        if (precioTexto) {
            const precioOriginal = parseFloat(precioTexto[1]);
            const precioDescuento = (precioOriginal * 0.9).toFixed(2); // 10% de descuento
            precioElement.textContent = `💳 PRECIO $${precioDescuento} (Descuento aplicado)`;
        }
    });
}

window.onload = function() {
    const planes = document.querySelectorAll('.plan');
    if (localStorage.getItem('descuentoAplicado') === 'true') {
        aplicarDescuento(planes);
    }
}

function mostrarOpciones() {
    document.getElementById('opciones').style.display = 'flex';
}

window.onload = function() {
    const planes = document.querySelectorAll('.plan');
    if (localStorage.getItem('descuentoAplicado') === 'true') {
        aplicarDescuento(planes);
    }
}

function mostrarOpciones() {
    document.getElementById('opciones').style.display = 'flex';
}









