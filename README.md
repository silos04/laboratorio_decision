# Decision Pilot IA

## Objetivo del Proyecto
"Decision Pilot IA" es una aplicación web estática diseñada para ayudar a analistas y directivos a estructurar decisiones tecnológicas complejas. La app no toma decisiones por sí sola; en su lugar, recoge variables críticas (contexto, datos, riesgos) y genera un prompt avanzado estructurado para obtener recomendaciones viables y auditables por parte de una IA externa.

## Qué problema resuelve
Evita que los usuarios interactúen con la IA mediante peticiones superficiales ("prompts vagos") asegurando que se contemplen el control humano (Human-in-the-loop), las restricciones de negocio y la comparación de alternativas antes de recomendar un despliegue tecnológico (GO/NO-GO).

## Casos Incluidos
1. Admisión y becas universitarias.
2. Tickets internos de soporte TI.
3. Devoluciones y fraude en e-commerce.
4. Asistente interno de documentación corporativa.

## Estructura de Archivos
* `index.html`: Estructura y formulario principal de la aplicación.
* `style.css`: Estilos y diseño visual.
* `app.js`: Lógica funcional de la aplicación y gestión del DOM.
* `prompts.js`: Motor generador de prompts estructurados.
* `data/ejemplos.json`: Base de datos con el contexto y restricciones pre-cargadas de los 4 casos.

## Instrucciones de Uso
1. Selecciona un caso de uso en el menú desplegable.
2. Revisa o modifica el contexto, la decisión, los datos y las restricciones cargadas.
3. Haz clic en "Generar Prompt".
4. Haz clic en "Copiar al Portapapeles".
5. Pega el texto en ChatGPT, Claude o cualquier IA generativa para obtener el análisis estructurado.

## Despliegue en GitHub Pages
1. Sube estos archivos a un repositorio público en GitHub.
2. Ve a `Settings` > `Pages`.
3. En la sección *Build and deployment*, selecciona la rama `main` y la carpeta `/root`.
4. Guarda y espera unos minutos. Tu sitio estará disponible en la URL proporcionada por GitHub.

## Limitaciones
* La app es estrictamente un **generador de prompts estático**; no se conecta directamente a la API de ningún modelo de lenguaje.
* Los datos de ejemplo son representaciones simplificadas para entornos académicos.

## Autores
* [Inserta el nombre de tu equipo o tu nombre aquí]
