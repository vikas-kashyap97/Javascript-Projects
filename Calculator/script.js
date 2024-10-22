let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let inputString = ""; // Variable to hold the current input

buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        let buttonValue = e.target.textContent;

        if (buttonValue === 'C') {
            // Clear the input when 'C' is pressed
            inputString = "";
            input.textContent = inputString;
        } else if (buttonValue === '<') {
            // Remove the last character when '<' is pressed (backspace)
            inputString = inputString.slice(0, -1);
            input.textContent = inputString;
        } else if (buttonValue === '=') {
            // Evaluate the expression when '=' is pressed
            try {
                inputString = eval(inputString); // Using eval to calculate the string
                input.textContent = inputString;
            } catch (error) {
                input.textContent = "Error";
            }
        } else {
            // Append the clicked button's value to the input string
            inputString += buttonValue;
            input.textContent = inputString;
        }

        // Adjust the scroll to the right (so the latest input is always visible)
        input.scrollLeft = input.scrollWidth;
    });
});
