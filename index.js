// Landing section animation
const tl = gsap.timeline({ 
    defaults: { ease: "power1.out" } 
});

tl.fromTo(".headline-text", { opacity: 0 }, { opacity: 1, duration: 2.9 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 });
gsap.fromTo(".logo", { opacity: 0 }, { y: "0%", opacity: 1, duration: 1, delay: 4.25 });
gsap.fromTo(".buttonHeader", { opacity: 0 }, { y: "0%", opacity: 1, duration: 1, delay: 4.25 });
gsap.fromTo(".down-arrow", { opacity: 0 }, { opacity: 1, duration: 1, delay: 5 });
tl.fromTo(".bio", { opacity: 0 }, { opacity: 1, duration: 1 });

// ScrollTrigger animation for projects
gsap.utils.toArray(".project").forEach(project => {
    let title = project.querySelector(".projectTitle");
    let tlp = new TimelineMax({
        scrollTrigger: {
            markers: false, // change to 'true' to turn markers on during development
            trigger: project,
            start: "top center",
            end: "bottom bottom",
            scrub: 1
        }
    });

    tlp.fromTo(title, { y: 50, opacity: 0}, { y: 0, opacity: 1, duration: 1});
});

// Scroll to projects section on click.
function clickToProjects() {
    $('nav').on('click', '.buttonProjects', function (event) {
        window.location.href='#projects';
    });

    $('.down-arrow').on('click', '.fa-chevron-circle-down', function (event) {
        window.location.href='#projects';
    });
}

// Scroll to contact section on click.
function clickToContact() {
    $('nav').on('click', '.buttonContact', function (event) {
        window.location.href='#contact';
    });
}

// Scroll to top of page on click.
function clickToTop() {
    $('footer').on('click', '.toTop', function (event) {
        window.scrollTo(0, 0);
    });
    $('header').on('click', '.logo', function (event) {
        window.scrollTo(0, 0);
    });
}

// Typewriter effect at headline
document.addEventListener('DOMContentLoaded',function(event){
    // An array with copy to type in typewriter
    const dataText = [ 
        "design useful things.", 
        "solve problems.", 
        "continually learn.", 
        "make cool apps.", 
        "do meaningful work."
    ];
    
    // Types one piece of copy in the typewriter and keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if the copy isn't finished yet
        if (i < (text.length)) {
            // If so, add the next character to span
            document.querySelector(".typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
            // Wait and call this function again for the next character
            setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // When the copy is finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // Call callback after timeout
            setTimeout(fnCallback, 2000);
        }
    }
    // Start a typewriter animation for copy in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 4000);
        // Check if dataText[i] exists
        } else if (i < dataText[i].length) {
            // If text exists, start the typewriter animation
            typeWriter(dataText[i], 0, function(){
            // After callback (and the entire copy has been animated), start next copy
            StartTextAnimation(i + 1);
            });
        }
    }
    // Start the animation
    StartTextAnimation(0);
  });

clickToProjects();
clickToContact();
clickToTop();