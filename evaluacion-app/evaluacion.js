<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Autonomy | Evaluación de Conocimientos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      background: #f8f9fa;
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      min-height: 100vh;
      display: flex;
    }
    .sidebar {
      width: 220px;
      background: #2563eb;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem 1rem 1rem 1rem;
      box-shadow: 2px 0 12px rgba(59,130,246,0.08);
      position: fixed;
      left: 0; top: 0; bottom: 0;
      z-index: 100;
    }
    .sidebar h2 {
      font-size: 1.3em;
      margin-bottom: 2em;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .sidebar a {
      color: #fff;
      text-decoration: none;
      font-size: 1.08em;
      margin-bottom: 1.2em;
      padding: 0.5em 1em;
      border-radius: 6px;
      display: block;
      transition: background 0.2s;
    }
    .sidebar a.active, .sidebar a:hover {
      background: #1746a0;
    }
    .main-content {
      margin-left: 220px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      width: 100%;
    }
    @media (max-width: 900px) {
      .sidebar {
        position: relative;
        width: 100vw;
        min-height: unset;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem 0.5rem;
        box-shadow: none;
      }
      .sidebar h2 {
        margin-bottom: 0;
        margin-right: 2em;
      }
      .main-content {
        margin-left: 0;
        margin-top: 80px;
      }
    }
  </style>
</head>
<body>
  <nav class="sidebar">
    <h2>Autonomy</h2>
    <a href="index.html" class="active">Inicio</a>
    <a href="evaluacion-form.html">Evaluación</a>
    <a href="evaluados.html">Resultados</a>
  </nav>
  <div class="main-content">
    <!-- Aquí va el contenido específico de cada página -->
    <!-- Ejemplo para index.html: -->
    <header>
      <h1 style="margin-top:2rem; color:#2563eb;">Bienvenido a la Evaluación Autonomy</h1>
      <p style="text-align:center; color:#444; font-size:1.1em;">
        Selecciona una opción para comenzar o revisar tus resultados.
      </p>
    </header>
    <div class="cards-container">
      <div class="card">
        <h2>Iniciar Evaluación</h2>
        <p>Completa el formulario y obtén tu resultado al instante.</p>
        <a href="evaluacion-form.html">Comenzar evaluación</a>
      </div>
      <div class="card">
        <h2>Resultados de Evaluación</h2>
        <p>Consulta la lista de evaluados y exporta los resultados.</p>
        <a href="evaluados.html">Ver resultados</a>
      </div>
    </div>
  </div>

  <!-- Este archivo contiene la lista de preguntas y respuestas correctas para la evaluación -->

  <script>
  window.preguntas = [
  {
    id: "q1",
    texto: "¿Qué necesito para poder comenzar a trabajar como conductor en Autonomy? (Podés elegir más de una)",
    tipo: "checkbox",
    opciones: [
      { value: "a", label: "Tener ganas de aprender" },
      { value: "b", label: "Licencia de conducir vigente" },
      { value: "c", label: "Auto propio" },
      { value: "d", label: "Certificado de antecedentes penales" },
      { value: "e", label: "Comprobante de domicilio" },
      { value: "f", label: "Pasaporte vigente" }
    ]
  },
  {
    id: "q2",
    texto: "¿Por qué es importante asistir y aprobar esta capacitación?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Para recibir un diploma" },
      { value: "b", label: "Para acceder a un vehículo Autonomy y poder comenzar a generar ingresos" },
      { value: "c", label: "Porque es obligatorio para cualquier trabajo" },
      { value: "d", label: "Para conocer a otros conductores" }
    ]
  },
  {
    id: "q3",
    texto: "¿Qué significa ser conductor de aplicaciones?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Ser jefe de uno mismo y administrar tu propio negocio" },
      { value: "b", label: "Ser empleado de la app" },
      { value: "c", label: "Manejar cuando te obligan" }
    ]
  },
  {
    id: "q4",
    texto: "¿Cuáles son algunos de los costos que debo tener en cuenta para administrar con eficiencia mi negocio y alcanzar mis objetivos de ganancias?",
    tipo: "checkbox",
    opciones: [
      { value: "a", label: "Las comisiones de las aplicaciones" },
      { value: "b", label: "Peajes, combustible, lavado, alquiler del vehículo" },
      { value: "c", label: "Almuerzos y meriendas" },
      { value: "d", label: "Gastos en ropa nueva" }
    ]
  },
  {
    id: "q5",
    texto: "¿Qué es lo primero que debo hacer antes de comenzar mi jornada de trabajo? (Podés elegir más de una)",
    tipo: "checkbox",
    opciones: [
      { value: "a", label: "Asegurarme de tener el tanque lleno y el auto limpio y en condiciones" },
      { value: "b", label: "Subir una foto en redes sociales" },
      { value: "c", label: "Pedirle a alguien que maneje por mí" },
      { value: "d", label: "Verificar en el celular: batería, conexión, datos y llevar cable de carga" }
    ]
  },
  {
    id: "q6",
    texto: "¿Qué significa conducir de forma segura y responsable?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Usar el celular mientras manejo para aceptar más viajes" },
      { value: "b", label: "Respetar las normas de tránsito y cuidar a los pasajeros" },
      { value: "c", label: "Llegar lo más rápido posible, sin importar las señales" }
    ]
  },
  {
    id: "q7",
    texto: "¿Por qué es importante mantener limpio y en buen estado el vehículo?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Porque da una buena impresión y ayuda a recibir mejores calificaciones" },
      { value: "b", label: "Porque los autos limpios andan más rápido" },
      { value: "c", label: "Porque si no, no me van a dejar trabajar nunca más" }
    ]
  },
  {
    id: "q8",
    texto: "¿Qué debo hacer si tengo un accidente de tránsito?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Irme lo más rápido posible" },
      { value: "b", label: "Verificar que todos estén bien y seguir los pasos legales correspondientes" },
      { value: "c", label: "Llamar al pasajero para pedirle que lo reporte él" }
    ]
  },
  {
    id: "q9",
    texto: "¿Qué aplicaciones debería conocer y aprender a usar como conductor de movilidad?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "MercadoLibre, YouTube y WhatsApp" },
      { value: "b", label: "Uber, Cabify, DiDi" },
      { value: "c", label: "Word, Excel y Google Docs" }
    ]
  },
  {
    id: "q10",
    texto: "¿Qué significa \"MultiApping Inteligente\"?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Trabajar solo con una app para no confundirme" },
      { value: "b", label: "Usar varias aplicaciones, eligiendo la mejor opción según cada momento" },
      { value: "c", label: "Aceptar muchos viajes al mismo tiempo" }
    ]
  },
  {
    id: "q11",
    texto: "¿Qué cosas me ayudan a ganar más dinero con mi trabajo? (Podés elegir más de una)",
    tipo: "checkbox",
    opciones: [
      { value: "a", label: "Administrar mis horarios y descansos" },
      { value: "b", label: "Conocer los momentos de alta demanda (eventos, clima, feriados)" },
      { value: "c", label: "Trabajar 24 horas seguidas sin parar" },
      { value: "d", label: "Organizar mis finanzas y gastos" }
    ]
  },
  {
    id: "q12",
    texto: "¿Qué espera un pasajero de un conductor profesional?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Amabilidad, respeto y un viaje seguro" },
      { value: "b", label: "Que le presten el auto" },
      { value: "c", label: "Que llegue rápido sin importar cómo" }
    ]
  },
  {
    id: "q13",
    texto: "¿Qué puedo ganar si doy un buen servicio?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Propinas, buenas calificaciones, más y mejores viajes asignados" },
      { value: "b", label: "Menos horas de trabajo" },
      { value: "c", label: "Nada, da lo mismo hacerlo bien o mal" }
    ]
  },
  {
    id: "q14",
    texto: "Si un pasajero se enoja o tiene una queja, ¿qué debo hacer?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Decirle a los gritos que está equivocado" },
      { value: "b", label: "Escuchar con calma, mantener la cortesía y buscar resolver el problema" },
      { value: "c", label: "Cancelar el viaje y dejarlo donde esté" }
    ]
  },
  {
    id: "q15",
    texto: "¿Qué tiempo me llevará consolidar mi negocio y alcanzar mis objetivos?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Lo voy a lograr la primer semana porque soy genial" },
      { value: "b", label: "El avance será progresivo y lo importante es la constancia" },
      { value: "c", label: "Mis objetivos son inalcanzables y tardaré muchos años" }
    ]
  },
  {
    id: "q16",
    texto: "¿Cuántas veces al día puedo hacer una pausa en mi trabajo? (Podés elegir más de una)",
    tipo: "checkbox",
    opciones: [
      { value: "a", label: "Al cargar combustible y cuando necesito ir al baño o comer algo" },
      { value: "b", label: "Las veces que yo disponga porque soy mi propio jefe" },
      { value: "c", label: "Debo trabajar 12 horas seguidas sin parar" },
      { value: "d", label: "Tengo que pedir permiso para no ser sancionado" }
    ]
  },
  {
    id: "q17",
    texto: "¿Quién decide el valor de las ganancias de mi negocio?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Decido yo con mi organización, mis decisiones y mi estrategia" },
      { value: "b", label: "Las aplicaciones cuando fijan las tarifas de los viajes" },
      { value: "c", label: "Las empresas proveedoras de combustible" }
    ]
  },
  {
    id: "q18",
    texto: "¿Cuánto incide mi forma de conducir en mis ganancias?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Nada, la ganancia depende del valor de los viajes y las horas al volante" },
      { value: "b", label: "Muy poco porque lo que importa es mi rapidez para hacer muchos viajes" },
      { value: "c", label: "Mucho porque las multas las pago yo, además los pasajeros califican y denuncian en las aplicaciones a los conductores temerarios" }
    ]
  },
  {
    id: "q19",
    texto: "Si tengo una queja o un problema con una aplicación, ¿qué debo hacer?",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Llamar a Autonomy para que ellos se ocupen de todo" },
      { value: "b", label: "Resolver yo mismo, comunicándome con atención al cliente porque soy el jefe de mi propio negocio" },
      { value: "c", label: "Enojarme y no trabajar más" }
    ]
  },
  {
    id: "q20",
    texto: "¿Cómo me siento luego de esta capacitación? (Elegí la opción que más se acerca a tu realidad)",
    tipo: "radio",
    opciones: [
      { value: "a", label: "Más preparado para comenzar a trabajar" },
      { value: "b", label: "Todavía tengo dudas, pero quiero seguir aprendiendo" },
      { value: "c", label: "No me interesa trabajar como conductor" }
    ]
  }
];

window.correctas = {
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
  q20: null // Reflexión, no se evalúa
};
  </script>
</body>
</html>

