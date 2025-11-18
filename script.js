 // script de interação mínimo (pode ser removido se não for necessário)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // comportamento de rolagem suave para âncoras internas
                const href = e.currentTarget.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });