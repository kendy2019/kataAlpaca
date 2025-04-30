// Definir textos en ambos idiomas
const textos = {
    es: {
        "menu-inicio": "Inicio",
        "menu-nosotros": "Nosotros",
        "menu-productos": "Productos",
        "menu-proceso": "Proceso",
        "menu-compromiso": "Compromiso",
        "menu-contacto": "Contacto",
        "nosotros-titulo": "30 años de experiencia en producción textil",
        "nosotros-descripcion": `Con más de 30 años de experiencia, somos una empresa peruana con sede en 
                            Arequipa, especializada en la producción de prendas de punto y accesorios.
                            Desde nuestra fundación en 1991, hemos brindado servicios a empresas líderes 
                            en la industria textil de alpaca, lo que nos ha permitido perfeccionar 
                            nuestras técnicas de producción y desarrollar un fuerte compromiso con el 
                            control de calidad.`,
        "productos-titulo": "Líneas de productos",
        "productos-galeria": "GALERIA",
        "productos-dama": "Línea de dama",
        "productos-dama-desc": "Descubre destinos que no te puedes perder.",
        "productos-varon": "Línea de varón",
        "productos-varon-desc": "Disfruta de un viaje sin complicaciones con estos consejos antes, durante y después del viaje.",
        "productos-accesorios": "Accesorios",
        "productos-accesorios-desc": "Aprovecha al máximo tus vacaciones disfrutando de itinerarios únicos.",
        "procesos-titulo":"Procesos",
        "titulo-diseno": "Diseño",
        "texto-diseno":"Incluye los mejores posts de tus viajes para que tus posibles colaboradores se hagan una idea del tipo de trabajo que realizas.",
        "titulo-tejido":"Tejido",
        "texto-tejido": "Incluye los mejores posts de tus viajes para que tus posibles colaboradores se hagan una idea del tipo de trabajo que realizas.",
        "titulo-confeccion":"Confección",
        "texto-confeccion": "Incluye los mejores posts de tus viajes para que tus posibles colaboradores se hagan una idea del tipo de trabajo que realizas.",
        "gallery-title":"Galería",
        "title": "Kata para el mundo",
        "subtitle": "ESTADÍSTICAS DE LA EMPRESA",
        "workSince": "Trabajando desde",
        "exportSince": "Exportando desde",
        "countries": "Países a los que exportamos actualmente",
        "fairs": "Ferias internacionales",
        "footer-text": "Copyright © 2025 Kata Alpaca",
        "descripcion": "Somos expertos en la creación de prendas de punto: ropa y accesorios de la más alta calidad.",
        "contacto":"Contactanos",
        "compromiso-titulo": "Nuestro Compromiso",
        "compromiso-subtitulo": "En Kata Alpaca, creemos en un futuro más sostenible, justo y responsable.",
        "sostenibilidad-titulo": "Sostenibilidad",
        "sostenibilidad-texto": "Nos esforzamos por reducir el impacto ambiental utilizando procesos de producción responsables y materiales ecológicos.",
        "sost-1":"We use shearing techniques that respect animal welfare.Utilizamos técnicas de esquila respetuosas con el bienestar animal.",
        "sost-2":"Implementamos sistemas de ahorro de agua en nuestros procesos de lavado y teñido.",
        "sost-3":"Trabajamos con tintes naturales y procesos de bajo impacto ambiental.",
        "sost-4":"Reducimos, reutilizamos y reciclamos materiales en toda nuestra cadena de producción.",
        "sost-5":"Nos abastecemos localmente cuando es posible para reducir nuestra huella de carbono.",
        "sost-6":"Nuestro compromiso es continuar innovando para encontrar formas más sostenibles de producir textiles de alpaca de alta calidad.",
        "responsabilidad-titulo": "Responsabilidad Social",
        "responsabilidad-texto": "Apoyamos a nuestras comunidades locales generando empleo digno y promoviendo condiciones laborales justas.",
        "respom-1":"Pagamos salarios justos y por encima del mercado a todos nuestros colaboradores.",
        "respom-2":"Ofrecemos programas de capacitación y desarrollo profesional.",
        "respom-3":"Trabajamos directamente con más de 100 familias de criadores de alpaca en los Andes.",
        "respom-4":"Implementamos programas de educación y salud en las comunidades donde operamos.",
        "respom-5":"Promovemos la preservación cultural y las técnicas textiles tradicionales. ",
        "respom-6":"Al elegir Kata Alpaca, estás apoyando directamente el desarrollo económico sostenible de comunidades andinas.",
        "calidad-texto": "Nos comprometemos a ofrecer productos textiles de alta calidad con total transparencia en cada paso de nuestra cadena de valor.",
        "conocer-mas": "Conocer más",
        "cerrar": "Cerrar",
        "sostenibilidad-detalle-titulo": "Sostenibilidad en Kata Alpaca",
        "sostenibilidad-detalle-subtitulo": "Nuestras Prácticas Sostenibles",
        "sostenibilidad-detalle-texto": "En Kata Alpaca, la sostenibilidad no es solo una palabra, sino una filosofía que guía cada decisión que tomamos:",
        "responsabilidad-detalle-titulo": "Responsabilidad Social en Kata Alpaca",
        "responsabilidad-detalle-subtitulo": "Nuestro Impacto Social",
        "responsabilidad-detalle-texto": "Creemos firmemente en el poder de los negocios para generar cambios positivos en las comunidades:",
        "calidad-detalle-titulo": "Calidad y Transparencia en Kata Alpaca",
        "calidad-detalle-subtitulo": "Nuestros Estándares de Excelencia",
        "calidad-detalle-texto": "La calidad y transparencia son los pilares fundamentales de nuestra marca:",
        "cali-1":"Seleccionamos cuidadosamente cada fibra de alpaca según su finura y textura.",
        "cali-2":"Realizamos rigurosos controles de calidad en cada etapa de producción.",
        "cali-3":"Documentamos y compartimos toda nuestra cadena de suministro.",
        "cali-4":"Asignamos un código QR a cada producto para rastrear su origen.",
        "cali-5":"Invitamos a nuestros clientes a visitar nuestras instalaciones y conocer nuestro proceso.",
        "cali-6":"Nuestra transparencia es nuestro sello distintivo, porque creemos que tienes derecho a saber exactamente cómo se fabrican nuestros productos."

    },
    en: {
        "menu-inicio": "Home",
        "menu-nosotros": "About Us",
        "menu-proceso": "Process",
        "menu-productos": "Products",
        "menu-compromiso": "Commitment",
        "menu-contacto": "Contact",
        "nosotros-titulo": "30 years of experience in textile production",
        "nosotros-descripcion": `With over 30 years of experience, are a Peruvian company based in
                                 Arequipa, specializing in the production of knitwear and accessories. 
                                 Since our founding in 1991, we have been providing services to leading
                                 companies in the alpaca textile industry, which allowed us to refine
                                 our production techniques and develop a strong commitment to quality control.`,
        "productos-titulo": "Product Lines",
        "productos-galeria": "GALLERY",
        "productos-dama": "Women's Line",
        "productos-dama-desc": "Discover destinations you can't miss.",
        "productos-varon": "Men's Line",
        "productos-varon-desc": "Enjoy a hassle-free trip with these tips before, during, and after your journey.",
        "productos-accesorios": "Accessories",
        "productos-accesorios-desc": "Make the most of your vacation by enjoying unique itineraries.",
        "procesos-titulo":"Processes",
        "titulo-diseno": "Design",
        "texto-diseno":"Include the best posts from your trips so that potential collaborators get an idea of the type of work you do.",
        "titulo-tejido": "Weaving",
        "texto-tejido": "Include the best posts from your trips so that potential collaborators get an idea of the type of work you do.",
        "titulo-confeccion":"Sewing",
        "texto-confeccion":"Include the best posts from your trips so that potential collaborators get an idea of the type of work you do.",
        "gallery-title":"Gallery",
        "title": "Kata for the World",
        "subtitle": "COMPANY STATISTICS",
        "workSince": "Working since",
        "exportSince": "Exporting since",
        "countries": "Countries we currently export to",
        "fairs": "International fairs",
        "footer-text": "Copyright © 2025 Kata Alpaca",
        "descripcion": "We are experts in creating knitwear: clothing and accessories of the highest quality.",
        "contacto":"Contact us",
        "compromiso-titulo": "Our Commitment",
        "compromiso-subtitulo": "At Kata Alpaca, we believe in a more sustainable, fair, and responsible future.",
        "sostenibilidad-titulo": "Sustainability",
        "sostenibilidad-texto": "We strive to reduce our environmental impact by using responsible production processes and eco-friendly materials.",
        "sost-1":"We use shearing techniques that respect animal welfare.",
        "sost-2":"We implement water-saving systems in our washing and dyeing processes.",
        "sost-3":"We work with natural dyes and low-impact environmental processes.",
        "sost-4":"We reduce, reuse, and recycle materials throughout our entire production chain.",
        "sost-5":"We source locally whenever possible to reduce our carbon footprint.",
        "sost-6":"Our commitment is to continue innovating to find more sustainable ways to produce high-quality alpaca textiles.",
        "responsabilidad-titulo": "Social Responsibility",
        "responsabilidad-texto": "We support our local communities by generating decent employment and promoting fair working conditions.",
        "respom-1":"We pay fair wages, above market standards, to all our collaborators",
        "respom-2":"We offer training and professional development programs.",
        "respom-3":"We work directly with over 100 alpaca-breeding families in the Andes.",
        "respom-4":"We implement education and health programs in the communities where we operate.",
        "respom-5":"We promote cultural preservation and traditional textile techniques.",
        "respom-6":"By choosing Kata Alpaca, you are directly supporting the sustainable economic development of Andean communities.",
        "calidad-titulo": "Quality and Transparency",
        "calidad-texto": "We are committed to offering high-quality textile products with complete transparency at every step of our value chain.",
        "conocer-mas": "Learn more",
        "cerrar": "Close",
        "sostenibilidad-detalle-titulo": "Sustainability at Kata Alpaca",
        "sostenibilidad-detalle-subtitulo": "Our Sustainable Practices",
        "sostenibilidad-detalle-texto": "At Kata Alpaca, sustainability is not just a word, but a philosophy that guides every decision we make:",
        "responsabilidad-detalle-titulo": "Social Responsibility at Kata Alpaca",
        "responsabilidad-detalle-subtitulo": "Our Social Impact",
        "responsabilidad-detalle-texto": "We firmly believe in the power of business to generate positive changes in communities:",
        "calidad-detalle-titulo": "Quality and Transparency at Kata Alpaca",
        "calidad-detalle-subtitulo": "Our Standards of Excellence",
        "calidad-detalle-texto": "Quality and transparency are the fundamental pillars of our brand:",
        "cali-1":"We carefully select each alpaca fiber based on its fineness and texture.",
        "cali-2":"We carry out rigorous quality controls at every stage of production.",
        "cali-3":"We document and share our entire supply chain.",
        "cali-4":"We assign a QR code to each product to trace its origin.",
        "cali-5":"We invite our customers to visit our facilities and learn about our process.",
        "cali-6":"Transparency is our hallmark, because we believe you have the right to know exactly how our products are made."
    }
};

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    // Guardar idioma en localStorage para recordar la selección
    localStorage.setItem("idiomaSeleccionado", idioma);

    // Recorrer los textos y cambiarlos en la página
    for (const id in textos[idioma]) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = textos[idioma][id];
        }
    }
    
    // Cambiar también el contenido de los elementos con atributo data-translate
    const elementosTraducibles = document.querySelectorAll('[data-translate]');
    elementosTraducibles.forEach(elemento => {
        const claveTraduccion = elemento.getAttribute('data-translate');
        if (textos[idioma][claveTraduccion]) {
            elemento.textContent = textos[idioma][claveTraduccion];
        }
    });
    
    // Actualizar los textos de los botones "Conocer más"
    const botonesConocerMas = document.querySelectorAll('.learn-more');
    if (botonesConocerMas) {
        botonesConocerMas.forEach(boton => {
            boton.textContent = textos[idioma]["conocer-mas"];
        });
    }
}

