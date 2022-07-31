let turn = "X";

const header1 = document.querySelector(".header1");
let array = [];

for (let index = 1; index < 10; index++) {
  array[index] = document.getElementById("item" + index);
}

function win(a, b, c, winner) {
  header1.innerHTML = `${winner} is the winner`;
  array[a].style.backgroundColor = "red";
  array[b].style.backgroundColor = "red";
  array[c].style.backgroundColor = "red";
  setInterval(() => {
    header1.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
}

function checkDraw() {
    
let couter =1;
    for (let index = 1; index < 10; index++) {
      if (array[index].innerHTML == "") {
        break;
      }else{
        couter++;
   
        if (couter==9) {
            header1.innerHTML='Draw '
             setInterval(() => {
                  header1.innerHTML += ".";
                }, 1000);
                setTimeout(() => {
                  location.reload();
                }, 3000);
        
          }
      }
      
    }
  
   

}

function game(id) {
  let element = document.getElementById(id);
  let draw = 1;

  if (element.innerHTML == "") {
    element.innerHTML = turn;
    if (turn == "X") {
      header1.innerHTML = "O turn";
      turn = "O";
    } else {
      header1.innerHTML = "X turn";

      turn = "X";
    }
  }
  // vertical ligne X
  if (
    array[1].innerHTML == "X" &&
    array[2].innerHTML == "X" &&
    array[3].innerHTML == "X"
  ) {
    draw = 0;
    win(1, 2, 3, "X");
  }
  if (
    array[4].innerHTML == "X" &&
    array[5].innerHTML == "X" &&
    array[6].innerHTML == "X"
  ) {
    draw = 0;
    win(4, 5, 6, "X");
  }
  if (
    array[7].innerHTML == "X" &&
    array[8].innerHTML == "X" &&
    array[9].innerHTML == "X"
  ) {
    draw = 0;
    win(7, 8, 9, "X");
  }
  // vertical ligne O
  if (
    array[1].innerHTML == "O" &&
    array[2].innerHTML == "O" &&
    array[3].innerHTML == "O"
  ) {
    draw = 0;
    win(1, 2, 3, "O");
  }
  if (
    array[4].innerHTML == "O" &&
    array[5].innerHTML == "O" &&
    array[6].innerHTML == "O"
  ) {
    draw = 0;
    win(4, 5, 6, "O");
  }
  if (
    array[7].innerHTML == "O" &&
    array[8].innerHTML == "O" &&
    array[9].innerHTML == "O"
  ) {
    draw = 0;
    win(7, 8, 9, "O");
  }
  //   horizantal ligne X

  if (
    array[1].innerHTML == "X" &&
    array[4].innerHTML == "X" &&
    array[7].innerHTML == "X"
  ) {
    draw = 0;
    win(1, 4, 7, "X");
  }
  if (
    array[2].innerHTML == "X" &&
    array[5].innerHTML == "X" &&
    array[8].innerHTML == "X"
  ) {
    draw = 0;
    win(2, 5, 8, "X");
  }
  if (
    array[3].innerHTML == "X" &&
    array[6].innerHTML == "X" &&
    array[9].innerHTML == "X"
  ) {
    draw = 0;
    win(3, 6, 9, "X");
  }
  //   horizantal ligne O

  if (
    array[1].innerHTML == "O" &&
    array[4].innerHTML == "O" &&
    array[7].innerHTML == "O"
  ) {
    draw = 0;
    win(1, 4, 7, "O");
  }
  if (
    array[2].innerHTML == "O" &&
    array[5].innerHTML == "O" &&
    array[8].innerHTML == "O"
  ) {
    draw = 0;
    win(2, 5, 8, "O");
  }
  if (
    array[3].innerHTML == "O" &&
    array[6].innerHTML == "O" &&
    array[9].innerHTML == "O"
  ) {
    draw = 0;
    win(3, 6, 9, "O");
  }
  // Cross ligne X
  if (
    array[1].innerHTML == "X" &&
    array[5].innerHTML == "X" &&
    array[9].innerHTML == "X"
  ) {
    draw = 0;
    win(1, 5, 9, "X");
  }
  if (
    array[3].innerHTML == "X" &&
    array[5].innerHTML == "X" &&
    array[7].innerHTML == "X"
  ) {
    draw = 0;
    win(3, 5, 7, "X");
  }
  // Cross ligne O
  if (
    array[1].innerHTML == "O" &&
    array[5].innerHTML == "O" &&
    array[9].innerHTML == "O"
  ) {
    draw = 0;
    win(1, 5, 9, "O");
  }
  if (
    array[3].innerHTML == "O" &&
    array[5].innerHTML == "O" &&
    array[7].innerHTML == "O"
  ) {
    draw = 0;
    win(3, 5, 7, "O");
  }
// check draw if exist 
  checkDraw();


}
