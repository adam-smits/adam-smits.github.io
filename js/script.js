
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('#menuToggle input');
    menuToggle.addEventListener('change', function () {
        var menu = document.querySelector('#menu');
        if (this.checked) {
            menu.style.transform = 'translateX(0%)';
        } else {
            menu.style.transform = 'translateX(-100%)';
        }
    });
});
