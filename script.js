
const projecs = document.querySelectorAll('.project');

projecs.forEach(project => {
    project.addEventListener('click', () => {
        link = project.querySelector('.project-desc-title').getAttribute('href');
        window.open(link, '_blank');
    });
});