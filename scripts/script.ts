console.log('Hello, World!');

let variable: 'coche' | 'automovil' | 'moto' | number = 'coche';
variable = 23;
console.log('variable', variable);

const hobbies: string[] = ['correr', 'pintar', 'cantar'];
const hobbiesExtra=['bailar', 'otro','mas'];
const hobbies2 = hobbies;
const hobbies3 = [...hobbies];
hobbies.push(...hobbiesExtra);
console.log('hobbies2', hobbies2);
console.log('hobbies3', hobbies3);

let person: {
    nombre?: string,
    apellido?: string,
    edad?: number
} = {
    nombre: 'paco',
    apellido: 'perez',
    edad: 18
}

let person2={nombre:'Luis', apellido:'Martinez'}
person = person2

function saluda({nombre}: {nombre: string}){
    saluda(nombre);
}
function saluda2({nombre}: {nombre: string}){
    saluda(nombre);
}

saluda(person.nombre);
saluda2(person);

