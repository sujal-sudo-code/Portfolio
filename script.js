document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;
    const links = document.querySelectorAll(".nav-list li a");
    links.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});
