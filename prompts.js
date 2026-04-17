function generarPromptMaster(tipoCaso, contexto, decision, datos, restricciones) {
    let promptEstandar = `Actúa como un experto consultor en Diseño de Sistemas de Información e IA.
Analiza la siguiente situación y proporcióname una evaluación estructurada.

CONTEXTO: ${contexto}
DECISIÓN A TOMAR: ${decision}
DATOS DISPONIBLES: ${datos}
RESTRICCIONES Y RIESGOS: ${restricciones}

Tu respuesta DEBE seguir estrictamente esta estructura numerada:
1. Resumen del problema principal.
2. Decisión real a tomar.
3. Datos faltantes necesarios para decidir.
4. Tres alternativas viables de acción.
5. Comparación objetiva de las alternativas.
6. Recomendación razonada.
7. Qué parte se debe automatizar y qué parte requiere control humano (Human-in-the-loop).
8. KPIs recomendados para medir el éxito.
9. Decisión final: GO, NO-GO, o GO con condiciones (justificada).

`;

    // Reglas específicas según el caso
    const reglasExtra = {
        "admision": "Adicionalmente, añade un apartado final titulado 'Riesgo de sesgo y medidas de equidad'. Diferencia claramente entre automatizar comprobaciones mecánicas y automatizar decisiones sensibles.",
        "tickets": "Adicionalmente, mantén la estructura y añade una revisión explícita de: prioridad, SLA, tickets repetidos, escalado crítico y necesidad de intervención humana en incidentes de alta severidad. Al final, resume en 5 líneas el primer subproceso a rediseñar.",
        "ecommerce": "Adicionalmente, añade un bloque final llamado 'Separación entre casos estándar y excepcionales' detallando: qué se automatiza, qué se revisa, qué regla de negocio definir primero y el indicador de mejora.",
        "asistente": "Adicionalmente, añade una comparación específica entre: SaaS/API externa, despliegue privado y opción híbrida. Detalla para cada una: cuándo elegirla, riesgo principal, coste relativo esperado y efecto sobre latencia/privacidad."
    };

    if (reglasExtra[tipoCaso]) {
        promptEstandar += "\nREGLAS ESPECÍFICAS PARA ESTE CASO:\n" + reglasExtra[tipoCaso];
    }

    return promptEstandar;
}
