let casosData = [];

// 1. Cargar datos JSON
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('data/ejemplos.json');
        casosData = await response.json();
        const selector = document.getElementById('selector-caso');
        
        casosData.forEach((caso, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.textContent = caso.nombre;
            selector.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando los casos:", error);
    }
});

// 2. Autocompletar formulario al seleccionar caso
document.getElementById('selector-caso').addEventListener('change', (e) => {
    const caso = casosData[e.target.value];
    if (caso) {
        document.getElementById('contexto').value = caso.contexto;
        document.getElementById('decision').value = caso.decision;
        document.getElementById('datos').value = caso.datos + "\n" + caso.metricas;
        document.getElementById('restricciones').value = caso.restricciones + "\nAdvertencia: " + caso.advertencia;
    }
});

// 3. Generar Prompt
document.getElementById('btn-generar').addEventListener('click', () => {
    const idCaso = document.getElementById('selector-caso').value;
    const contexto = document.getElementById('contexto').value;
    const decision = document.getElementById('decision').value;
    const datos = document.getElementById('datos').value;
    const restricciones = document.getElementById('restricciones').value;

    if (!contexto || !decision) {
        alert("Por favor, completa al menos el contexto y la decisión.");
        return;
    }

    const tipoCaso = idCaso !== "" ? casosData[idCaso].id : "general";
    const promptFinal = generarPromptMaster(tipoCaso, contexto, decision, datos, restricciones);
    
    document.getElementById('salida-prompt').textContent = promptFinal;
    document.getElementById('btn-copiar').disabled = false;
});

// 4. Copiar al portapapeles
document.getElementById('btn-copiar').addEventListener('click', () => {
    const texto = document.getElementById('salida-prompt').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("¡Prompt copiado al portapapeles!");
    });
});
