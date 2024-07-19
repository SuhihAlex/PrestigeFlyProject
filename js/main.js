document.getElementById('chatHeader').addEventListener('click', function() {
    const chatContent = document.getElementById('chatContent');
    const messages = document.getElementById('messages');
    if (chatContent.style.display === 'none' || chatContent.style.display === '') {
        chatContent.style.display = 'block';
        if (messages.children.length === 0) {
            let welcomeMessage = document.createElement('div');
            welcomeMessage.textContent = 'how can I help you?';
            messages.appendChild(welcomeMessage);
        }
    } else {
        chatContent.style.display = 'none';
    }
});

document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('chatInput');
    let message = input.value.trim();
    if (message !== '') {
        let messages = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});




// Слайдер для блога
const blogSliderWrapper = document.querySelector('.slider__wrapper');
const blogSlides = document.querySelectorAll('.slider__item');
const blogSlideCount = blogSlides.length;
const blogSlideWidth = 630 + 40; 
let blogCurrentIndex = 0;

const blogPrevButton = document.querySelector('.slider__control.prev.slider__control-prev');
const blogNextButton = document.querySelector('.slider__control.next.active');
const blogPaginationContainer = document.querySelector('.slider__pagination');

blogSlides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider__pagination-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => blogGoToSlide(index));
    blogPaginationContainer.appendChild(dot);
});

const blogPaginationDots = document.querySelectorAll('.slider__pagination-dot');

function updateBlogPagination() {
    blogPaginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === blogCurrentIndex);
    });
}

blogPrevButton.addEventListener('click', blogPrevSlide);
blogNextButton.addEventListener('click', blogNextSlide);

function blogMoveSlider(index) {
    blogSliderWrapper.style.transition = 'transform 0.3s ease';
    blogSliderWrapper.style.transform = `translateX(${-index * blogSlideWidth}px)`;
}

function blogNextSlide() {
    blogCurrentIndex = (blogCurrentIndex + 1) % blogSlideCount;
    blogMoveSlider(blogCurrentIndex);
    updateBlogPagination();
}

function blogPrevSlide() {
    blogCurrentIndex = (blogCurrentIndex - 1 + blogSlideCount) % blogSlideCount;
    blogMoveSlider(blogCurrentIndex);
    updateBlogPagination();
}

function blogGoToSlide(index) {
    blogCurrentIndex = index;
    blogMoveSlider(blogCurrentIndex);
    updateBlogPagination();
}

const testiSliderWrapper = document.querySelector('.slider__wrapper-testi');
const testiSlides = Array.from(document.querySelectorAll('.slider__item-testi'));
const testiSlideWidth = testiSlides[0].offsetWidth + 20;
let testiCurrentIndex = 0;

const testiPrevButton = document.querySelector('.slider__control.prev.slider__control-testi');
const testiNextButton = document.querySelector('.slider__control.next.slider__control-testi');

function testiMoveSlider(index) {
    testiSliderWrapper.style.transition = 'transform 0.3s ease';
    testiSliderWrapper.style.transform = `translateX(${-index * testiSlideWidth}px)`;
}

function testiNextSlide() {
    testiCurrentIndex = (testiCurrentIndex + 1) % testiSlides.length;
    testiMoveSlider(testiCurrentIndex);
}

function testiPrevSlide() {
    testiCurrentIndex = (testiCurrentIndex - 1 + testiSlides.length) % testiSlides.length;
    testiMoveSlider(testiCurrentIndex);
}

testiPrevButton.addEventListener('click', testiPrevSlide);
testiNextButton.addEventListener('click', testiNextSlide);

testiMoveSlider(testiCurrentIndex);


 document.addEventListener('DOMContentLoaded', function () {
            const openModalBtn = document.querySelector('.contact__info-btn');
            const closeModalBtn = document.querySelector('.modal__close');
            const modal = document.querySelector('.modal');
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            document.body.appendChild(overlay);

            // Функция для открытия модального окна
            function openModal() {
                modal.classList.add('show');
                overlay.classList.add('show');
            }

            // Функция для закрытия модального окна
            function closeModal() {
                modal.classList.remove('show');
                overlay.classList.remove('show');
            }

            // Открытие модального окна при нажатии на кнопку
            openModalBtn.addEventListener('click', openModal);

            // Закрытие модального окна при нажатии на крестик
            closeModalBtn.addEventListener('click', closeModal);

            // Закрытие модального окна при нажатии на затемнение
            overlay.addEventListener('click', closeModal);
        });

        


const slides = document.querySelector('.dropdown__slides');
const slide = document.querySelectorAll('.dropdown__slide');
const prevButton = document.querySelector('.dropdown__nav-btn.prev');
const nextButton = document.querySelector('.dropdown__nav-btn.next');
const pagination = document.querySelector('.dropdown__pagination');
let currentIndex = 0;

// Create pagination buttons
slide.forEach((_, index) => {
const button = document.createElement('button');
button.addEventListener('click', () => goToSlide(index));
pagination.appendChild(button);
});

const paginationButtons = pagination.querySelectorAll('button');
updatePagination();

function goToSlide(index) {
slides.style.transform = `translateX(-${index * 100}%)`;
currentIndex = index;
updatePagination();
}

function updatePagination() {
paginationButtons.forEach((button, index) => {
button.classList.toggle('active', index === currentIndex);
});
}

function showNextSlide() {
currentIndex = (currentIndex + 1) % slide.length;
goToSlide(currentIndex);
}

function showPrevSlide() {
currentIndex = (currentIndex - 1 + slide.length) % slide.length;
goToSlide(currentIndex);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// // Auto-play functionality (optional)
// // setInterval(showNextSlide, 5000);