// 2:29
const inputEl = document.querySelector("input")
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const box = document.querySelector("#boxes")

let sizes = 30; 



btnCreate.addEventListener("click", createMarcup);

 function createMarcup(){
  const amount = inputEl.value;
if  (amount < 1 || amount > 100){
  return;
  }
createBoxes(amount);
}

btnDestroy.addEventListener("click", destroyMurcap);

function destroyMurcap(){
  box.innerHTML = "";
  input.value = 0;
  sizes = 30;
}


function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
const myBox = document.createElement("div")
myBox.style.width = `${sizes}px`;
myBox.style.height = `${sizes}px`
myBox.style.backgroundColor = getRandomHexColor();
box.append(myBox);
sizes +=10;

  }
}





function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  