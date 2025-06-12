// main.js - custom JS for portfolio

(function () {
    "use strict";

    // Activate Bootstrap ScrollSpy
    const scrollSpyTargets = document.querySelectorAll('[data-bs-spy="scroll"]');
    scrollSpyTargets.forEach(el => {
        bootstrap.ScrollSpy.getInstance(el) || new bootstrap.ScrollSpy(el, {
            offset: 75,
        });
    });

    // Collapse responsive navbar on link click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarNav) || new bootstrap.Collapse(navbarNav, { toggle: false });
                bsCollapse.hide();
            }
        });
    });

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ---------------------
       Reveal on scroll
    ---------------------*/
    // Mark containers as reveal targets (excluding hero)
    document.querySelectorAll('.section-full .container').forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target); // reveal once
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ---------------------
       Navbar glass effect
    ---------------------*/
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-glass');
        } else {
            navbar.classList.remove('navbar-glass');
        }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
})();
