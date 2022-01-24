export function requestError() {
    const modalError = document.querySelector('#modalError');

    if(modalError) {
        modalError.classList.add('is-open');
    }
}