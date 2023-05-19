const   miDiv1      =   document.querySelector ("#mi-div1");
const   miLab1      =   document.querySelector ("#mi-lab1");
const   miParr1     =   document.querySelector ("#mi-parr1");

const   MAX_COUNT   =   20;

/**
 * Selecciona Opción
 */
function selecciona() {
    miParr1.textContent = "Ud. ha elegido la...";
}

/**
 * Genera Código HTML a demanda según opción ingresada
 */
function generaCodigo() {
    miDiv1.innerHTML = "";  // borra todo
    miParr1.textContent = "Subscribirse por:"; // repone leyenda
    let num = miLab1.value; // número elegido
    if (( num > 0)&&(num <= MAX_COUNT) ) {
        let selectHTML = '<select onchange="selecciona()">';
        selectHTML += '<option value="0">Seleccione...</option>';
        for (let cont = 1 ; cont <= num; cont++) {
            selectHTML += '<option value="'+cont+'">Opcion '+cont+'</option>';
        }
        selectHTML += '</select>';
        miDiv1.innerHTML += selectHTML;
        }    
    else {
        miDiv1.innerHTML += `
            <p>Solo cantidades de 1 hasta ${MAX_COUNT}</p>
            `;
    }
}
miDiv1.innerHTML = "";  // borra todo
/* Fin del codigo JS */