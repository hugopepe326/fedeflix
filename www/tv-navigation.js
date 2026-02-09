// Script para manejar el foco con el control remoto (D-Pad)
document.addEventListener('keydown', function(e) {
    const focusableElements = 'a, button, input, [tabindex="0"]';
    const elements = Array.from(document.querySelectorAll(focusableElements));
    let index = elements.indexOf(document.activeElement);

    switch(e.key) {
        case 'ArrowDown':
            index = (index + 1) % elements.length;
            elements[index].focus();
            break;
        case 'ArrowUp':
            index = (index - 1 + elements.length) % elements.length;
            elements[index].focus();
            break;
        case 'Enter':
            if (document.activeElement) document.activeElement.click();
            break;
    }
});

// Estilo visual para saber qué estamos seleccionando
const style = document.createElement('style');
style.innerHTML = `
    :focus {
        outline: 5px solid #ff0000 !important;
        outline-offset: 4px;
        transform: scale(1.05);
        transition: transform 0.2s;
        z-index: 9999;
    }
`;
document.head.appendChild(style);
