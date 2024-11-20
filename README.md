# Rick And Morty App

**Rick and Morty App** es una aplicación web construida con React que utiliza una API pública para demostrar habilidades técnicas en desarrollo frontend. El proyecto incluye funcionalidades como autenticación básica, manejo de datos API, búsqueda avanzada, filtros, y una interfaz moderna con soporte para modo oscuro. 

## 📄 Despliegue

La aplicación ha sido desplegada en **Vercel**.  
Enlace: [https://apoloweb.vercel.app/](https://apoloweb.vercel.app/)

## 📦 Scripts Disponibles

- `dev`: Inicia la aplicación en modo desarrollo.
- `build`: Compila el proyecto para producción.
- `preview`: Previsualiza la versión compilada.
- `lint`: Ejecuta ESLint para análisis estático del código.

## 🌐 API Utilizada

**Rick and Morty API**: [Documentación oficial](https://rickandmortyapi.com/).

## 🚀 Funcionalidades Extra

- **Modo Oscuro**: Implementado para mejorar la accesibilidad y la experiencia del usuario.
- **Code Splitting**: Carga dinámica de componentes para optimizar el rendimiento.
- **Lazy Load de Imágenes**: Mejora de la velocidad de carga utilizando React Intersection Observer.
- **Filtros Avanzados**: Posibilidad de buscar personajes con filtros combinados y búsqueda personalizada.
- **Almacenamiento en IndexedDB**: Optimización de recursos con almacenamiento local para imágenes.
- **Animaciones**: Implementación de animaciones modernas con Lottie.

## 🛠️ Tecnologías Principales

- **React**: Biblioteca principal para la construcción de la interfaz.
- **React Router DOM**: Navegación y gestión de rutas.
- **TailwindCSS**: Estilización eficiente y rápida.
- **React Intersection Observer**: Implementación de lazy loading.
- **React Lottie Player**: Animaciones modernas y atractivas.
- **IndexedDB**: Almacenamiento de imágenes para optimizar recursos locales.
- **UUID**: Generación de identificadores únicos.
- **React 18:** Para la creación de la interfaz de usuario.
- **React Router Dom:** Navegación entre las páginas de la aplicación.
- **TailwindCSS:** Estilización rápida y consistente.
- **React Icons:** Iconos modernos para una mejor experiencia visual.
- **React Intersection Observer:** Implementación de lazy loading eficiente para imágenes y otros elementos.
- **React Lottie Player:** Animaciones interactivas.

### Herramientas de desarrollo
- **Vite:** Herramienta de construcción rápida y eficiente.
- **ESLint:** Mantenimiento de un código limpio y legible.
- **UUID:** Generación de identificadores únicos.
- **IndexedDB:** Manejo de almacenamiento persistente de imágenes.

## 🚀 Características

1. **Páginas principales:**
   - **Login/Registro:**  
     - Formulario básico de inicio de sesión y registro.
     - Validaciones: campos requeridos y formato inputs válido.
     - Manejo de datos local (localStorage e IndexedDB).
   - **Inicio (Home):**  
     - Datos dinámicos obtenidos de la API pública seleccionada.
     - Barra de búsqueda y filtros avanzados.
     - Imágenes y descripciones de los elementos.
   - **Creación/Edición:**  
     - Formulario para agregar o editar elementos (datos almacenados localmente en memoria).
     - Elementos creados visibles en el listado de inicio.
   
2. **Características adicionales:**
   - **Code splitting:** Mejor rendimiento al dividir el código en chunks para cargar solo lo necesario.
   - **Lazy load de imágenes:** Carga eficiente de imágenes para optimizar la experiencia del usuario.
   - **Modo oscuro:** Diseño amigable con soporte para temas claros y oscuros.
   - **Animaciones:** Interactividad mejorada con animaciones suaves.
   - **IndexedDB:** Almacenamiento persistente de imágenes en el navegador.
   - **Estilos modernos:** Aplicación estilizada con TailwindCSS.

## 📂 Estructura de Páginas

1. **Página de Login/Registro**:
   - Formulario con validaciones básicas (campos requeridos y formato de email).
   - Gestión de usuarios mediante localStorage.

2. **Página de Inicio (Home)**:
   - Visualización de datos obtenidos de la API.
   - Barra de búsqueda y filtros avanzados.
   - Soporte para modo oscuro.
   - Implementación de animaciones y lazy loading para imágenes.

3. **Página de Creación/Edición**:
   - Formulario para agregar o editar elementos.
   - Manejo local de los datos creados.
   - Integración con la página de inicio.
   
4. **Página "sobre el proyecto"**:
   - Mensaje final.
