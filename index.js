let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".buttons").length;
let clearBtn = document.getElementById("Cbtn");
let evalBtn = document.getElementById("eqlBtn");
let screenDisplay = "";

for (let i = 0; i < buttons; i++) {
  document
    .querySelectorAll(".buttons")
    [i].addEventListener("click", function () {
      let buttonText = this.innerText;
      screen.value += buttonText;
      calculate(buttonText);
      makeSound(buttonText);

      function makeSound() {
        let clickSound = new Audio("Sounds/click.wav");
        clickSound.play();

        if (buttonText == "DEL") {
          let clickSound = new Audio("Sounds/error.wav");
          clickSound.play();
        }
      }

      function calculate() {
        if (buttonText == "DEL") {
          screenDisplay = "";
          screen.value = screenDisplay;
        } else if (buttonText == "=") {
          screen.value = eval(screenDisplay);
        } else {
          screenDisplay += buttonText;
          screen.value = screenDisplay;
        }
      }
    });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    screen.value = eval(screenDisplay);
  }
  if (event.key === "Backspace") {
    screen.value = "";
  }
});
