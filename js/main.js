// Variables globales
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const btnLogout = document.getElementById('btnLogout');
const menuItems = document.querySelectorAll('.menu-item');
const contentArea = document.getElementById('contentArea');
const userNameDisplay = document.getElementById('userName');

// Contenido de las páginas
const pages = {
    inicio: {
        title: 'Inicio',
        content: `
            <div class="page-content">
                <h2>🏠 Bienvenido al Campus Online SENATI</h2>
                <p>Este es tu portal de acceso a todas las herramientas y recursos académicos.</p>
                
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                        <h3>📚 Cursos Activos</h3>
                        <p>Tienes 6 cursos en progreso este semestre</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                        <h3>📝 Tareas Pendientes</h3>
                        <p>3 tareas por entregar esta semana</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                        <h3>📊 Promedio General</h3>
                        <p>Tu promedio actual es: 16.5</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                        <h3>🎯 Asistencia</h3>
                        <p>95% de asistencia este mes</p>
                    </div>
                </div>
            </div>
        `
    },
    biblioteca: {
        title: 'Biblioteca',
        content: `
            <div class="page-content">
                <h2>📚 Biblioteca Virtual</h2>
                <p>Accede a todos los recursos bibliográficos digitales disponibles.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                        <h3>📖 Libros Digitales</h3>
                        <p>Más de 5,000 títulos disponibles</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">
                        <h3>📄 Revistas Técnicas</h3>
                        <p>Artículos especializados actualizados</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
                        <h3>🔍 Buscador</h3>
                        <p>Encuentra recursos por tema</p>
                    </div>
                </div>
            </div>
        `
    },
    proyectos: {
        title: 'Proyectos',
        content: `
            <div class="page-content">
                <h2>📁 Biblioteca de Proyectos</h2>
                <p>Consulta y descarga proyectos de referencia de semestres anteriores.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
                        <h3>⚙️ Proyectos de Mecánica</h3>
                        <p>120 proyectos disponibles</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
                        <h3>⚡ Proyectos de Electricidad</h3>
                        <p>85 proyectos disponibles</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);">
                        <h3>💻 Proyectos de Sistemas</h3>
                        <p>95 proyectos disponibles</p>
                    </div>
                </div>
            </div>
        `
    },
    blackboard: {
        title: 'Blackboard',
        content: `
            <div class="page-content">
                <h2>🎯 Plataforma Blackboard</h2>
                <p>Accede a tus cursos virtuales y materiales de clase.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #f77062 0%, #fe5196 100%);">
                        <h3>📘 Mis Cursos</h3>
                        <p>6 cursos activos</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);">
                        <h3>📝 Evaluaciones</h3>
                        <p>2 evaluaciones programadas</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #37ecba 0%, #72afd3 100%);">
                        <h3>💬 Foros</h3>
                        <p>Participa en discusiones</p>
                    </div>
                </div>
            </div>
        `
    },
    correo: {
        title: 'Correo',
        content: `
            <div class="page-content">
                <h2>✉️ Correo Institucional</h2>
                <p>Revisa tu correo electrónico institucional.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%);">
                        <h3>📬 Bandeja de Entrada</h3>
                        <p>8 mensajes nuevos</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);">
                        <h3>📤 Enviados</h3>
                        <p>15 mensajes enviados</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);">
                        <h3>✏️ Redactar</h3>
                        <p>Nuevo mensaje</p>
                    </div>
                </div>
            </div>
        `
    },
    disenos: {
        title: 'Diseños Curriculares',
        content: `
            <div class="page-content">
                <h2>🎨 Diseños Curriculares</h2>
                <p>Consulta los planes de estudio y mallas curriculares de tu carrera.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%);">
                        <h3>📋 Plan de Estudios</h3>
                        <p>Visualiza tu malla curricular</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #a1ffce 0%, #faffd1 100%);">
                        <h3>🎯 Competencias</h3>
                        <p>Competencias por carrera</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%);">
                        <h3>📊 Sílabos</h3>
                        <p>Descarga sílabos de cursos</p>
                    </div>
                </div>
            </div>
        `
    },
    titulacion: {
        title: 'Titulación',
        content: `
            <div class="page-content">
                <h2>🏆 Proceso de Titulación</h2>
                <p>Información y seguimiento de tu proceso de titulación.</p>
                <div class="cards-container">
                    <div class="card" style="background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);">
                        <h3>📜 Requisitos</h3>
                        <p>Documentos necesarios</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);">
                        <h3>📝 Mi Expediente</h3>
                        <p>Estado de tu trámite</p>
                    </div>
                    <div class="card" style="background: linear-gradient(135deg, #55efc4 0%, #00b894 100%);">
                        <h3>📅 Cronograma</h3>
                        <p>Fechas importantes</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Función para hacer login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Guardar el nombre de usuario
        userNameDisplay.textContent = username;
        
        // Ocultar login y mostrar dashboard
        loginScreen.style.display = 'none';
        dashboard.classList.add('active');
        
        // Cargar página de inicio
        loadPage('inicio');
    }
});

// Función para cerrar sesión
btnLogout.addEventListener('click', () => {
    dashboard.classList.remove('active');
    loginScreen.style.display = 'flex';
    loginForm.reset();
});

// Función para cargar página
function loadPage(pageName) {
    const page = pages[pageName];
    if (page) {
        contentArea.innerHTML = page.content;
    }
}

// Eventos del menú
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remover clase active de todos
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Agregar clase active al item clickeado
        item.classList.add('active');
        
        // Cargar la página correspondiente
        const pageName = item.getAttribute('data-page');
        loadPage(pageName);
    });
});

// Cargar página de inicio por defecto
loadPage('inicio');