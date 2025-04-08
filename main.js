import PromptSync from "prompt-sync"
const prompt = PromptSync();

let x = Number(prompt("primo addendo: "));
let y = Number(prompt("secondo addendo: "));

let segno = prompt("inserire l'operazione (+ - * /): ");

switch (segno){
    case "+":
        console.log(x+y);
        break;

    case "-":
        console.log(x-y);
        break;

    case "*":
        console.log(x*y);
        break;

    case "/":
        console.log(x/y);
        break;
}