const DOMElements = {
    wrapper: document.querySelector('.wrapper'),
    registerLink: document.querySelector('.register-link'), 
    loginLink: document.querySelector('.login-link')
};

const handleRegisterClick = () => {
    DOMElements.wrapper.classList.add('active');
};

const handleLoginClick = () => {
    DOMElements.wrapper.classList.remove('active');
};

if (DOMElements.registerLink && DOMElements.wrapper) {
    DOMElements.registerLink.addEventListener('click', handleRegisterClick);
}

if (DOMElements.loginLink && DOMElements.wrapper) {
    DOMElements.loginLink.addEventListener('click', handleLoginClick);
}
