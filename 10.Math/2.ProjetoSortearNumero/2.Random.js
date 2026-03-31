function generateNumber() {
    const numberMin = Math.ceil(document.querySelector('#Number-min').value);
    const numberMax = Math.floor(document.querySelector('#Number-max').value);

    const result = Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;

    alert(result);
}
