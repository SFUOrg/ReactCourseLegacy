// Кастомная навигация с клавиатуры
(function() {
    'use strict';

    // Состояние навигации
    let currentArea = 'header'; // 'header' или 'main'
    let currentIndex = 0;
    let currentElements = [];

    // Класс для подсветки выбранного элемента
    const SELECTED_CLASS = 'keyboard-selected';

    // Получить все интерактивные элементы в области
    function getInteractiveElements(area) {
        const container = area === 'header' 
            ? document.querySelector('header')
            : document.querySelector('main');
        
        if (!container) return [];

        // Находим все интерактивные элементы: a, button, input, select, textarea
        // Также включаем элементы с tabindex="0" (включая заголовки)
        const elements = Array.from(container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
        ));

        // Фильтруем скрытые элементы
        return elements.filter(el => {
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && 
                   style.visibility !== 'hidden' && 
                   style.opacity !== '0';
        });
    }

    // Обновить текущие элементы и индекс
    function updateCurrentElements() {
        currentElements = getInteractiveElements(currentArea);
        // Ограничиваем индекс в пределах массива
        if (currentIndex >= currentElements.length) {
            currentIndex = Math.max(0, currentElements.length - 1);
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }
    }

    // Убрать подсветку со всех элементов
    function removeHighlight() {
        document.querySelectorAll('.' + SELECTED_CLASS).forEach(el => {
            el.classList.remove(SELECTED_CLASS);
        });
    }

    // Подсветить текущий элемент
    function highlightCurrent() {
        removeHighlight();
        if (currentElements[currentIndex]) {
            const element = currentElements[currentIndex];
            element.classList.add(SELECTED_CLASS);
            
            // Если это textarea или input, сразу устанавливаем фокус для возможности печати
            if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.focus();
            }
            
            // Прокрутить элемент в видимую область
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }
    }

    // Переключиться на другую область
    function switchArea(newArea) {
        removeHighlight();
        currentArea = newArea;
        currentIndex = 0;
        updateCurrentElements();
        highlightCurrent();
    }

    // Переместиться к следующему/предыдущему элементу
    function moveToElement(direction) {
        updateCurrentElements();
        if (currentElements.length === 0) return;

        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % currentElements.length;
        } else if (direction === 'prev') {
            currentIndex = currentIndex === 0 
                ? currentElements.length - 1 
                : currentIndex - 1;
        }

        highlightCurrent();
    }

    // Активировать текущий элемент (имитация клика)
    function activateCurrent() {
        if (currentElements[currentIndex]) {
            const element = currentElements[currentIndex];
            
            // Для ссылок и кнопок
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.click();
            }
            // Для заголовков - прокрутка к элементу и фокус
            else if (element.tagName.match(/^H[1-6]$/)) {
                element.focus();
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            // Для других интерактивных элементов - просто фокус
            else {
                element.focus();
            }
        }
    }

    // Обработчик клавиатуры
    function handleKeyDown(e) {
        // TAB - переключение между header и main
        if (e.key === 'Tab') {
            e.preventDefault();
            
            if (currentArea === 'header') {
                switchArea('main');
            } else {
                switchArea('header');
            }
            return;
        }

        // Стрелки влево/вправо - навигация внутри области
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            
            const direction = e.key === 'ArrowRight' ? 'next' : 'prev';
            moveToElement(direction);
            return;
        }

        // Enter - активация элемента
        if (e.key === 'Enter' && document.querySelector('.' + SELECTED_CLASS)) {
            e.preventDefault();
            activateCurrent();
            return;
        }
    }

    // Сброс состояния при загрузке страницы
    function resetState() {
        removeHighlight();
        currentArea = 'header';
        currentIndex = 0;
        currentElements = [];
        updateCurrentElements();
        highlightCurrent();
    }

    // Инициализация
    function init() {
        // Сбрасываем состояние при каждой загрузке
        resetState();

        // Добавляем обработчик клавиатуры
        document.addEventListener('keydown', handleKeyDown);

        // Убираем подсветку при клике мышью
        document.addEventListener('click', function(e) {
            if (e.detail > 0) { // Реальный клик, не программный
                removeHighlight();
            }
        });

        // Убираем подсветку при фокусе через Tab (стандартная навигация)
        // НО не убираем, если элемент уже выделен нашей навигацией
        document.addEventListener('focusin', function(e) {
            // Если фокус получен стандартным способом (не через нашу навигацию)
            // и элемент не имеет класса keyboard-selected
            if (!e.target.classList.contains(SELECTED_CLASS)) {
                // Убираем подсветку только если это не наш программный фокус
                // Для textarea/input мы устанавливаем фокус программно, но они уже имеют SELECTED_CLASS
                removeHighlight();
            }
        });

        // Обработка возврата на страницу (back/forward navigation)
        window.addEventListener('pageshow', function(e) {
            // Если страница загружена из кэша (back/forward)
            if (e.persisted) {
                resetState();
            }
        });

        // Обработка popstate (навигация назад/вперед)
        window.addEventListener('popstate', function() {
            resetState();
        });
    }

    // Запускаем после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Также сбрасываем при видимости страницы (на случай возврата через другие способы)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Небольшая задержка для корректной работы
            setTimeout(resetState, 100);
        }
    });
})();

