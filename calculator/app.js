// calculator
let string = "";
let btn = document.querySelectorAll(".btn"); // select all your calculator buttons
let display = document.querySelector("#display"); // your input/display field

Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerHTML;
        
        if (val === "=") {   
            string = eval(string); // Not safe for real apps, but fine for basic calculator
            display.value = string; 
        } else if (val.toLowerCase() === "c") {
            string = "";
            display.value = string; 
        } else {
            string += val;
            display.value = string;
        }
    });
});


