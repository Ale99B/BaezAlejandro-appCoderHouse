let nombre = '';
let telefono = '';
nombre = prompt('Ingrese su nombre');
while (Number(nombre) || nombre == '') {
    if (nombre == '') {
        nombre = prompt('No puede estar vacío, ingrese su nombre');
    }else{
        nombre = prompt('Su nombre no puede contener números, ingrese su nombre');
    }
}


telefono = prompt('Ingrese su n° de telefono');
while (!Number(telefono) || telefono == '') {
    if(!Number(telefono) && telefono != '') {
        telefono = prompt('Debe ingresar números, ingrese su telefono');
    }else{
        telefono = prompt('No puede estar vacío, ingrese su telefono');
    }
}

console.log('Su nombre es: ${nombre} y su n° de telefono es: ${telefono}');