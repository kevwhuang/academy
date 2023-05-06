export function closeModal() {
    document.startViewTransition(() => {
        document.querySelector('nav').style.opacity = 1;
        document.querySelector('header').style.opacity = 1;
        document.querySelector('main').style.opacity = 1;
        document.querySelector('footer').style.opacity = 1;
        document.querySelector('.modal').style.display = 'none';
    });
}

export function openModal(e) {
    document.startViewTransition(() => {
        document.querySelector('nav').style.opacity = .05;
        document.querySelector('header').style.opacity = .05;
        document.querySelector('main').style.opacity = .05;
        document.querySelector('footer').style.opacity = .05;
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal-image').src = e.target.src;
    });
}
