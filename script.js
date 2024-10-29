const images = document.querySelectorAll('.clickable'); 
    let currentlyEnlarged = null; 

    images.forEach(image => {
        image.addEventListener('click', function(event) {
            if (currentlyEnlarged && currentlyEnlarged !== this) {
                currentlyEnlarged.classList.remove('enlarged');
            }
            
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
                currentlyEnlarged = null; 
            } else {
                this.classList.add('enlarged');
                currentlyEnlarged = this; 
            }
            
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        if (currentlyEnlarged) {
            currentlyEnlarged.classList.remove('enlarged');
            currentlyEnlarged = null; 
        }
    });

    