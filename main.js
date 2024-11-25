// Détection des blocs au défilement
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
});

// Afficher/masquer champ société
        document.getElementById("professionnel").addEventListener("change", function () {
            document.getElementById("societeField").style.display = "block";
        });

        document.getElementById("particulier").addEventListener("change", function () {
            document.getElementById("societeField").style.display = "none";
        });