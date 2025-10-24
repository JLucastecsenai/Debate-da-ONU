    // Transição de saída ao clicar em links
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Só aplica se não for link de download ou âncora
                if (this.getAttribute('download') || this.getAttribute('href').startsWith('#')) {
                    return;
                }
                
                e.preventDefault();
                const href = this.href;
                
                // Aplica fade-out
                document.body.classList.add('fade-out');
                
                // Aguarda a animação terminar antes de redirecionar
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        });
        
        // Fade-in ao carregar a página
        document.body.classList.add('fade-in');
    });