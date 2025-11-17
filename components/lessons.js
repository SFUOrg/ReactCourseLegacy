function renderLessons() {
    return `
    <main id="main-content" class="container px-4 mx-auto my-10">
        <h1 class="text-4xl font-bold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">Welcome back, Sarah!</h1>
        <p class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] mb-8">Continue your learning journey with React.</p>
        
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5" aria-label="Learning modules">
            <article aria-labelledby="title-components-jsx" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/components-and-jsx.html" aria-describedby="desc-components-jsx">
                    <img src="assets/introduction-to-react.jpg" alt="Components and JSX" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-components-jsx" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Components and JSX</h3>
                        <p id="desc-components-jsx" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Learn how to create and structure React components using JSX syntax</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-props-state" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/props-and-state.html" aria-describedby="desc-props-state">
                    <img src="assets/components-and-jsx.jpg" alt="Props and State" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-props-state" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Props and State</h3>
                        <p id="desc-props-state" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Understand how to pass data using props and manage component state</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-event-handling" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/event-handling.html" aria-describedby="desc-event-handling">
                    <img src="assets/state-management.jpg" alt="Event Handling" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-event-handling" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Event Handling</h3>
                        <p id="desc-event-handling" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Handle user interactions and events in React components</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-conditional-rendering" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/conditional-rendering.html" aria-describedby="desc-conditional-rendering">
                    <img src="assets/event-handling.jpg" alt="Conditional Rendering" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-conditional-rendering" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Conditional Rendering</h3>
                        <p id="desc-conditional-rendering" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Render different elements based on conditions in React</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-lists-keys" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/lists-and-keys.html" aria-describedby="desc-lists-keys">
                    <img src="assets/conditional-rendering.jpg" alt="Lists and Keys" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-lists-keys" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Lists and Keys</h3>
                        <p id="desc-lists-keys" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Create dynamic lists and properly use keys in React</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-forms-controlled" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/forms-and-controlled.html" aria-describedby="desc-forms-controlled">
                    <img src="assets/lists-and-keys.jpg" alt="Forms and Controlled Components" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-forms-controlled" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Forms and Controlled Components</h3>
                        <p id="desc-forms-controlled" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Handle form inputs and create controlled components</p>
                    </div>
                </a>
            </article>
            
            <article aria-labelledby="title-lifecycle-hooks" class="nav-card group bg-[var(--background-light)] dark:bg-[var(--background-dark)] hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] overflow-hidden pointer flex flex-col transition hover:scale-105 hover:shadow-lg rounded-lg">
                <a href="pages/lifecycle-hooks.html" aria-describedby="desc-lifecycle-hooks">
                    <img src="assets/forms-in-react.jpg" alt="Lifecycle Methods and Hooks" class="rounded-md w-full h-40 sm:h-50 xl:h-60 object-cover dark:invert">
                    <div class="py-4 px-2 flex flex-col flex-grow">
                        <h3 id="title-lifecycle-hooks" class="font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] group-hover:text-[var(--accent)] transition mb-2">Lifecycle Methods and Hooks</h3>
                        <p id="desc-lifecycle-hooks" class="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] text-sm">Manage component lifecycle and use React Hooks</p>
                    </div>
                </a>
            </article>
        </section>
    </main>
    `;
}