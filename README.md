# LAB Eventos - Sistema de Gestión de Turnos

Laboratorio práctico para el programa **Generation Colombia** enfocado en el manejo de eventos en JavaScript.

## 📋 Descripción

Este proyecto es una aplicación web que simula un sistema de gestión de turnos tipo sala de espera, similar a los utilizados en entidades de atención al usuario como Compensar. Permite gestionar turnos, llamar al siguiente en la fila, buscar turnos específicos y visualizar el estado de la cola de espera.

## 🎯 Objetivo del Laboratorio

Practicar y comprender el manejo de **eventos en JavaScript** mediante:
- Event listeners y manejo de interacciones del usuario
- Manipulación dinámica del DOM
- Gestión de estado de la aplicación

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS y diseño responsive
- **JavaScript (ES6+)** - Lógica de la aplicación con módulos
- **Google Fonts** - Tipografías (Fraunces, Inter, JetBrains Mono)

## 📁 Estructura del Proyecto

```
LAB_Eventos/
├── index.html          # Página principal
├── styles.css          # Hoja de estilos
├── app.js              # Punto de entrada de la aplicación
├── components/         # Componentes reutilizables
│   └── CardItem.js     # Componente de tarjeta de turno
├── data/               # Datos de la aplicación
│   └── data.js         # Array de turnos de ejemplo
└── ui/                 # Módulos de interfaz
    ├── App.js          # Inicialización de la aplicación
    ├── CallNext.js     # Lógica para llamar siguiente turno
    ├── CounterTickets.js # Contador de turnos en espera
    ├── CurrentTicket.js # Visualización del turno actual
    ├── Search.js       # Funcionalidad de búsqueda
    ├── TicketList.js   # Renderizado de lista de turnos
    ├── WaitingCall.js  # Estado de espera
    └── render.js       # Funciones de renderizado
```

## 🎨 Características

### Visor Principal
- Muestra el turno actual siendo atendido
- Indica el módulo correspondiente
- Diseño visible desde la distancia

### Panel de Control
- **Llamar siguiente**: Botón para llamar al próximo turno en la fila
- **Buscador**: Input para buscar turnos por número o documento
- **Contador**: Muestra la cantidad de turnos en espera

### Fila de Espera
- Lista visual de todos los turnos
- Muestra código, nombre, trámite y estado
- Estados disponibles:
  - `En Espera` (waiting)
  - `Atendido` (done)
  - `Cancelado` (cancelled)
  - `En Proceso` (inProgress)
- Botón para cancelar turnos

## 🛠️ Cómo Ejecutar

### Opción 1: Abrir directamente en el navegador
1. **Clona o descarga el proyecto**
2. **Ingresa a la carpeta** del proyecto (`LAB_Eventos`)
3. **Abre el archivo `index.html`** haciendo doble clic o arrastrándolo a tu navegador web

### Opción 2: Usar Live Server (Recomendado)
1. **Clona o descarga el proyecto**
2. **Ingresa a la carpeta** del proyecto (`LAB_Eventos`)
3. **Abre la carpeta en Visual Studio Code**
4. **Instala la extensión "Live Server"** si no la tienes
5. **Haz clic derecho en `index.html`** y selecciona "Open with Live Server"
6. El proyecto se abrirá automáticamente en tu navegador con recarga en vivo

## 📝 Datos de Ejemplo

El proyecto incluye un conjunto de datos de prueba en `data/data.js` con turnos de ejemplo:
- A-014: Angelica García - Autorización de Examen
- A-015: Carlos Ramírez - Solicitud de Cita
- A-016: María Fernanda López - Reclamo de Factura
- A-017: Jorge Torres - Renovación de Documento
- A-018: Luisa Martínez - Consulta General

## 🎓 Conceptos Practicados

- **Event Listeners**: `addEventListener`, `click`, `input`, `submit`
- **Manipulación del DOM**: `getElementById`, `querySelector`, `createElement`
- **Event Bubbling y Capturing**
- **Delegación de Eventos**
- **Eventos Personalizados (Custom Events)**
- **Prevent Default y Stop Propagation**
- **Módulos ES6**: `import`, `export`

## 👨‍🎓 Contexto

Proyecto desarrollado como **práctica educativa** por Angelica García del programa **Generation Colombia** para aprender y aplicar conceptos de manejo de eventos en JavaScript.

---
**© 2026 Angelica García - Estudiante Generation Colombia - Laboratorio de Eventos JavaScript**
