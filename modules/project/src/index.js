
import { Button } from './components/Button/Button.js';
import { userManager } from './services/userStore.js'

const myButton = Button({
    text: "Click Me Now!",
    onClick: () => {
        console.log("Button clicked!")
        userManager();
        testFun();
    }

});

document.body.appendChild(myButton);


export const testFun = () => {
    console.log('test func');
}