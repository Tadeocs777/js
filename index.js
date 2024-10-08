function calcularPesoIdeal() {
    // Aqui pedimos e ingresamos la altura y el peso del usuario
    let altura = parseFloat(prompt("Ingrese su altura en metros (ej: 1.75):"));
    let pesoActual = parseFloat(prompt("Ingrese su peso actual en kilogramos:"));

    // Verificamos que los datos ingresados son validos
    if (isNaN(altura) || isNaN(pesoActual) || altura <= 0 || pesoActual <= 0) {
        alert("Por favor, ingrese valores válidos para la altura y el peso.");
        return;
    }

    // Formula para sacar el peso ideal
    let pesoIdealHombre = (altura * 100) - 100 - ((altura * 100 - 150) / 4);
    let pesoIdealMujer = (altura * 100) - 100 - ((altura * 100 - 150) / 2.5);

    // Diferenciamos entre hombre y mujer
    let genero = prompt("Ingrese su género (hombre/mujer):").toLowerCase();

    // Mostramos el resultado según el género
    if (genero === "hombre") {
        alert(`Tu peso ideal es aproximadamente: ${pesoIdealHombre.toFixed(2)} kg.`);
    } else if (genero === "mujer") {
        alert(`Tu peso ideal es aproximadamente: ${pesoIdealMujer.toFixed(2)} kg.`);
    } else {
        alert("Por favor, ingrese un género válido (hombre/mujer).");
    }

    // y finalmente comparamos con el peso actual
    if (genero === "hombre" || genero === "mujer") {
        if (pesoActual > (genero === "hombre" ? pesoIdealHombre : pesoIdealMujer)) {
            alert("Tienes un poco de sobrepeso.");
        } else if (pesoActual < (genero === "hombre" ? pesoIdealHombre : pesoIdealMujer)) {
            alert("Estás por debajo de tu peso ideal.");
        } else {
            alert("¡Estás en tu peso ideal!");
        }
    }
}

calcularPesoIdeal();