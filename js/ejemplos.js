var name = prompt("¿Cómo te llamas?")
var lastname = prompt("¿Cuál es tu apellido?")
alert("Hola " + name + " " + lastname)

var manzana = parseInt(prompt ("¿Cuánto cuesta una manzana?"))
var pera = parseInt(prompt ("¿Cuánto cuesta una pera?"))
alert(manzana + pera)

var year = parseInt(prompt("¿En qué año naciste?"))
var age = parseInt(2019 - year)
var days = age * 365
alert(`Tengo ${days} días de haber nacido`)

var base = parseInt(prompt("¿Cuál es la base del rectángulo?"))
var altura = parseInt(prompt("¿Cuál es la altura del rectángulo?"))
var area = (base*altura)
alert(`El área del rectángulo es ${area}`)

var base = parseInt(prompt("¿Cuál es la base del triángulo?"))
var altura = parseInt(prompt("¿Cuál es la altura del triángulo?"))
var area = (base * altura) / 2
alert(`El área del triángulo es ${area}`)

if (10 > 8) {
    // Verdadero
    alert("Si es mayor")
} else {
    // falso
    alert("No es mayor")
}

var edad = parseInt(prompt("¿Cuál es tu edad?"))
var mayor = 18
if (edad < mayor) {
    alert("No puedes comprar alcohol")
} else {
    alert("Si puedes comprar alcohol ;)")
}

for (let i = 0; i < 10; i++) {
    alert("Hola:)")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

var intervalo = parseInt(prompt("Desde qué numero quieres contar?"))
var conteo = parseInt(prompt("¿Hasta qué numero quieres contar?"))
for (let i = intervalo; i <= conteo; i++) {
    console.log(i)
}

var numero = parseInt(prompt("Qué numero quieres multiplicar?"))
for (let i = 1; i <= 20; i++) {
    console.log(`${numero} x ${i} = ${i*numero}`)
}
