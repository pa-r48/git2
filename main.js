import PromptSync from "prompt-sync"
const prompt = PromptSync();

let x = prompt("numero: ");
console.log(parseInt(x) + parseInt(x));