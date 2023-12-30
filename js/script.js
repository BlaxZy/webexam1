const htmlCheckbox = document.getElementById('htmlCheckbox');
const cssCheckbox = document.getElementById('cssCheckbox');
const jsCheckbox = document.getElementById('jsCheckbox');
const phpCheckbox = document.getElementById('phpCheckbox');
const textElement = document.getElementById('text');

htmlCheckbox.addEventListener('change', updateText);
cssCheckbox.addEventListener('change', updateText);
jsCheckbox.addEventListener('change', updateText);
phpCheckbox.addEventListener('change', updateText);

function updateText() {
    const selectedLanguages = [];

    if (htmlCheckbox.checked) {
        selectedLanguages.push(htmlCheckbox.value);
    }
    if (cssCheckbox.checked) {
        selectedLanguages.push(cssCheckbox.value);
    }
    if (jsCheckbox.checked) {
        selectedLanguages.push(jsCheckbox.value);
    }
    if (phpCheckbox.checked) {
        selectedLanguages.push(phpCheckbox.value);
    }

    textElement.textContent = selectedLanguages.join(', ');
}