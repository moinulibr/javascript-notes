export function Button({ text, onClick }) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    return button;
}