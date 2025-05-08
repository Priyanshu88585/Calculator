let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("#keyboard > div");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            expression = "";
            inputBox.innerText = "";
        }
        else if (value === "=") {
            try {
                const result = eval(expression);
                inputBox.innerText = result;
                expression = result.toString();
            } catch (error) {
                inputBox.innerText = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            inputBox.innerText = expression;
        }
    });
});
