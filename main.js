const boton = document.getElementById("boton");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const tabla = document.getElementById("sudoku");
boton.addEventListener("click", () => {
    document.createElement("table");
    const tbody = document.createElement("tbody");
    cuerpoTabla.innerHTML = ''; 
    let numero = 1;
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const celda = document.createElement('td');
            celda.textContent = numero;
            celda.style.border = '1px solid black';
            fila.appendChild(celda);
            numero++;
        }
        cuerpoTabla.appendChild(fila);
    }

});