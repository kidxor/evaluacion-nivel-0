document.addEventListener('DOMContentLoaded', () => {
  const evaluados = JSON.parse(localStorage.getItem('evaluados') || '[]');
  const container = document.getElementById('evaluadosList');
  if (evaluados.length === 0) {
    container.innerHTML = '<p>No hay evaluados aún.</p>';
  } else {
    container.innerHTML = evaluados.map(ev => `
      <div class="evaluado-item">
        <strong>${ev.nombre} ${ev.apellido}</strong> <span style="color:#64748b;">(${ev.fecha})</span>
        <ul>
          ${Object.entries(ev.respuestas).map(([q, r]) =>
            `<li><b>${q}:</b> ${r ? r : '<i>Sin respuesta</i>'}</li>`
          ).join('')}
        </ul>
        <span style="color:${ev.passed ? '#16a34a' : '#dc2626'}; font-weight:bold;">
          ${ev.passed ? 'Aprobado ✅' : 'No aprobado ❌'}
        </span>
        <br>Puntaje: ${ev.score} / ${ev.total} (${ev.percent}%)
      </div>
    `).join('');
  }
});