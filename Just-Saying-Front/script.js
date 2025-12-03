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