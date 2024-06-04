//1.BELLO
var bonito = prompt("1. LA REALIDAD DE LA VIDA - ¿Eres bellísimo(a)? Responde 'si' o 'no'")
if (bonito === "si")
{
    alert ("Ciertamente, tas picioso o piciosa")
}
else if (bonito === "no")
{
   alert ("Mmmmm, no te creo")
} 
else 
{
    alert ("No respondiste como se indicó. Además de bello, eres una persona necia")
}

//2.NUMERO DIVISIBLE ENTRE DOS
var numeroDivisible = prompt("2. NUMERO DIVISIBLE ENTRE DOS - Teclea un número")
var digitoDivisible = parseInt(numeroDivisible)
if (digitoDivisible % 2 === 0)
{
    alert("Este número es divisible entre 2")
}
else 
{
    alert("Este número no es divisible entre 2")
}

//3.PROMPT PAR
var numeroPar = prompt("3. NUMERO PAR O IMPAR - Escribe cualquier número")
var digitoPar = parseInt(numeroPar)
if (digitoPar % 2 === 0)
{
    alert("Este número es par")
}
else 
{
    alert("Este número NO es par")
}

//4.NUMERO DE CLIENTE
var numCliente = prompt("4. NUMERO DE CLIENTE - Escribe tu número de cliente aquí")
if (numCliente === "1000")
{
    alert("¡FELICIDADES! ¡¡Has ganado un premio!!")
}
else
{
    alert("Lo sentimos, sigue participando.")
}

//5.QUÉ NÚM ES MENOR, SIN IGUALES
var n1 = prompt("5. NÚMERO MENOR - Okay, continuamos. Escribe cualquier número")
var n2 = prompt("Ahora escribe otro número aquí, el que tú gustes.")
var menor1 = parseInt(n1)
var menor2 = parseInt(n2)
if (menor1>menor2)
{
    alert(""+menor2+" es menor que "+menor1+"")
}
else if (menor1<menor2)
{
    alert(""+menor1+" es menor que "+menor2+"")
}

//6.QUÉ NÚM ES MAYOR, CON POSIBLES IGUALES
var num1 = prompt("6. NÚMERO MAYOR - Okay, continuamos. Escribe cualquier número")
var num2 = prompt("Ahora escribe otro número aquí, el que tú gustes.")
var mayor1 = parseInt(num1)
var mayor2 = parseInt(num2)
if (mayor1>mayor2)
{
    alert(""+mayor1+" es mayor que "+mayor2+"")
}
else if (mayor1<mayor2)
    {
        alert(""+mayor2+" es mayor que "+mayor1+"")
    }
else if (mayor1=mayor2)
{
    alert("Ambos números ingresados son iguales ^_^")
}

//7.MENSAJE DEPENDIENDO DEL DIA
var diaSemana = prompt("7. UN MENSAJE PARA TI - Escribe en minúsculas y sin acentos un día de la semana")
if (diaSemana === "lunes")
{
    alert("¡EXCELENTE INICIO DE SEMANAAA, MUCHA SUERTE HOY!")
}
else if (diaSemana === "viernes")
{    
    alert("ESS VIERNES Y EL CUERPO LO SABEEEEE")
}
else if (diaSemana === "sabado")
{
    alert("SABA DABA DA, SABA DABA DA, qué descanses este sabado")
}
else
{
    alert("ÁNIMO, ÁNIMOOOOO, SI SE PUEDE")
}

//8.CALIFICACIONES
var calificacion = prompt("8. CALIFICACIONES - Del 1 al 10, ¿qué calificación le pondrías a la película Volver al Futuro?")
var digitoCalificado = parseInt(calificacion)
if (digitoCalificado >= 0 && digitoCalificado < 6)
{
    alert("UY!¿A POCO TAN POQUITO? NI MODO, LA PELÍCULA REPRUEEBAA")
}
else if (digitoCalificado >= 6 && digitoCalificado <= 10)
{
    alert("OK, OK, LA PELÍCULA APRUEBA.")
}
else 
{
    alert("ERROR, cantidad no válida, siguieeente ejercicio.")
}

//9.PRECIO TOPPINGS
var topping = prompt("9. PRECIO TOPPINGS - ¿Qué topping deseas agregar a tu helado? Recomendamos el de oreo, kitkat o brownie")
if (topping === "oreo")
{
    alert("Entendido, el costo por el topping de oreo es de $10 MXN extra")
}
else if (topping === "kitkat")
{
    alert("Entendido, el costo por el topping de KitKat es de $15 MXN extra")
}
else if (topping === "brownie")
{
    alert("Entendido, el costo por el topping de brownie es de $20 MXN extra")
}
else
{
    alert("Lo sentimos, no contamos con ese ingrediente.")
}

//10.PROGRAMA DE TECONOLOGÍA
var prog = prompt("10. PROGRAMAS DE TECONOLOGÍA - El programa educativo contempla 3 niveles diferentes: Course, Carrera y Master. ¿En cuál estás interesado? Te proporcionaremos información del costo.")
if (prog === "Course" || prog === "course")
{
    alert("El programa Course tiene un costo mensual de $4999 MXN")
}
else if (prog === "Carrera" || prog === "carrera")
{
    alert("El programa Carrera tiene un costo mensual de $3999 MXN")    
}
else if (prog === "Master" || prog === "master")
{
    alert("El programa Carrera tiene un costo mensual de $2999 MXN")
}

//11.COSTO POR DISTANCIA RECORRIDA
var vehiculo = prompt("11. COSTO POR DISTANCIA RECORRIDA - ¿Qué tipo de vehículo es con el que viajas? (Coche, moto o autobus")
var kilometros = prompt("¿Cuántos kilómetros recorres?")
var resultado = undefined
if ((vehiculo === "Coche" || vehiculo === "coche") && (kilometros >= 0 && kilometros <= 100))
{
    resultado = parseInt(kilometros) * 0.20 + 5
    alert("Tendrás que pagar $"+resultado+"")
}
else if ((vehiculo === "Coche" || vehiculo === "coche") && (kilometros > 100))
    {
        resultado = parseInt(kilometros) * 0.20 + 10
        alert("Tendrás que pagar $"+resultado+"")
    }
else if ((vehiculo === "Moto" || vehiculo === "moto") && (kilometros >= 0 && kilometros <= 100))
{
    resultado = parseInt(kilometros) * 0.10 + 5
    alert("Tendrás que pagar $"+resultado+"")
}
else if ((vehiculo === "Moto" || vehiculo === "moto") && (kilometros > 100))
{
    resultado = parseInt(kilometros) * 0.10 + 10
    alert("Tendrás que pagar $"+resultado+"")
}
else if ((vehiculo === "Autobus" || vehiculo === "autobus") && (kilometros >= 0 && kilometros <= 100))
{
    resultado = parseInt(kilometros) * 0.5 + 5
    alert("Tendrás que pagar $"+resultado+"")
}
else if ((vehiculo === "Autobus" || vehiculo === "autbous") && (kilometros > 100))
{
    resultado = parseInt(kilometros) * 0.5 + 10
    alert("Tendrás que pagar $"+resultado+"")
}
else 
{
    alert("Valores no aceptados, verifica e intenta más tarde.")
}