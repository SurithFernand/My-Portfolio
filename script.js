document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Hamburger Menu Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-item');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            sidebar.classList.toggle('open');
        });

        // Close the mobile menu automatically after a link is clicked
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburgerBtn.classList.remove('active');
                    sidebar.classList.remove('open');
                }
            });
        });
    }

    // --- 2. Typing Effect Logic ---
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: [
                'Computer Science Undergraduate',
                'Tech Enthusiast',
                'Lifelong Learner'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // --- 3. Scroll Active Link Highlight Logic ---
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            // Offset logic for mobile header heights
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute('id');
            }
        });

        // Add 'active' class to matching link in the sidebar, remove from others
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});

/**
 * Swaps project thumbnail with the video element and plays it
 * @param {HTMLElement} btn - The clicked Live Demo button
 */
function playProjectVideo(btn) {
    // Locate the parent project card and its media container
    const card = btn.closest('.details-container');
    const mediaContainer = card.querySelector('.project-media-container');
    const video = mediaContainer.querySelector('.project-video');

    // Switch visible media to video
    mediaContainer.classList.add('video-active');

    // Play video
    video.play();
}
