// Scroll to projects section on click.
function clickToProjects() {
    $('nav').on('click', '.buttonProjects', function (event) {
        window.location.href='index.html#projects';
    });
}

// Scroll to contact section on click.
function clickToContact() {
    $('nav').on('click', '.buttonContact', function (event) {
        window.location.href='index.html#contact';
    });
}

// Scroll to top of page on click.
function clickToTop() {
    $('footer').on('click', '.toTop', function (event) {
        window.scrollTo(0, 0);
    });
}

clickToProjects();
clickToContact();
clickToTop();