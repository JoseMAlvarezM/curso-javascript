const edad = 17;
const tieneEntrada = true
const tienePermiso = true

const permitirAcceso = edad >= 18 && tieneEntrada
const permitirAcceso2 = (edad >= 18 && tieneEntrada) || (tieneEntrada && tienePermiso)

console.log(permitirAcceso);
console.log(permitirAcceso2);
