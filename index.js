function renderApp() {
    return renderHeader() + renderLessons() + renderFooter();
}

document.body.innerHTML = renderApp();
