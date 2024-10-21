document.addEventListener('click', function(event) {
    const clickedImage = event.target.closest('.clickable');

    if (clickedImage) {
        document.querySelectorAll('.clickable').forEach(img => {
            img.classList.remove('enlarged');
        });

        clickedImage.classList.add('enlarged');
    } else {
        document.querySelectorAll('.clickable').forEach(img => {
            img.classList.remove('enlarged');
        });
    }
});

window.addEventListener('scroll', function() {
    const fadeSections = document.querySelectorAll('.fade-section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    fadeSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const maxOpacityScroll = 200; /
        const opacity = Math.min(1, (scrollPosition + window.innerHeight - sectionPosition) / maxOpacityScroll);

        if (opacity > 0) {
            section.style.opacity = opacity;
            section.style.transform = `scale(${0.8 + opacity * 0.2})`; 
        }
    });
});
