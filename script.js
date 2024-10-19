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
