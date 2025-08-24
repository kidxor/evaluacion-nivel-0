# Evaluación App

Este proyecto es una aplicación de evaluación que permite a los usuarios completar un cuestionario y ver sus resultados. La aplicación almacena la información de los evaluados, incluyendo sus respuestas y resultados, y permite visualizar una lista de evaluados y los detalles de cada uno.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
evaluacion-app
├── src
│   ├── index.html          # Base de la aplicación de evaluación.
│   ├── app.js              # Lógica principal de la aplicación.
│   ├── styles.css          # Estilos CSS para la interfaz.
│   ├── evaluados.json      # Almacena la información de los evaluados.
│   └── components
│       ├── listado.html    # Estructura HTML para mostrar la lista de evaluados.
│       └── detalle.html    # Estructura HTML para mostrar los detalles de un evaluado específico.
├── package.json            # Configuración para npm.
└── README.md               # Documentación del proyecto.
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias necesarias.

## Uso

1. Abre `src/index.html` en tu navegador para acceder a la aplicación.
2. Completa el cuestionario y envía tus respuestas.
3. Los resultados se almacenarán en `evaluados.json`.
4. Puedes acceder a la lista de evaluados y sus detalles a través de las páginas correspondientes.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.