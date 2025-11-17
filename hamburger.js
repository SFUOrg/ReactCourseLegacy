// hamburger.js

// Ждем, пока DOM будет полностью загружен
document.addEventListener('DOMContentLoaded', function() {

    // Находим элементы
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');

    // Проверяем, существуют ли элементы, прежде чем добавлять обработчики
    if (!mobileMenuBtn || !hamburgerIcon || !closeIcon || !mobileMenu || !menuBackdrop) {
        console.warn('Элементы мобильного меню не найдены в DOM. Проверьте HTML.');
        return; // Выходим из функции, если элементы не найдены
    }

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        // Переключаем класс hidden у меню
        mobileMenu.classList.toggle('hidden');
        // Переключаем класс hidden у фона
        menuBackdrop.classList.toggle('hidden');
        // Переключаем видимость иконки гамбургера
        hamburgerIcon.classList.toggle('hidden');
        // Переключаем видимость иконки крестика
        closeIcon.classList.toggle('hidden');

        // Обновляем атрибут aria-expanded для доступности
        const isExpanded = !mobileMenu.classList.contains('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    };

    // Обработчик клика по кнопке меню
    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Обработчик клика по фону (затемнению) - закрывает меню
    menuBackdrop.addEventListener('click', toggleMenu);

    // Обработчик клика по ссылкам внутри мобильного меню - закрывает меню
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Закрываем меню, убираем классы
            mobileMenu.classList.add('hidden');
            menuBackdrop.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            // Обновляем aria-expanded
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

});