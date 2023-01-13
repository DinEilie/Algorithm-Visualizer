var size = 150; // 50|75|100|150
var speed = 5;
var isTaken = new Array(size);
var array = [];

resetArray();

function resetArray() {
  array = [];
  for (var i = 0; i < isTaken.length; i++) {
    isTaken[i] = false;
  }
  for (var i = 0; i < size; i++) {
    var temp = Math.floor(Math.random() * size);
    while (isTaken[temp]) {
      temp = Math.floor(Math.random() * size);
    }
    $("#game").append(
      '<div class="scale-in-ver-bottom me-1 numBlock" style="height: ' +
        (temp + 1) * 2 +
        "px; width: " +
        3.5 +
        'px;" id="' + temp + 'B"></div>'
    );
    isTaken[temp] = true;
    array.push(temp);
  }
}

function bubbleSort() {
    
}
