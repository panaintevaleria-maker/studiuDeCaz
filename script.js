document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    // Controlul deschiderii meniurilor dropdown la click/hover pe elementele principale
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');

        // Comportament interactiv: Adaugă clasa active la trecerea mouse-ului
        item.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
        });

        // Alternativă pentru ecrane tactile (mobile): deschidere la click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Închide celelalte dropdown-uri deschise
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.dropdown-menu').classList.remove('active');
                }
            });

            dropdown.classList.toggle('active');
        });
    });

    // Închide meniurile deschise dacă utilizatorul dă click oriunde altundeva în pagină
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item')) {
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});