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

        


document.addEventListener('DOMContentLoaded', () => {
    const bestDealsLink = document.getElementById('bestDealsLink');
    const dropdownContainer = document.getElementById('dropdownContainer');
    const bestDealsArrow = document.getElementById('bestDealsArrow');
    const dropdownLinks = document.querySelectorAll('.dropdown__link');
    const sliders = document.querySelectorAll('.dropdown__slider');
    const slideContainers = {
        'Business': document.getElementById('businessSlider'),
        'First Class': document.getElementById('firstClassSlider'),
        'Premium': document.getElementById('premiumSlider')
        // Добавьте сюда другие слайдеры, если они есть
    };

    // Функция для показа соответствующего слайдера
    function showSlider(slider) {
        sliders.forEach(s => s.classList.remove('active'));
        slider.classList.add('active');
    }

    function updateActiveLink(activeLink) {
    // Найти активный элемент и удалить у него класс
    const currentActiveItem = document.querySelector('.dropdown__item-active');
    if (currentActiveItem) {
        currentActiveItem.classList.remove('dropdown__item-active');
        
        // Удалить класс активной стрелки у текущего активного элемента
        const currentArrow = currentActiveItem.querySelector('.dropdown__link-arrow');
        if (currentArrow) {
            currentArrow.classList.remove('active');
        }
    }

    // Найти активный элемент и добавить класс
    const newActiveItem = activeLink.closest('.dropdown__item');
    newActiveItem.classList.add('dropdown__item-active');
    
    // Добавить класс активной стрелке
    const arrow = newActiveItem.querySelector('.dropdown__link-arrow');
    if (arrow) {
        arrow.classList.add('active');
    }
}

// Пример использования функции при клике на элемент
document.querySelectorAll('.dropdown__link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращение перехода по ссылке
        updateActiveLink(link);
    });
});

// Инициализация: сделаем Business активным по умолчанию
const defaultActiveLink = document.querySelector('#businessMenu .dropdown__link');
if (defaultActiveLink) {
    updateActiveLink(defaultActiveLink);
}


    // Toggle dropdown menu
    bestDealsArrow.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContainer.classList.toggle('open');
        bestDealsArrow.classList.toggle('rotate');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdownContainer.contains(event.target) && !bestDealsLink.contains(event.target)) {
            dropdownContainer.classList.remove('open');
            bestDealsArrow.classList.remove('rotate');
        }
    });

    // Event listeners for dropdown links
    dropdownLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateActiveLink(link);

            const linkText = link.textContent.trim();
            if (slideContainers[linkText]) {
                showSlider(slideContainers[linkText]);
            }
        });
    });

    // Инициализация слайдера для каждого блока слайдов
    function initSlider(slider) {
        const slides = slider.querySelector('.dropdown__slides');
        const slide = slider.querySelectorAll('.dropdown__slide');
        const prevButton = slider.querySelector('.dropdown__nav-btn.prev');
        const nextButton = slider.querySelector('.dropdown__nav-btn.next');
        const pagination = slider.querySelector('.dropdown__pagination');
        let currentIndex = 0;

        // Создание кнопок пагинации
        slide.forEach((_, index) => {
            const button = document.createElement('button');
            button.addEventListener('click', () => goToSlide(index));
            pagination.appendChild(button);
        });

        const paginationButtons = pagination.querySelectorAll('button');
        updatePagination(paginationButtons, currentIndex);

        function goToSlide(index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            updatePagination(paginationButtons, currentIndex);
        }

        function updatePagination(buttons, currentIndex) {
            buttons.forEach((button, index) => {
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
    }

    // Инициализация всех слайдеров
    sliders.forEach(initSlider);

    // Показать начальный слайдер (Business)
    showSlider(slideContainers['Business']);
});




// // Auto-play functionality (optional)
// // setInterval(showNextSlide, 5000);