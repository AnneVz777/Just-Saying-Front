document.addEventListener('DOMContentLoaded', () => {
    
    const carrosseis = document.querySelectorAll(".carrossel-container");

    carrosseis.forEach(container => {
        const track = container.querySelector(".carrossel-trilho");
        const btnLeft = container.querySelector(".carrossel-btn.esquerdo");
        const btnRight = container.querySelector(".carrossel-btn.direito");

        if (!track || !btnLeft || !btnRight) return; // Garante que o carrossel está completo

        let scrollAmount = 0;

        const calcularScrollAmount = () => {
            const firstCard = track.querySelector(".curso-card"); 
            
            if (firstCard) {
                scrollAmount = firstCard.offsetWidth + 20; 
            } else {
                scrollAmount = 320; 
            }
        };

        calcularScrollAmount(); 
        
        window.addEventListener('resize', calcularScrollAmount);


        btnRight.addEventListener("click", () => {
            track.scroll({
                left: track.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        });

        btnLeft.addEventListener("click", () => {
            track.scroll({
                left: track.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const btnLeitor = document.getElementById('btn-leitor-texto');
    
    if ('speechSynthesis' in window) {
        
        btnLeitor.addEventListener('click', () => {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                btnLeitor.textContent = 'Ler Página';
                btnLeitor.title = 'Ativar Leitura de Conteúdo';
                return;
            }

            const conteudoPrincipal = document.querySelector('main').innerText;
            
            if (conteudoPrincipal) {
                const utterance = new SpeechSynthesisUtterance(conteudoPrincipal);
                
                utterance.lang = 'pt-BR'; 
                utterance.rate = 1.0; 
                
                window.speechSynthesis.speak(utterance);

                btnLeitor.textContent = 'Parar Leitura';
                btnLeitor.title = 'Parar Leitura de Conteúdo';
                
                utterance.onend = () => {
                    btnLeitor.textContent = 'Ler Página';
                    btnLeitor.title = 'Ativar Leitura de Conteúdo';
                };
            }
        });

    } else {
        btnLeitor.disabled = true;
        btnLeitor.title = 'Seu navegador não suporta a função de leitura.';
    }
});