document.addEventListener('DOMContentLoaded', () => {
  // Solicitar clave antes de mostrar la lista
  const password = prompt('Ingrese la clave para acceder a la lista de evaluados:');
  if (password !== '8812') {
    document.body.innerHTML = '<h2 style="color:#dc2626;text-align:center;margin-top:3em;">Acceso denegado</h2>';
    return;
  }

  // Botón para limpiar la lista
  const limpiarBtn = document.createElement('button');
  limpiarBtn.textContent = 'Limpiar lista de evaluados';
  limpiarBtn.style = 'display:block;margin:1.5em auto 2em auto;padding:0.7em 2em;background:#dc2626;color:#fff;border:none;border-radius:0.5em;font-weight:bold;cursor:pointer;';
  limpiarBtn.onclick = () => {
    const clave = prompt('Ingrese la contraseña para limpiar la lista:');
    if (clave === '8812') {
      localStorage.removeItem('evaluados');
      location.reload();
    } else {
      alert('Contraseña incorrecta');
    }
  };
  document.body.insertBefore(limpiarBtn, document.body.querySelector('#evaluadosList'));

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