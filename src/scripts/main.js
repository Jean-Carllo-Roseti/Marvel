document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementos();
        } else {
            exibirElementos();
        }
    })

    function ocultarElementos () {
        const header = document.querySelector('header');
        header.classList.add('header--is--hidden');
    }

    function exibirElementos () {
        const header = document.querySelector('header');
        header.classList.remove('header--is--hidden');
    }

//section titulos, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const tabId = event.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabId}]`);
            escondeAbas();
            tab.classList.add('titulos__opcoes__link--is--active');
            removeAtivo();
            event.target.classList.add('temas__link__buttons--is--active');
        });
    }
    

    //section FAQ.
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFecha);
    }
});


function abreOuFecha (elemento) {   
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('temas__link__buttons--is--active');
    }
}

function escondeAbas() {
    const tabContainers = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContainers.length; i++) {
        tabContainers[i].classList.remove('titulos__opcoes__link--is--active');
    }
}
