# 🎓 Campus Online SENATI

![SENATI](https://img.shields.io/badge/SENATI-Campus%20Online-e30613?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-brightgreen?style=for-the-badge)

> Portal web oficial del Campus Online de SENATI - Sistema de gestión académica para estudiantes e instructores del Servicio Nacional de Adiestramiento en Trabajo Industrial.

---

## 📖 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Colores Oficiales](#-colores-oficiales-senati)
- [Instalación](#-instalación)
- [Servicios Integrados](#-servicios-integrados)
- [Tecnologías](#-tecnologías-utilizadas)
- [Responsive Design](#-responsive-design)
- [Despliegue](#-despliegue)
- [Documentación](#-documentación-adicional)
- [Equipo](#-equipo-de-desarrollo)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 📝 Descripción

**Campus Online** es un espacio que SENATI pone a disposición de sus estudiantes y colaboradores para acceder a las herramientas tecnológicas de aprendizaje. Estas herramientas incluyen:

- ✉️ **Correo institucional** @senati.pe
- 📚 **Biblioteca virtual** con materiales de carreras
- 🎯 **Plataforma Blackboard** LMS
- 📋 **Diseños curriculares** y estructuras
- 📁 **Biblioteca de proyectos** con miles de referencias
- 🎓 **Complementación y titulación**
- ▶️ **Canal oficial de YouTube**
- 💻 **Software académico** por familia ocupacional

Disponible **24/7** desde cualquier dispositivo móvil.

---

## ✨ Características

### 🎨 Diseño
- ✅ **Diseño Responsive** - Adaptable a móviles, tablets y desktop
- ✅ **Colores oficiales SENATI** - Paleta corporativa (#e30613, #1e3c72)
- ✅ **Interfaz moderna** - UI/UX optimizada para la experiencia del usuario
- ✅ **Animaciones suaves** - Transiciones CSS3 y JavaScript

### ⚙️ Funcionalidad
- ✅ **Menú hamburguesa** - Para dispositivos móviles
- ✅ **Tarjetas interactivas** - Efectos hover con overlay rojo SENATI
- ✅ **Formulario de contacto** - Con validación en tiempo real
- ✅ **Video embebido** - YouTube integrado
- ✅ **Lazy loading** - Carga optimizada de imágenes
- ✅ **Smooth scroll** - Desplazamiento suave

### 🚀 Performance
- ✅ **Optimización SEO** - Meta tags configurados
- ✅ **Cross-browser** - Compatible con todos los navegadores
- ✅ **Ligero y rápido** - Sin dependencias pesadas
- ✅ **Accesibilidad** - Cumple estándares web

---

## 📂 Estructura del Proyecto

```
SENATI---TEAM/
│
├── 📄 index.html                 # Página principal
├── 📄 README.md                  # Este archivo
│
├── 📁 css/
│   └── 📄 styles.css            # Estilos principales (colores oficiales)
│
├── 📁 js/
│   └── 📄 main.js               # JavaScript principal
│
├── 📁 img/                      # Imágenes del proyecto
│   ├── 🖼️ logo-senati.png       # Logo horizontal blanco (455x128px)
│   ├── 🖼️ correo-electronico.png # Ícono correo (316x229px)
│   ├── 🖼️ biblioteca-online.png  # Ícono biblioteca (316x229px)
│   ├── 🖼️ blackboard.png         # Logo Blackboard (316x227px)
│   ├── 🖼️ contenidos-curriculares.png # Ícono curricular (316x229px)
│   ├── 🖼️ biblioteca-proyectos.png # Ícono proyectos (316x229px)
│   ├── 🖼️ complementacion.png    # Ícono titulación (316x229px)
│   ├── 🖼️ youtube.png            # Logo YouTube (316x229px)
│   ├── 🖼️ software.png           # Ícono software (316x229px)
│   └── 🖼️ preguntas-frecuentes.png # Banner FAQ
│
└── 📁 page/                     # Páginas adicionales (opcional)
    ├── biblioteca.html
    ├── biblioteca_proyectos.html
    ├── blackboard.html
    ├── correo.html
    ├── diseños_curriculares.html
    └── titulacion.html
```

---

## 🎨 Colores Oficiales SENATI

### Paleta de Colores

| Color | Hex Code | Uso | Preview |
|-------|----------|-----|---------|
| **Rojo SENATI** | `#e30613` | Principal, títulos, botones | ![#e30613](https://via.placeholder.com/50x20/e30613/e30613.png) |
| **Rojo Oscuro** | `#c00510` | Hover de botones | ![#c00510](https://via.placeholder.com/50x20/c00510/c00510.png) |
| **Azul Primario** | `#1e3c72` | Navbar, fondos | ![#1e3c72](https://via.placeholder.com/50x20/1e3c72/1e3c72.png) |
| **Azul Secundario** | `#2a5298` | Degradados navbar | ![#2a5298](https://via.placeholder.com/50x20/2a5298/2a5298.png) |
| **Azul Banner** | `#0A39E4` | Banner FAQ | ![#0A39E4](https://via.placeholder.com/50x20/0A39E4/0A39E4.png) |
| **Gris Fondo** | `#efefef` | Footer background | ![#efefef](https://via.placeholder.com/50x20/efefef/efefef.png) |
| **Gris Texto** | `#85929E` | Enlaces footer | ![#85929E](https://via.placeholder.com/50x20/85929E/85929E.png) |

### Variables CSS

```css
:root {
    --senati-red: #e30613;
    --senati-red-dark: #c00510;
    --senati-blue: #1e3c72;
    --senati-blue-light: #2a5298;
    --senati-blue-banner: #0A39E4;
    --senati-gray-bg: #efefef;
    --senati-gray-text: #85929E;
}
```

---

## 💻 Instalación

### Opción 1: Clonar el repositorio

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/SENATI---TEAM.git

# Entrar al directorio
cd SENATI---TEAM

# Abrir con Live Server o navegador
open index.html
```

### Opción 2: Descargar ZIP

1. Descarga el archivo ZIP del repositorio
2. Extrae el contenido en tu carpeta de proyectos
3. Abre `index.html` en tu navegador favorito

### Opción 3: Desarrollo Local con Live Server

#### Visual Studio Code

```bash
# Instalar Live Server extension
code --install-extension ritwickdey.LiveServer

# Abrir el proyecto
code .

# Clic derecho en index.html > Open with Live Server
```

#### Python Simple Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Abrir: http://localhost:8000
```

---
