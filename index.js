document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.navigation');
    const mobileButton =  document.querySelector('.menu');

    mobileButton.addEventListener ('click', function(){
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }
    })
})