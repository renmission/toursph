export const hideALert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
}

// type is 'success' or 'error'
export const showAlert = (type, msg) => {
    hideALert();

    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    window.setTimeout(hideALert, 5000);
}