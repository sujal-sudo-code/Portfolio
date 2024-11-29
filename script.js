document.addEventListener('click', function (event) {
    const clickedImage = event.target.closest('.clickable');

    if (clickedImage) {
        if (clickedImage.classList.contains('enlarged')) {
            clickedImage.classList.remove('enlarged');
        } else {
            document.querySelectorAll('.clickable').forEach(img => {
                img.classList.remove('enlarged');
            });
            clickedImage.classList.add('enlarged');
        }
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
