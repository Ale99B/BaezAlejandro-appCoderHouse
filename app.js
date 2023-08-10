let nombre = '';
let telefono = '';


console.log(`Su nombre es: ${pedirNombre(nombre)} y su n° de teléfono es: ${pedirTelefono(telefono)}`);

function pedirNombre(nombre) {
    nombre = prompt('Ingrese su nombre');
    while (Number(nombre) || nombre == '') {
        if (nombre == '') {
            nombre = prompt('No puede estar vacío, ingrese su nombre');
        }else{
            nombre = prompt('Su nombre no puede contener números, ingrese su nombre');
        } 
    }
    return nombre;
}

function pedirTelefono(telefono) {
    telefono = prompt('Ingrese su n° de telefono');
    while (!Number(telefono) || telefono == '') {
        if(!Number(telefono) && telefono != ''){
            telefono = prompt('Debe ingresar números, ingrese su telefono');
        }else{
            telefono = prompt('No puede estar vacío, ingrese su telefono');
        }      
    }    
    return telefono;
}
