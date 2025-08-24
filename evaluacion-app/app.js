// src/app.js
const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON donde se almacenan los evaluados
const evaluadosFilePath = path.join(__dirname, 'evaluados.json');

// Función para cargar los evaluados desde el archivo JSON
function cargarEvaluados() {
    if (fs.existsSync(evaluadosFilePath)) {
        const data = fs.readFileSync(evaluadosFilePath);
        return JSON.parse(data);
    }
    return [];
}

// Función para guardar un nuevo evaluado en el archivo JSON
function guardarEvaluado(evaluado) {
    const evaluados = cargarEvaluados();
    evaluados.push(evaluado);
    fs.writeFileSync(evaluadosFilePath, JSON.stringify(evaluados, null, 2));
}

// Preguntas y respuestas correctas
const preguntas = [
  // ... (todas las preguntas y opciones que enviaste, igual que en index.html)
];

const correctas = {
  q1: ['a', 'b', 'd', 'e'],
  q2: 'b',
  q3: 'a',
  q4: ['a', 'b'],
  q5: ['a', 'd'],
  q6: 'b',
  q7: 'a',
  q8: 'b',
  q9: 'b',
  q10: 'b',
  q11: ['a', 'b', 'd'],
  q12: 'a',
  q13: 'a',
  q14: 'b',
  q15: 'b',
  q16: ['a', 'b'],
  q17: 'a',
  q18: 'c',
  q19: 'b',
  q20: null
};

// Renderizar preguntas
function renderPreguntas() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = preguntas.map(p => {
    if (p.tipo === "checkbox") {
      return `
        <div class="question">
          <p><b>${p.texto}</b></p>
          ${p.opciones.map(o =>
            `<label><input type="checkbox" name="${p.id}" value="${o.value}"> ${o.label}</label>`
          ).join('')}
        </div>
      `;
    } else if (p.tipo === "radio") {
      return `
        <div class="question">
          <p><b>${p.texto}</b></p>
          ${p.opciones.map(o =>
            `<label><input type="radio" name="${p.id}" value="${o.value}" required> ${o.label}</label>`
          ).join('')}
        </div>
      `;
    }
    return '';
  }).join('');
}

// Función para calcular el resultado de un evaluado
function calcularResultado(respuestas) {
    let score = 0;
    const total = 19; // Solo 19 preguntas se evalúan
    const respuestasIncorrectas = [];

    for (const [key, value] of Object.entries(respuestas)) {
        if (Array.isArray(correctas[key])) {
            if (compareArrays(value, correctas[key])) {
                score++;
            } else {
                respuestasIncorrectas.push(key);
            }
        } else {
            if (value === correctas[key]) {
                score++;
            } else {
                respuestasIncorrectas.push(key);
            }
        }
    }

    return { score, total, respuestasIncorrectas };
}

// Función para comparar dos arrays
function compareArrays(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;
    return arr1.every(val => arr2.includes(val));
}

// Exportar funciones para su uso en otros módulos
module.exports = {
    cargarEvaluados,
    guardarEvaluado,
    calcularResultado
};

document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtén los datos del formulario
  const nombre = document.getElementById('firstName').value.trim();
  const apellido = document.getElementById('lastName').value.trim();

  // Ejemplo de respuestas correctas (ajusta según tus preguntas)
  const correctas = {
    q1: 'a',
    q2: 'b'
    // ...agrega más claves según tus preguntas
  };

  // Obtén las respuestas del usuario (ajusta según tus inputs)
  const respuestas = {
    q1: '', // Obtén el valor del input correspondiente
    q2: ''
    // ...
  };

  // Calcula el puntaje
  let score = 0;
  let total = Object.keys(correctas).length;
  Object.keys(correctas).forEach(q => {
    if (respuestas[q] === correctas[q]) score++;
  });
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 70;

  // Guarda el evaluado en localStorage
  const evaluados = JSON.parse(localStorage.getItem('evaluados') || '[]');
  evaluados.push({
    nombre,
    apellido,
    fecha: new Date().toLocaleString(),
    score,
    total,
    percent,
    passed,
    respuestas
  });
  localStorage.setItem('evaluados', JSON.stringify(evaluados));

  // Muestra el resultado inmediatamente
  const modal = document.getElementById('resultModal');
  modal.innerHTML = `
    <div class="modal-content">
      <span id="modalText">
        ${nombre} ${apellido}, obtuviste ${score} de ${total} (${percent}%).<br>
        <span style="color:${passed ? '#16a34a' : '#dc2626'}; font-weight:bold;">
          ${passed ? 'Aprobado ✅' : 'No aprobado ❌'}
        </span>
      </span>
      <button class="close-btn" onclick="closeModal()">Cerrar</button>
    </div>
  `;
  modal.style.display = 'block';
});

// Modal para datos de usuario
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('modalFirstName').value.trim();
  const apellido = document.getElementById('modalLastName').value.trim();
  if (!nombre || !apellido) return;
  document.getElementById('firstName').value = nombre;
  document.getElementById('lastName').value = apellido;
  document.getElementById('userModal').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  renderPreguntas();
});

// Evaluar respuestas y mostrar resultado
document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('firstName').value;
  const apellido = document.getElementById('lastName').value;
  const respuestas = {};
  preguntas.forEach(p => {
    if (p.tipo === "checkbox") {
      respuestas[p.id] = Array.from(document.querySelectorAll(`input[name="${p.id}"]:checked`)).map(i => i.value);
    } else if (p.tipo === "radio") {
      const val = document.querySelector(`input[name="${p.id}"]:checked`);
      respuestas[p.id] = val ? val.value : '';
    }
  });
  // Calcular puntaje
  let score = 0;
  let total = 19; // Solo 19 preguntas se evalúan
  Object.keys(correctas).forEach(q => {
    if (correctas[q] === null) return;
    if (Array.isArray(correctas[q])) {
      if (Array.isArray(respuestas[q]) &&
          respuestas[q].sort().join(',') === correctas[q].sort().join(',')) score++;
    } else {
      if (respuestas[q] === correctas[q]) score++;
    }
  });
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 70;
  // Guardar en localStorage
  const evaluados = JSON.parse(localStorage.getItem('evaluados') || '[]');
  evaluados.push({
    nombre,
    apellido,
    fecha: new Date().toLocaleString(),
    score,
    total,
    percent,
    passed,
    respuestas
  });
  localStorage.setItem('evaluados', JSON.stringify(evaluados));
  // Mostrar resultado inmediato
  const modal = document.getElementById('resultModal');
  document.getElementById('modalText').innerHTML =
    `<b>${nombre} ${apellido}</b>, obtuviste <b>${score}</b> de <b>${total}</b> (${percent}%).<br>
    <span style="color:${passed ? '#16a34a' : '#dc2626'}; font-weight:bold;">
      ${passed ? 'Aprobado ✅' : 'No aprobado ❌'}
    </span>
    <div style="margin-top:1.5em; font-size:1.1em; color:#2563eb;">
      🎉 <b>¡Gracias por completar el cuestionario!</b><br>
      Tu camino como conductor profesional está comenzando, y en Autonomy queremos acompañarte en cada paso.<br>
      Recordá que ser profesional no es tener experiencia: es tener actitud, compromiso y ganas de mejorar todos los días.
    </div>`;
  modal.style.display = 'block';
});

function closeModal() {
  document.getElementById('resultModal').style.display = 'none';
}