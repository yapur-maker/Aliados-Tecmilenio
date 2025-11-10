document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Suponiendo que la sección de paquetes tendrá el id 'packages-section'
            const packagesSection = document.getElementById('packages-section');
            
            if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Si la sección no existe, simplemente evita la acción por defecto del enlace
                console.log('La sección de paquetes no fue encontrada.');
            }
        });
    }
});
