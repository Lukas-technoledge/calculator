let display = document.getElementById("display");
// let keys = Array.from(document.getElementsByClassName('button'));
document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (e.target.id == "backspace") {
            display.innerText = display.innerText.substring(
                0,
                display.innerText.length - 1
            );
            return
      }
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  })
);
// keys.maps(button => {
// button.addEventListener('click', (e) => {
//     switch (e.target.innerText) {
//         default:
//             display.innerText += e.target.innerText;
//     }
// });
// });
