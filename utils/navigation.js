'use client';

/**
 * Smooth scroll to a section on the page
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Navigate to homepage and scroll to section
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {object} router - Next.js router instance
 */
export const navigateToSection = (sectionId, router) => {
  // If we're already on the homepage, just scroll
  if (router.pathname === '/') {
    scrollToSection(sectionId);
  } else {
    // Navigate to homepage first, then scroll after navigation
    router.push('/').then(() => {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    });
  }
};

/**
 * Handle navigation link clicks
 * @param {Event} event - Click event
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {object} router - Next.js router instance
 */
export const handleNavClick = (event, sectionId, router) => {
  event.preventDefault();
  navigateToSection(sectionId, router);
};
