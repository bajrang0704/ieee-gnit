function toggleEvents() {
    var moreEvents = document.getElementById('moreEvents');
    var btn = document.getElementById('showMoreBtn');
    if (moreEvents.style.display === 'none') {
        moreEvents.style.display = 'flex';
        btn.innerText = 'Show Less';
    } else {
        moreEvents.style.display = 'none';
        btn.innerText = 'Show More';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarCollapse.classList.remove('show'); // Collapse the navbar
        });
    });
});
