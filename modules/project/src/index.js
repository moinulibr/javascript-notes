
import { Button } from './components/Button/Button.js'; // আপেক্ষিক পাথ

const myButton = Button({
    text: "Click Me Now!",
    onClick: () => alert("Button clicked!")
});

document.body.appendChild(myButton);