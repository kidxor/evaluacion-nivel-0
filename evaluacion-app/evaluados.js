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
      <div class="evaluado-card" style="
        background:#fff;
        border-radius:1em;
        box-shadow:0 2px 12px rgba(59,130,246,0.08);
        margin-bottom:2em;
        padding:1.2em 1.5em;
        max-width:500px;
        margin-left:auto;
        margin-right:auto;
      ">
        <details>
          <summary style="font-size:1.15em; font-weight:700; color:#2563eb; cursor:pointer;">
            ${ev.nombre} ${ev.apellido}
          </summary>
          <div style="margin-top:1em;">
            <span style="color:${ev.passed ? '#16a34a' : '#dc2626'}; font-weight:bold;">
              ${ev.passed ? 'Aprobado ✅' : 'No aprobado ❌'}
            </span>
            <br>Puntaje: <b>${ev.score}</b> / <b>${ev.total}</b> (${ev.percent}%)
            <ul style="margin-top:1em; padding-left:1em;">
              ${Object.entries(ev.respuestas).map(([q, r]) =>
                `<li><b>${q}:</b> ${r ? r : '<i>Sin respuesta</i>'}</li>`
              ).join('')}
            </ul>
            <div style="margin-top:1em; font-size:1.05em; color:#2563eb;">
              🎉 <b>¡Gracias por completar el cuestionario!</b><br>
              Tu camino como conductor profesional está comenzando, y en Autonomy queremos acompañarte en cada paso.<br>
              Recordá que ser profesional no es tener experiencia: es tener actitud, compromiso y ganas de mejorar todos los días.
            </div>
          </div>
        </details>
      </div>
    `).join('');
  }
});