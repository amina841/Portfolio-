document.addEventListener('DOMContentLoaded', function() {
    // ===== Theme Toggle =====
         const themeToggle = document.createElement('div');
         themeToggle.className = 'theme-toggle';
         themeToggle.innerHTML = '<button class="theme-btn" id="themeToggle">🌙 Dark</button>';
         document.body.appendChild(themeToggle);

    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        themeBtn.textContent = newTheme === 'light' ? '🌙 Dark' : '☀️ Light';
        localStorage.setItem('theme', newTheme);
    });

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
document.getElementById('themeToggle').textContent = savedTheme === 'light' ? '🌙 Dark' : '☀️ Light';

    

    // ===== Language Toggle =====
    const langToggle = document.createElement('div');
    langToggle.className = 'lang-toggle';
    langToggle.innerHTML = '<button class="lang-btn" id="langToggle">العربية</button>';
    document.body.appendChild(langToggle);
    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            contact: "Contact",
            hello: "Hello, I'm",
            name: "Amina Muhamed",
            title: "And I'm a",
            description: "Web designer & frontend developer creating beautiful, functional websites with modern technologies.",
            contactBtn: "Contact Me"
        },
        ar: {
            home: "الرئيسية",
            about: "عني",
            skills: "المهارات",
            contact: "اتصل",
            hello: "مرحبًا، أنا",
            name: "آمنة محمد",
            title: "وأنا",
            description: "مصممة ويب ومطورة واجهات أمامية أصمم مواقع جميلة وعملية باستخدام التقنيات الحديثة.",
            contactBtn: "اتصل بي"
        }
    };

    const langBtn = document.getElementById('langToggle');
    langBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang === 'en' ? 'ar' : 'en';
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        updateLanguage(currentLang);
        langBtn.textContent = currentLang === 'en' ? 'العربية' : 'English';
        localStorage.setItem('language', currentLang);
    });

    function updateLanguage(lang) {
        if (document.querySelector('.text-1')) {
            document.querySelector('.text-1').textContent = translations[lang].hello;
            document.querySelector('.text-2').textContent = translations[lang].name;
            document.querySelector('.text-3').innerHTML = `${translations[lang].title} <span class="typing"></span>`;
            document.querySelector('.description').textContent = translations[lang].description;
            document.querySelector('.btn').textContent = translations[lang].contactBtn;
        }

        const navLinks = document.querySelectorAll('.navbar a');
        if (navLinks.length > 0) {
            navLinks[0].innerHTML = `<i class="fas fa-home"></i> ${translations[lang].home}`;
            navLinks[1].innerHTML = `<i class="fas fa-user"></i> ${translations[lang].about}`;
            navLinks[2].innerHTML = `<i class="fas fa-code"></i> ${translations[lang].skills}`;
            navLinks[3].innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].contact}`;
        }

        if (window.typed) window.typed.destroy();
        initTypingAnimation();
    }

    // Set initial language
    const savedLang = localStorage.getItem('language') || 'en';
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguage(savedLang);
    langBtn.textContent = savedLang === 'en' ? 'العربية' : 'English';
    // ===== Laptop Animation =====
    const bgCanvas = document.getElementById('bgCanvas');
    if (bgCanvas) {
        bgCanvas.remove();
    }

    const videoBg = document.createElement('div');
    videoBg.className = 'video-background';
    videoBg.innerHTML = `
        <div class="laptop-container">
            <div class="laptop">
                <div class="laptop-screen">
                    <div class="screen-content"></div>
                    <div class="screen-overlay"></div>
                    <div class="code-lines" id="codeLines"></div>
                </div>
            </div>
            <div class="laptop-base"></div>
            <div class="laptop-stand"></div>
        </div>
        <div class="video-overlay"></div>
    `;
    document.body.insertBefore(videoBg, document.body.firstChild);

    const codeLines = document.getElementById('codeLines');
    const codeSnippets = [
        "function animate() { requestAnimationFrame(animate); }",
        "const portfolio = { name: 'Amina', skills: ['JS', 'CSS', 'React'] };",
        "import React from 'react';",
        "document.addEventListener('DOMContentLoaded', init);",
        "class Developer { constructor() { this.skills = []; } }",
        "npm install --save-dev webpack",
        "git commit -m 'Update portfolio design'",
        "const api = await fetch('https://api.github.com');",
        "console.log('Hello World!');",
        "while(true) { keepCoding(); }"
    ];
    
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.style.left = `${Math.random() * 20}px`;
        line.style.animationDelay = `${Math.random() * 10}s`;
        line.style.animationDuration = `${15 + Math.random() * 15}s`;
        codeLines.appendChild(line);
    }

    // ===== Mobile Menu =====
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }

    // ===== Typing Animation =====
    function initTypingAnimation() {
        if (document.querySelector('.typing')) {
            window.typed = new Typed('.typing', {
                strings: ['Developer', 'Designer', 'Creator'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }
    }
    initTypingAnimation();
    // ===== Profile Image Effect =====
    const profileCanvas = document.getElementById('profileCanvas');
    if (profileCanvas) {
        const ctx = profileCanvas.getContext('2d');
        const img = document.getElementById('profile-img');
        
        function resizeProfileCanvas() {
            profileCanvas.width = profileCanvas.offsetWidth;
            profileCanvas.height = profileCanvas.offsetHeight;
            drawProfileEffect();
        }
        
        function drawProfileEffect() {
            if (!img.complete) {
                img.onload = drawProfileEffect;
                return;
            }
            
            ctx.clearRect(0, 0, profileCanvas.width, profileCanvas.height);
            
            const gradient = ctx.createRadialGradient(
                profileCanvas.width / 2,
                profileCanvas.height / 2,
                0,
                profileCanvas.width / 2,
                profileCanvas.height / 2,
                profileCanvas.width / 2
            );
            gradient.addColorStop(0, 'rgba(189, 141, 70, 0.8)');
            gradient.addColorStop(1, 'rgba(189, 141, 70, 0)');
            
            ctx.beginPath();
            ctx.arc(
                profileCanvas.width / 2,
                profileCanvas.height / 2,
                profileCanvas.width / 2,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = gradient;
            ctx.fill();
            
            requestAnimationFrame(drawProfileEffect);
        }
        
        window.addEventListener('resize', resizeProfileCanvas);
        resizeProfileCanvas();
    }

    // ===== SVG Wave Animation =====
    const wave = document.getElementById('wave');
    if (wave) {
        let offset = 0;
        
        function animateWave() {
            offset += 0.5;
            wave.setAttribute('d',`M0,0 L0,50 C${150 + offset},100 ${350 + offset},0 500,50 L500,0 Z`);
            requestAnimationFrame(animateWave);
        }
        
        animateWave();
    }

    // ===== Form Validation =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = nameInput.nextElementSibling.nextElementSibling;
            if (nameInput.value.trim() === '') {
                nameError.textContent = document.documentElement.lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = emailInput.nextElementSibling.nextElementSibling;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = document.documentElement.lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = document.documentElement.lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Please enter a valid email';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = messageInput.nextElementSibling.nextElementSibling;
            if (messageInput.value.trim() === '') {
                messageError.textContent = document.documentElement.lang === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            if (isValid) {
                alert(document.documentElement.lang === 'ar' ? 
                    'شكرًا على رسالتك! سأتواصل معك قريبًا.' : 
                    'Thank you for your message! I will get back to you soon.');
                this.reset();
            }
        });
    }
    function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(animateOnScroll));

    // ===== Scroll Animation =====
    function animateOnScroll() {
        const skillsColumns = document.querySelectorAll('.skills-column');
        const contactElements = document.querySelectorAll('.contact-form, .contact-info');
        
        skillsColumns.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
        
        contactElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ===== Active Nav Link =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (currentPage === linkPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveNavLink();
});