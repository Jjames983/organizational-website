// Get the menu button
const menuButton = document.querySelector('.menu-btn');

// Get the navigation menu
const navigation = document.querySelector('.nav');


// Mobile Navigation
if (menuButton && navigation) {

    menuButton.addEventListener('click', () => {

        navigation.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            navigation.classList.contains('open')
        );

    });

}


// Contact Form
document.querySelectorAll('.form').forEach(form => {

    form.addEventListener('submit', event => {

        event.preventDefault();

        alert(
            'Thank you. This demonstration form is ready to be connected to an email service or database.'
        );

        form.reset();

    });

});