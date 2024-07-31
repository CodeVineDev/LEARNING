document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const activeHeader = document.querySelector('.accordion-header.active');
        if (activeHeader && activeHeader !== header) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.maxHeight = '0px';
        }

        header.classList.toggle('active');
        const accordionContent = header.nextElementSibling;
        if (header.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0px';
        }
    });
});