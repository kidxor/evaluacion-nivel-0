document.addEventListener('DOMContentLoaded', () => {
  // Solicitar clave antes de mostrar la lista
  const password = prompt('Ingrese la clave para acceder a la lista de evaluados:');
  if (password !== '8812') {
    document.body.innerHTML = '<h2 style="color:#dc2626;text-align:center;margin-top:3em;">Acceso denegado</h2>';
    return;
  }

  const evaluados = JSON.parse(localStorage.getItem('evaluados') || '[]');
  const container = document.getElementById('evaluadosList');
  if (evaluados.length === 0) {
    container.innerHTML = '<p>No hay evaluados aún.</p>';
  } else {
    container.innerHTML = evaluados.map(ev => `
      <div class="evaluado-item" style="margin-bottom:1.5em;">
        <details>
          <summary style="font-size:1.1em; font-weight:bold; cursor:pointer;">
            ${ev.nombre} ${ev.apellido}
          </summary>
          <div style="margin-top:0.7em;">
            <span style="color:${ev.passed ? '#16a34a' : '#dc2626'}; font-weight:bold;">
              ${ev.passed ? 'Aprobado ✅' : 'No aprobado ❌'}
            </span>
            <br>Puntaje: ${ev.score} / ${ev.total} (${ev.percent}%)
            <ul style="margin-top:0.7em;">
              ${Object.entries(ev.respuestas).map(([q, r]) =>
                `<li><b>${q}:</b> ${r ? r : '<i>Sin respuesta</i>'}</li>`
              ).join('')}
            </ul>
          </div>
        </details>
      </div>
    `).join('');
  }
});