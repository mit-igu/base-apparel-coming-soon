const input = document.querySelector('input');

input.onkeyup = () => {
    const invalidText = document.getElementsByClassName('invalid');
    if (!input.checkValidity()) {
        for (i = 0; i < invalidText.length; i++) {
            invalidText[i].style.display = 'block';
            console.log(invalidText[i])
        }
    } else {
        for (i = 0; i < invalidText.length; i++) {
            invalidText[i].style.display = 'none';
        }
    }
}