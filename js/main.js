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



