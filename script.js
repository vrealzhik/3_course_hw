const radioChoiceElemenet = document.querySelectorAll(
    `input[type=radio][name="diff"]`
);
const startElement = document.getElementById('startBtn');

let selectedDiff = {
    diff: 0,
};

radioChoiceElemenet.forEach((radio) =>
    radio.addEventListener('change', () => {
        selectedDiff.diff = radio.value;
    })
);

startElement.addEventListener('click', () => {
    if (!selectedDiff) {
        alert('Выберите сложность!');
        return;
    }
    console.log(selectedDiff.diff);
    window.location.href = 'second_page.html';
});