// Detectar idioma guardado y aplicarlo al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const idiomaGuardado = localStorage.getItem("idiomaSeleccionado") || "es";
    cambiarIdioma(idiomaGuardado);
    
    // Funcionalidad para el menú móvil
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            // Alternar el ícono del botón
            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✖"; // Ícono de cerrar
            } else {
                menuToggle.innerHTML = "&#9776;"; // Ícono de menú
            }
        });
    }
    
    // Funcionalidad para los modales de compromiso
    initCommitmentModals();
});

//Active menu
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
});


// Función para inicializar los modales de compromiso
function initCommitmentModals() {
    // Get all "Learn more" links
    const learnMoreLinks = document.querySelectorAll('.learn-more');
    
    // Add click event to each link
    if (learnMoreLinks) {
        learnMoreLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                const targetDetail = document.getElementById(targetId);
                if (targetDetail) {
                    targetDetail.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                }
            });
        });
    }
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.detail-close');
    
    // Add click event to each close button
    if (closeButtons) {
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const detailSection = this.closest('.commitment-details');
                if (detailSection) {
                    detailSection.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            });
        });
    }
    
    // Close modal when clicking outside the content
    const detailSections = document.querySelectorAll('.commitment-details');
    if (detailSections) {
        detailSections.forEach(section => {
            section.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
}