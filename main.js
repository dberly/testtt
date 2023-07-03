let sc = document.getElementById("button")
window.onscroll = function () {
    if (this.scrollY >= 500) {
        sc.classList.add("show")
    }
    else {
        sc.classList.remove("show")
    }
}
sc.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.navbar-toggle');
    var menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
