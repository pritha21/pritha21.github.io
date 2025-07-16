document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const workExperienceHeader = Array.from(accordionHeaders).find(header => header.textContent.includes('WORK EXPERIENCE'));
    const projectHistoryHeader = Array.from(accordionHeaders).find(header => header.textContent.includes('PROJECT HISTORY'));
    const projectHighlightLinks = document.querySelectorAll('.projects h3 a');

    accordionHeaders.forEach(header => {
        const accordionItem = header.parentNode;
        const accordionBody = header.nextElementSibling;
        const accordionIcon = header.querySelector('.accordion-icon');

        header.addEventListener('click', function() {
            // Close other open items
            document.querySelectorAll('.accordion-item.open').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('open');
                    item.querySelector('.accordion-body').style.display = 'none';
                    item.querySelector('.accordion-icon').textContent = '▼';
                }
            });

            // Toggle the current item
            accordionItem.classList.toggle('open');
            if (accordionBody.style.display === 'block') {
                accordionBody.style.display = 'none';
                accordionIcon.textContent = '▼';
            } else {
                accordionBody.style.display = 'block';
                accordionIcon.textContent = '▲';
            }
        });
    });

    // Open the Work Experience accordion by default
    if (workExperienceHeader) {
        const workExperienceItem = workExperienceHeader.parentNode;
        const workExperienceBody = workExperienceHeader.nextElementSibling;
        const workExperienceIcon = workExperienceHeader.querySelector('.accordion-icon');

        workExperienceItem.classList.add('open');
        workExperienceBody.style.display = 'block';
        workExperienceIcon.textContent = '▲';
    }

    // Functionality to open Project History on clicking highlight
    projectHighlightLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default jump to the anchor

            if (projectHistoryHeader) {
                const projectHistoryItem = projectHistoryHeader.parentNode;
                const projectHistoryBody = projectHistoryHeader.nextElementSibling;
                const projectHistoryIcon = projectHistoryHeader.querySelector('.accordion-icon');

                // Close any open accordions
                document.querySelectorAll('.accordion-item.open').forEach(item => {
                    item.classList.remove('open');
                    item.querySelector('.accordion-body').style.display = 'none';
                    item.querySelector('.accordion-icon').textContent = '▼';
                });

                // Open the Project History accordion
                projectHistoryItem.classList.add('open');
                projectHistoryBody.style.display = 'block';
                projectHistoryIcon.textContent = '▲';

                // Scroll to the Project History section
                projectHistoryBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});