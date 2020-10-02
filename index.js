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
            document.querySelector("span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
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
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 4000);
        }
        // Check if dataText[i] exists
        if (i < dataText[i].length) {
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