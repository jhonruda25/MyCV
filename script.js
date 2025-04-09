// Configuración de partículas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#ff00ff", "#00a1ff", "#00fff9"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ff00ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }

    // Navegación
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animación de barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    };

    // Iniciar animación cuando la sección de habilidades está en el viewport
    const skillsSection = document.querySelector('.skills');
    
    const checkSkillsInView = () => {
        if (!skillsSection) return;
        
        const sectionPosition = skillsSection.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (sectionPosition.top < screenPosition && sectionPosition.bottom >= 0) {
            animateSkillBars();
            window.removeEventListener('scroll', checkSkillsInView);
        }
    };

    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Verificar al cargar la página

    // Animación de elementos al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .timeline-item, .education-card, .certification-card, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const screenPosition = window.innerHeight;
            
            if (elementPosition.top < screenPosition * 0.9) {
                element.classList.add('animate-in');
            }
        });
    };

    // Agregar clase para animación CSS
    const addAnimationClass = () => {
        const elements = document.querySelectorAll('.about-content, .timeline-item, .education-card, .certification-card, .contact-container');
        
        elements.forEach(element => {
            element.classList.add('animate-ready');
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', addAnimationClass);
    animateOnScroll(); // Verificar al cargar la página

    // Efecto parallax en el hero section
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('mousemove', (e) => {
        if (!heroSection || !heroContent) return;
        
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío de formulario
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                // Mostrar mensaje de éxito
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Mensaje enviado correctamente';
                
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Eliminar mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }

    // Animación 3D para elementos
    const laptop3D = document.querySelector('.laptop-3d');
    const mouse3D = document.querySelector('.mouse-3d');
    
    if (laptop3D && mouse3D) {
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const laptopRotateY = (mouseX - 0.5) * 30;
            const laptopRotateX = (mouseY - 0.5) * -20;
            
            const mouseRotateY = (mouseX - 0.5) * 20;
            const mouseRotateX = (mouseY - 0.5) * -10;
            
            laptop3D.style.transform = `rotateY(${15 + laptopRotateY}deg) rotateX(${laptopRotateX}deg) translateZ(20px)`;
            mouse3D.style.transform = `rotateY(${-15 + mouseRotateY}deg) rotateX(${mouseRotateX}deg)`;
        });
    }

    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Añadir CSS adicional para animaciones
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            background: rgba(0, 255, 0, 0.1);
            color: #00ff00;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease;
        }
        
        .success-message i {
            margin-right: 10px;
            font-size: 1.2rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    
    document.head.appendChild(style);

    // Inicializar Three.js para efectos 3D avanzados si está disponible
    if (typeof THREE !== 'undefined') {
        // Configuración básica de Three.js
        const container = document.querySelector('.hero');
        if (!container) return;
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        
        // Añadir el renderer al DOM
        const threeContainer = document.createElement('div');
        threeContainer.className = 'three-container';
        threeContainer.style.position = 'absolute';
        threeContainer.style.top = '0';
        threeContainer.style.left = '0';
        threeContainer.style.width = '100%';
        threeContainer.style.height = '100%';
        threeContainer.style.zIndex = '-1';
        threeContainer.style.pointerEvents = 'none';
        
        threeContainer.appendChild(renderer.domElement);
        container.appendChild(threeContainer);
        
        // Crear geometrías y materiales
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);
        
        // Animación
        const animate = () => {
            requestAnimationFrame(animate);
            
            torusKnot.rotation.x += 0.003;
            torusKnot.rotation.y += 0.005;
            
            renderer.render(scene, camera);
        };
        
        animate();
        
        // Ajustar tamaño al redimensionar ventana
        window.addEventListener('resize', () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            
            renderer.setSize(newWidth, newHeight);
        });
    }
});
