// animations_enhanced.js - Script mejorado para animaciones al hacer scroll

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las secciones principales
    const sections = document.querySelectorAll('section');
    
    // Opciones para el Intersection Observer
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // Activa cuando al menos 15% de la sección es visible
    };
    
    // Efectos de animación disponibles para asignar a las secciones
    const animationEffects = [
        'fade-in', // Desvanecer
        'slide-up', // Deslizar hacia arriba
        'slide-right', // Deslizar desde la derecha
        'slide-left', // Deslizar desde la izquierda
        'zoom-in', // Efecto zoom
        'rotate-in', // Rotación suave
        'bounce-in' // Efecto rebote
    ];
    
    // Asigna efectos de animación a cada sección
    sections.forEach((section, index) => {
        // Asigna un efecto basado en el índice (distribución cíclica)
        const effectIndex = index % animationEffects.length;
        section.classList.add(animationEffects[effectIndex]);
        section.classList.add('animated-section');
        
        // Para elementos dentro de cada sección, distribuye efectos variados
        const elementsToAnimate = section.querySelectorAll('h1, h2, h3, p, img, .producto, .proceso, .gallery-item, .stat-item');
        elementsToAnimate.forEach((element, elementIndex) => {
            // Distribuye diferentes efectos para los subelementos
            const subEffectIndex = (index + elementIndex) % animationEffects.length;
            element.classList.add(animationEffects[subEffectIndex]);
            element.classList.add('animate-item');
            
            // Añade retraso progresivo basado en el índice del elemento
            element.style.transitionDelay = `${elementIndex * 0.1}s`;
        });
    });
    
    // Función que se ejecuta cuando una sección entra en el viewport
    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Si la sección está en el viewport
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación 
                entry.target.classList.add('visible');
                
                // Anima los elementos hijos con un retraso progresivo
                const animatedElements = entry.target.querySelectorAll('.animate-item');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, 100 * index); // Aplica un retraso progresivo a cada elemento
                });
            } else {
                // Opcional: reset de animaciones cuando salen del viewport
                // entry.target.classList.remove('visible');
                // const animatedElements = entry.target.querySelectorAll('.animate-item');
                // animatedElements.forEach(el => el.classList.remove('visible'));
            }
        });
    }, options);
    
    // Observa todas las secciones
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Animación especial para el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('active');
        }, 200);
    }
    
    // Animación para el menú al hacer scroll con efecto parallax
    const header = document.querySelector('header');
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Cambia el estilo del header al hacer scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Efecto parallax para elementos con la clase .parallax
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.2;
            element.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    });
    
    // Animación para transición entre páginas
    const pageLinks = document.querySelectorAll('nav a, .boton-galeria');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').charAt(0) === '#') {
                // No aplicar para links de anclaje
                return;
            }
            
            if (this.getAttribute('target') === '_blank') {
                // No aplicar para links que abren en nueva ventana
                return;
            }
            
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Añade clase de animación de salida al body
            document.body.classList.add('page-transition-out');
            
            // Después de la animación, navega a la página
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
    
    // Si la página se está cargando (no es mediante la navegación interna)
    if (document.body.classList.contains('page-transition-in')) {
        document.body.classList.remove('page-transition-in');
    } else {
        // Añade animación de entrada al cargar la página
        document.body.classList.add('page-transition-in');
    }
});

// Función para animar contador de estadísticas
function animateCounters() {
    const counterElements = document.querySelectorAll('.stat-item h3');
    
    counterElements.forEach(counter => {
        const target = parseInt(counter.textContent, 10);
        let count = 0;
        const duration = 2000; // 2 segundos para la animación
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        
        const animate = () => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                return;
            }
            
            counter.textContent = Math.floor(count);
            requestAnimationFrame(animate);
        };
        
        animate();
    });
}

// Observador para activar animación de contadores cuando sean visibles
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}