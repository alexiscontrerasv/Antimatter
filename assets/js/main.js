/**
 * VoidOwl - Main JavaScript
 * Funcionalidad para navbar móvil, smooth scroll e IntersectionObserver
 */

(function() {
    'use strict';

    // ============================================
    // NAVBAR MÓVIL - Toggle Menu
    // ============================================
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarNav.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL para enlaces del navbar
    // ============================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar si es solo "#" o está vacío
            if (href === '#' || href === '') {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // INTERSECTION OBSERVER para animaciones
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: dejar de observar después de que se anima
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase fade-up en toda la página
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    fadeUpElements.forEach(element => {
        observer.observe(element);
    });

    // Observar el contenedor del hero para activar todas las animaciones
    const heroSectionForObserver = document.getElementById('hero');
    if (heroSectionForObserver) {
        const heroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Activar todas las animaciones del hero
                    fadeUpElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('is-visible');
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        heroObserver.observe(heroSectionForObserver);
    }

    // ============================================
    // NAVBAR SCROLL EFFECT (opcional)
    // ============================================
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(5, 8, 22, 0.95)';
        } else {
            navbar.style.background = 'rgba(5, 8, 22, 0.85)';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // INTERACCIÓN CON MOUSE EN EL BACKGROUND
    // ============================================
    const heroSection = document.getElementById('hero');
    const mouseGradient = document.getElementById('mouseGradient');
    const orb1 = document.getElementById('orb1');
    const orb2 = document.getElementById('orb2');
    const orb3 = document.getElementById('orb3');
    const orb4 = document.getElementById('orb4');
    const orb5 = document.getElementById('orb5');
    
    if (heroSection && mouseGradient) {
        let currentGradientX = 0;
        let currentGradientY = 0;
        let targetGradientX = 0;
        let targetGradientY = 0;
        
        let orb1OffsetX = 0;
        let orb1OffsetY = 0;
        let orb2OffsetX = 0;
        let orb2OffsetY = 0;
        let orb3Scale = 1;
        
        // Función de animación suave
        let isAnimating = true;
        
        function smoothAnimate() {
            if (!isAnimating) return;
            
            // Suavizar movimiento del gradiente
            currentGradientX += (targetGradientX - currentGradientX) * 0.15;
            currentGradientY += (targetGradientY - currentGradientY) * 0.15;
            mouseGradient.style.transform = `translate(${currentGradientX}px, ${currentGradientY}px)`;
            
            // Suavizar offsets de los orbes solo si hay interacción
            if (Math.abs(orb1OffsetX) > 0.1 || Math.abs(orb1OffsetY) > 0.1) {
                orb1OffsetX += (0 - orb1OffsetX) * 0.1;
                orb1OffsetY += (0 - orb1OffsetY) * 0.1;
                if (orb1) {
                    orb1.style.transform = `translate3d(${orb1OffsetX}px, ${orb1OffsetY}px, 0)`;
                }
            } else if (orb1) {
                orb1.style.transform = '';
            }
            
            if (Math.abs(orb2OffsetX) > 0.1 || Math.abs(orb2OffsetY) > 0.1) {
                orb2OffsetX += (0 - orb2OffsetX) * 0.1;
                orb2OffsetY += (0 - orb2OffsetY) * 0.1;
                if (orb2) {
                    orb2.style.transform = `translate3d(${orb2OffsetX}px, ${orb2OffsetY}px, 0)`;
                }
            } else if (orb2) {
                orb2.style.transform = '';
            }
            
            if (Math.abs(orb3Scale - 1) > 0.01) {
                orb3Scale += (1 - orb3Scale) * 0.1;
                if (orb3) {
                    orb3.style.transform = `translate3d(-50%, -50%, 0) scale(${orb3Scale})`;
                }
            } else if (orb3) {
                orb3.style.transform = '';
            }
            
            requestAnimationFrame(smoothAnimate);
        }
        
        smoothAnimate();
        
        // Contenedor de burbujas
        const bubblesContainer = document.getElementById('bubblesContainer');
        let lastBubbleTime = 0;
        const bubbleInterval = 150; // Crear burbuja cada 150ms máximo
        
        // Función para crear una burbuja
        function createBubble(x, y, size = 'medium') {
            const bubble = document.createElement('div');
            bubble.className = `mouse-bubble bubble-${size}`;
            bubble.style.left = x + 'px';
            bubble.style.top = y + 'px';
            
            bubblesContainer.appendChild(bubble);
            
            // Remover la burbuja después de la animación
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 1200);
        }
        
        // Seguir el mouse con el gradiente y crear burbujas
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Gradiente sutil que sigue el mouse
            targetGradientX = mouseX - 200;
            targetGradientY = mouseY - 200;
            
            mouseGradient.classList.add('active');
            
            clearTimeout(window.mouseInactiveTimer);
            window.mouseInactiveTimer = setTimeout(() => {
                mouseGradient.classList.remove('active');
            }, 1000);
            
            // Crear burbujas con throttling
            const now = Date.now();
            if (now - lastBubbleTime > bubbleInterval) {
                lastBubbleTime = now;
                
                // Crear burbuja principal
                createBubble(mouseX, mouseY, 'medium');
                
                // Ocasionalmente crear burbujas adicionales más pequeñas
                if (Math.random() > 0.7) {
                    const offsetX = (Math.random() - 0.5) * 40;
                    const offsetY = (Math.random() - 0.5) * 40;
                    createBubble(mouseX + offsetX, mouseY + offsetY, 'small');
                }
                
                // Raramente crear una burbuja grande
                if (Math.random() > 0.9) {
                    createBubble(mouseX, mouseY, 'large');
                }
            }
            
            // Calcular interacciones con los orbes
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Orb 1 - Se aleja del mouse (posición aproximada: top-left)
            const orb1CenterX = 100;
            const orb1CenterY = 100;
            const orb1Dist = Math.sqrt(Math.pow(mouseX - orb1CenterX, 2) + Math.pow(mouseY - orb1CenterY, 2));
            
            if (orb1Dist < 400) {
                const force = (400 - orb1Dist) / 400;
                const angle = Math.atan2(orb1CenterY - mouseY, orb1CenterX - mouseX);
                orb1OffsetX = Math.cos(angle) * force * 60;
                orb1OffsetY = Math.sin(angle) * force * 60;
            }
            
            // Orb 2 - Se acerca al mouse (posición aproximada: bottom-right)
            const orb2CenterX = rect.width - 100;
            const orb2CenterY = rect.height - 100;
            const orb2Dist = Math.sqrt(Math.pow(mouseX - orb2CenterX, 2) + Math.pow(mouseY - orb2CenterY, 2));
            
            if (orb2Dist < 500) {
                const force = (500 - orb2Dist) / 500;
                const angle = Math.atan2(mouseY - orb2CenterY, mouseX - orb2CenterX);
                orb2OffsetX = Math.cos(angle) * force * 40;
                orb2OffsetY = Math.sin(angle) * force * 40;
            }
            
            // Orb 3 - Escala cuando el mouse está cerca (centro)
            const orb3Dist = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
            
            if (orb3Dist < 300) {
                orb3Scale = 1 + ((300 - orb3Dist) / 300) * 0.4;
            }
        });
        
        heroSection.addEventListener('mouseenter', function() {
            mouseGradient.classList.add('active');
        });
        
        heroSection.addEventListener('mouseleave', function() {
            mouseGradient.classList.remove('active');
            orb1OffsetX = 0;
            orb1OffsetY = 0;
            orb2OffsetX = 0;
            orb2OffsetY = 0;
            orb3Scale = 1;
        });
    }

    // ============================================
    // EFECTO BURBUJAS EN TODAS LAS SECCIONES
    // ============================================
    const sectionsWithBubbles = document.querySelectorAll('.section-dark, .section-light, .section-cta');
    
    sectionsWithBubbles.forEach(section => {
        const bubblesContainer = section.querySelector('.bubbles-container');
        if (!bubblesContainer) return;
        
        let lastBubbleTime = 0;
        const bubbleInterval = 200; // Intervalo ligeramente mayor para otras secciones
        
        // Función para crear burbuja en secciones
        function createSectionBubble(x, y, size = 'medium') {
            const bubble = document.createElement('div');
            bubble.className = `mouse-bubble bubble-${size}`;
            bubble.style.left = x + 'px';
            bubble.style.top = y + 'px';
            
            bubblesContainer.appendChild(bubble);
            
            // Remover la burbuja después de la animación
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 1200);
        }
        
        // Agregar efecto de burbujas al mover el mouse
        section.addEventListener('mousemove', function(e) {
            const rect = section.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Crear burbujas con throttling
            const now = Date.now();
            if (now - lastBubbleTime > bubbleInterval) {
                lastBubbleTime = now;
                
                // Crear burbuja principal
                createSectionBubble(mouseX, mouseY, 'medium');
                
                // Ocasionalmente crear burbujas adicionales más pequeñas
                if (Math.random() > 0.75) {
                    const offsetX = (Math.random() - 0.5) * 50;
                    const offsetY = (Math.random() - 0.5) * 50;
                    createSectionBubble(mouseX + offsetX, mouseY + offsetY, 'small');
                }
                
                // Raramente crear una burbuja grande
                if (Math.random() > 0.92) {
                    createSectionBubble(mouseX, mouseY, 'large');
                }
            }
        });
    });

    // ============================================
    // FAQ - Acordeón
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los demás items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        if (otherQuestion) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle del item actual
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // ============================================
    // AÑO ACTUAL EN FOOTER
    // ============================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // FORMULARIO DE CONTACTO
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí se puede agregar lógica de envío cuando haya backend
            // Por ahora, solo mostramos un mensaje
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Crear mensaje de éxito temporal
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.style.cssText = `
                background: rgba(59, 130, 246, 0.1);
                border: 1px solid rgba(59, 130, 246, 0.3);
                border-radius: 8px;
                padding: var(--spacing-md);
                margin-top: var(--spacing-md);
                color: var(--color-neon-cyan);
                text-align: center;
                font-weight: 600;
            `;
            successMessage.textContent = `¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`;
            
            // Remover mensaje anterior si existe
            const existingMessage = contactForm.querySelector('.form-success');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            contactForm.appendChild(successMessage);
            contactForm.reset();
            
            // Remover mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // ============================================
    // CONSOLE LOG (solo para desarrollo)
    // ============================================
    console.log('VoidOwl - Sitio cargado correctamente');
})();

