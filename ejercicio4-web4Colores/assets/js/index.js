const blueEle = document.getElementById("blue");
const redEle = document.getElementById("red");
const greenEle = document.getElementById("green");
const yellowEle = document.getElementById("yellow");

function pintar(ele, color) {
  ele.style.backgroundColor = color;
}

blueEle.addEventListener("click", () => pintar(blueEle, "black"));
redEle.addEventListener("click", () => pintar(redEle, "black"));
greenEle.addEventListener("click", () => pintar(greenEle, "black"));
yellowEle.addEventListener("click", () => pintar(yellowEle, "black"));

function changeColor(event) {
  const keyDiv1 = document.getElementById("key1");
  const keyDiv2 = document.getElementById("key2");
  switch (event.key.toLowerCase()) {
    case "a":
      keyDiv1.style.backgroundColor = "pink";
      break;
    case "s":
      keyDiv1.style.backgroundColor = "orange";
      break;
    case "d":
      keyDiv1.style.backgroundColor = "cyan";
      break;
    case "q":
      keyDiv2.style.backgroundColor = "purple";
      break;
    case "w":
      keyDiv2.style.backgroundColor = "gray";
      break;
    case "e":
      keyDiv2.style.backgroundColor = "brown";
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", (e) => changeColor(e));
