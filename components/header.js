function renderHeader() {
    return `
    <header class="bg-[var(--background-light)] border-b border-[var(--border-light)] dark:border-[var(--border-dark)] sticky top-0 z-50 dark:bg-[var(--background-dark)]">
        <div class="px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
            <div class="flex items-center gap-2 md:gap-3">
                <img src="assets/logo.svg"
                     class="w-[var(--logo-size)] h-[var(--logo-size)] dark:invert"
                     alt="React Learning logo">
                <a href="#" class="text-lg md:text-2xl font-bold hover:text-[var(--accent)] transition cursor-pointer" aria-label="React Learning homepage">React Learning</a>
            </div>
            
            <nav class="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Main navigation">
                <a href="#" class="hover:text-[var(--accent)] transition">Tutorials</a>
                <a href="#" class="hover:text-[var(--accent)] transition">Community</a>
                <a href="#" class="hover:text-[var(--accent)] transition">Exercises</a>
                <a href="#" class="hover:text-[var(--accent)] transition">Resources</a>
                <a href="#" class="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] px-5 md:px-7 h-[var(--nav-height)] rounded-md hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition flex items-center" aria-label="New content">New</a>
                <a href="#" aria-label="User profile">
                    <img src="assets/avatar.png" alt="Profile" class="w-[var(--nav-height)] h-[var(--nav-height)] rounded-full cursor-pointer">
                </a>
            </nav>
            
            <button id="mobile-menu-btn" class="md:hidden text-[var(--text-light)] dark:text-[var(--text-dark)] cursor-pointer" 
                    aria-label="Toggle navigation menu" 
                    aria-expanded="false">
                <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>

                <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <div id="menu-backdrop" class="hidden fixed inset-0 bg-black/50 z-40 md:hidden"></div>

            <nav id="mobile-menu" class="hidden fixed top-[calc(var(--nav-height)+1.5rem)] left-0 right-0 md:hidden flex flex-col items-stretch gap-2 px-4 py-4 bg-[var(--background-light)] dark:bg-[var(--background-dark-secondary)] z-50 shadow-lg mx-2 rounded-lg">
                <a href="#" class="w-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition py-3 px-4 rounded-md text-[var(--text-light)] dark:text-[var(--text-dark)] text-center">Tutorials</a>
                <a href="#" class="w-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition py-3 px-4 rounded-md text-[var(--text-light)] dark:text-[var(--text-dark)] text-center">Community</a>
                <a href="#" class="w-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition py-3 px-4 rounded-md text-[var(--text-light)] dark:text-[var(--text-dark)] text-center">Exercises</a>
                <a href="#" class="w-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition py-3 px-4 rounded-md text-[var(--text-light)] dark:text-[var(--text-dark)] text-center">Resources</a>
                <a href="#" class="w-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] px-4 rounded-md hover:bg-[var(--surface-light-hover)] dark:hover:bg-[var(--surface-dark-hover)] transition py-3 text-[var(--text-light)] dark:text-[var(--text-dark)] text-center">New</a>
                <a href="#" class="w-full py-2 flex justify-center">
                    <img src="assets/avatar.png" alt="Profile" class="w-[var(--nav-height)] h-[var(--nav-height)] rounded-full cursor-pointer">
                </a>
            </nav>
        </div>
    </header>
    `;
}
