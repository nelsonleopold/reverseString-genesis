// Step One, get the information (controller, accept requests)
// todo
// validate if the msg not equal to empty string
// display in lowercase

function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    // validate that msg is not empty string
    if (msg !== '') {
        // convert to lowercase
        msg = msg.toLowerCase();

        let message = reverseMessageB(msg);
        displayMessage(message);
        clrInputBox();
    } else {
        alert("Please enter some text, and I'll reverse it for you.");
        clrInputBox();
    }
}

function reverseMessageA(msg) {
    let revMessage = "";

    // decrementing for loop
    // starts at end (array.length-1) of string/array and works to start (0)
    for (let i = msg.length - 1; i >= 0; i--) {
        let currentChar = msg[i];
        revMessage += currentChar;
    }

    return revMessage;
}

function reverseMessageB (msg) {
    let revMessage = "";
    revMessage = msg.split("").reverse().join("");

    return revMessage;
}


// Final Step, display the information (view, displays stuff on screen)
function displayMessage(message) {

    // first get the element from the page
    element = document.getElementById("results");

    // print results to screen
    element.innerHTML = message;
}

function clrInputBox() {
    // this clears the input field after it's displayed
    document.getElementById("txtMessage").value = '';
}