var size = 50; // 50|75|100|150
var speed = 50;
var isTaken = new Array(size);
var comparisons = 0;
var replacments = 0;
var time = 0;
var array = [];
var isPaused = false;
var isStoped = false;
const sortList = [
  "bubbleSort",
  "insertionSort",
  "mergeSort",
  "quickSort",
  "countingSort",
];
var chosenSort = sortList[0];
$("#restart").fadeToggle(0);

resetArray(size);
console.log("length is set to " + size);

$(".game-btn").click(function () {
  if (this.id == "start") {
    toggleAll();
    switch (chosenSort) {
      case "bubbleSort":
        bubbleSort();
        timeCount();
        $("#restart").fadeToggle(200);
        console.log("starting bubble sort");
        break;
      case "insertionSort":
        insertionSort();
        timeCount();
        $("#restart").fadeToggle(200);
        console.log("starting insertion sort");
        break;
      case "mergeSort":
        mergeSort(array);
        // timeCount();
        $("#restart").fadeToggle(200);
        console.log("starting merge sort");
        break;
      case "quickSort":
        quickSort();
        timeCount();
        $("#restart").fadeToggle(200);
        console.log("starting quick sort");
        break;
      case "countingSort":
        countingSort();
        timeCount();
        $("#restart").fadeToggle(200);
        console.log("starting counting sort");
        break;
    }
  } else if (this.id == "restart") {
    toggleAll();
    $("#restart").fadeToggle(200);
    resetArray(size);
  } else if (this.id == "btnradio1") chosenSort = sortList[0];
  else if (this.id == "btnradio2") chosenSort = sortList[1];
  else if (this.id == "btnradio3") chosenSort = sortList[2];
  else if (this.id == "btnradio4") chosenSort = sortList[3];
  else if (this.id == "btnradio5") chosenSort = sortList[3];
  else if (this.id == "length-50") {
    $("#length-75").removeClass("active");
    $("#length-100").removeClass("active");
    $("#length-150").removeClass("active");
    $("#length-50").addClass("active");
    resetArray(50);
    console.log("length is set to " + size);
  } else if (this.id == "length-75") {
    $("#length-50").removeClass("active");
    $("#length-100").removeClass("active");
    $("#length-150").removeClass("active");
    $("#length-75").addClass("active");
    resetArray(75);
    console.log("length is set to " + size);
  } else if (this.id == "length-100") {
    $("#length-50").removeClass("active");
    $("#length-75").removeClass("active");
    $("#length-150").removeClass("active");
    $("#length-100").addClass("active");
    resetArray(100);
    console.log("length is set to " + size);
  } else if (this.id == "length-150") {
    $("#length-50").removeClass("active");
    $("#length-75").removeClass("active");
    $("#length-100").removeClass("active");
    $("#length-150").addClass("active");
    resetArray(150);
    console.log("length is set to " + size);
  } else if (this.id == "speed-50") {
    $("#speed-25").removeClass("active");
    $("#speed-500").removeClass("active");
    $("#speed-1000").removeClass("active");
    $("#speed-50").addClass("active");
    speed = 50;
    console.log("speed is set to " + speed);
  } else if (this.id == "speed-500") {
    $("#speed-50").removeClass("active");
    $("#speed-500").removeClass("active");
    $("#speed-1000").removeClass("active");
    $("#speed-500").addClass("active");
    speed = 500;
    console.log("speed is set to " + speed);
  } else if (this.id == "speed-1000") {
    $("#speed-25").removeClass("active");
    $("#speed-50").removeClass("active");
    $("#speed-500").removeClass("active");
    $("#speed-1000").addClass("active");
    speed = 1000;
    console.log("speed is set to " + speed);
  }
});

// Generate a new random array
function resetArray(value) {
  isStoped = true;
  size = value;
  $("body").addClass("bg-danger");

  // Reset variables after 1s
  setTimeout(function () {
    $("body").removeClass("bg-danger");
    replacments = 0;
    comparisons = 0;
    time = 0;
    isStoped = false;
    isPaused = false;
    $("#game").html("");
    $("#replacements0").text("");
    $("#replacements1").text("");
    $("#comparisons0").text("");
    $("#comparisons1").text("");
    $("#timing0").text("");
    $("#timing1").text("");
    isTaken = new Array(size).fill(false);
    array = [];

    // Create array elements
    for (var i = 0; i < size; i++) {
      // Pick a non chosen random number between 1 to 'SIZE'
      var temp = Math.floor(Math.random() * size);
      while (isTaken[temp]) {
        temp = Math.floor(Math.random() * size);
      }

      switch (size) {
        case 50:
          $("#game").append(
            '<div class="scale-in-ver-bottom me-1 numBlock" style="height: ' +
              (temp + 1) * 2 +
              "px; width: " +
              1.25 +
              '%;" id="' +
              temp +
              'B"></div>'
          );
          break;
        case 75:
          $("#game").append(
            '<div class="scale-in-ver-bottom me-1 numBlock" style="height: ' +
              (temp + 1) * 2 +
              "px; width: " +
              0.8 +
              '%;" id="' +
              temp +
              'B"></div>'
          );
          break;
        case 100:
          $("#game").append(
            '<div class="scale-in-ver-bottom me-1 numBlock" style="height: ' +
              (temp + 1) * 2 +
              "px; width: " +
              0.5 +
              '%;" id="' +
              temp +
              'B"></div>'
          );
          break;
        case 150:
          $("#game").append(
            '<div class="scale-in-ver-bottom me-1 numBlock" style="height: ' +
              (temp + 1) * 2 +
              "px; width: " +
              0.25 +
              '%;" id="' +
              temp +
              'B"></div>'
          );
          break;
      }
      isTaken[temp] = true;
      array.push(temp);
    }
  }, 1001);
}

// Toggle all buttons
function toggleAll() {
  if ($("#start").hasClass("disabled")) {
    $("#btnradio1").prop("disabled", false);
    $("#btnradio2").prop("disabled", false);
    $("#btnradio3").prop("disabled", false);
    $("#btnradio4").prop("disabled", false);
    $("#btnradio5").prop("disabled", false);
    $("#length-50").removeClass("disabled");
    $("#length-75").removeClass("disabled");
    $("#length-100").removeClass("disabled");
    $("#length-150").removeClass("disabled");
    $("#start").removeClass("disabled");
  } else {
    $("#btnradio1").prop("disabled", true);
    $("#btnradio2").prop("disabled", true);
    $("#btnradio3").prop("disabled", true);
    $("#btnradio4").prop("disabled", true);
    $("#btnradio5").prop("disabled", true);
    $("#length-50").addClass("disabled");
    $("#length-75").addClass("disabled");
    $("#length-100").addClass("disabled");
    $("#length-150").addClass("disabled");
    $("#start").addClass("disabled");
  }
}

// Bubble Sort
function bubbleSort() {
  var i = 0;
  var j = 0;

  bubbleInterval = setInterval(function () {
    if (!isStoped) {
      if (!isPaused) {
        if (j < size - i - 1) {
          // Reset and update the text and dyes
          $("#replacements0").text("Replacements: ");
          $("#replacements1").text(replacments);
          $("#comparisons0").text("Comparisons: ");
          $("#comparisons1").text(comparisons);
          if (j > 0) {
            $("#" + array[j] + "B").removeClass("numBlockR");
            $("#" + array[j] + "B").removeClass("numBlockB");
            $("#" + array[j - 1] + "B").removeClass("numBlockR");
            $("#" + array[j - 1] + "B").removeClass("numBlockB");
            $("#" + array[j] + "B").addClass("numBlock");
            $("#" + array[j - 1] + "B").addClass("numBlock");
          }

          if (speed == 50) {
            setTimeout(function () {
              $("#" + array[j] + "B").addClass("numBlockR");
              $("#" + array[j + 1] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var nextBlock = document.getElementById(array[j + 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] > array[j + 1]) {
                  $("#" + array[j] + "B").removeClass("numBlockR");
                  $("#" + array[j + 1] + "B").removeClass("numBlockB");
                  var temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  nextBlock.style.height = (array[j + 1] + 1) * 2 + "px";
                  nextBlock.id = array[j + 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j] + "B").addClass("numBlockB");
                  $("#" + array[j + 1] + "B").addClass("numBlockR");
                }
                setTimeout(function () {
                  comparisons++;
                  j++;
                }, 3);
              }, 25);
            }, 1);
          } else if (speed == 500) {
            setTimeout(function () {
              $("#" + array[j] + "B").addClass("numBlockR");
              $("#" + array[j + 1] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var nextBlock = document.getElementById(array[j + 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] > array[j + 1]) {
                  $("#" + array[j] + "B").removeClass("numBlockR");
                  $("#" + array[j + 1] + "B").removeClass("numBlockB");
                  var temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  nextBlock.style.height = (array[j + 1] + 1) * 2 + "px";
                  nextBlock.id = array[j + 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j] + "B").addClass("numBlockB");
                  $("#" + array[j + 1] + "B").addClass("numBlockR");
                }
                setTimeout(function () {
                  comparisons++;
                  j++;
                }, 3);
              }, 250);
            }, 1);
          } else if (speed == 1000) {
            setTimeout(function () {
              $("#" + array[j] + "B").addClass("numBlockR");
              $("#" + array[j + 1] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var nextBlock = document.getElementById(array[j + 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] > array[j + 1]) {
                  $("#" + array[j] + "B").removeClass("numBlockR");
                  $("#" + array[j + 1] + "B").removeClass("numBlockB");
                  var temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  nextBlock.style.height = (array[j + 1] + 1) * 2 + "px";
                  nextBlock.id = array[j + 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j] + "B").addClass("numBlockB");
                  $("#" + array[j + 1] + "B").addClass("numBlockR");
                }
                setTimeout(function () {
                  comparisons++;
                  j++;
                }, 3);
              }, 500);
            }, 1);
          }
        } else {
          // Added sorted number
          if (i < size - 1) {
            $("#" + array[j] + "B").removeClass("numBlock");
            $("#" + array[j] + "B").removeClass("numBlockR");
            $("#" + array[j] + "B").removeClass("numBlockB");
            $("#" + array[j] + "B").addClass("numBlockG");
            $("#" + array[j - 1] + "B").removeClass("numBlockR");
            $("#" + array[j - 1] + "B").removeClass("numBlockB");
            $("#" + array[j - 1] + "B").addClass("numBlock");
            j = 0;
            i++;
          } else {
            // Last iteration of sort
            $("#" + array[0] + "B").removeClass("numBlock");
            $("#" + array[0] + "B").removeClass("numBlockR");
            $("#" + array[0] + "B").removeClass("numBlockB");
            $("#" + array[0] + "B").addClass("numBlockG");
            printArray();
            isStoped = true;
            clearInterval(bubbleInterval);
          }
        }
      }
    } else clearInterval(bubbleInterval);
  }, speed);
}

// Insertion Sort
function insertionSort() {
  var i = 0;
  var j = 1;
  var isSum = false;

  insertionInterval = setInterval(function () {
    if (!isStoped) {
      if (!isPaused) {
        // Reset and update the text and dyes
        $("#replacements0").text("Replacements: ");
        $("#replacements1").text(replacments);
        $("#comparisons0").text("Comparisons: ");
        $("#comparisons1").text(comparisons);
        if (j > 0 && !isSum) {
          if (speed == 50) {
            setTimeout(function () {
              // Fix color iteration
              if (j < size - 1) {
                $("#" + array[j + 1] + "B").removeClass("numBlockR");
                $("#" + array[j + 1] + "B").removeClass("numBlockG");
                $("#" + array[j + 1] + "B").removeClass("numBlockB");
                $("#" + array[j + 1] + "B").addClass("numBlock");
              }
              $("#" + array[i] + "B").addClass("numBlockR");
              $("#" + array[i] + "B").removeClass("numBlockG");
              $("#" + array[i] + "B").removeClass("numBlockB");
              $("#" + array[i] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").removeClass("numBlockG");
              $("#" + array[j - 1] + "B").removeClass("numBlockB");
              $("#" + array[j - 1] + "B").removeClass("numBlock");
              $("#" + array[j] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").addClass("numBlockR");
              $("#" + array[j] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var preBlock = document.getElementById(array[j - 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] < array[j - 1]) {
                  $("#" + array[j - 1] + "B").removeClass("numBlockR");
                  $("#" + array[j] + "B").removeClass("numBlockB");
                  // Swap numbers
                  var temp = array[j];
                  array[j] = array[j - 1];
                  array[j - 1] = temp;
                  // Swap
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  preBlock.style.height = (array[j - 1] + 1) * 2 + "px";
                  preBlock.id = array[j - 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j - 1] + "B").addClass("numBlockB");
                  $("#" + array[j] + "B").addClass("numBlockR");
                  setTimeout(function () {
                    comparisons++;
                    j--;
                  }, 3);
                } else {
                  setTimeout(function () {
                    comparisons++;
                    isSum = true;
                  }, 3);
                }
              }, 25);
            }, 1);
          } else if (speed == 500) {
            setTimeout(function () {
              // Fix color iteration
              if (j < size - 1) {
                $("#" + array[j + 1] + "B").removeClass("numBlockR");
                $("#" + array[j + 1] + "B").removeClass("numBlockG");
                $("#" + array[j + 1] + "B").removeClass("numBlockB");
                $("#" + array[j + 1] + "B").addClass("numBlock");
              }
              $("#" + array[i] + "B").addClass("numBlockR");
              $("#" + array[i] + "B").removeClass("numBlockG");
              $("#" + array[i] + "B").removeClass("numBlockB");
              $("#" + array[i] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").removeClass("numBlockG");
              $("#" + array[j - 1] + "B").removeClass("numBlockB");
              $("#" + array[j - 1] + "B").removeClass("numBlock");
              $("#" + array[j] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").addClass("numBlockR");
              $("#" + array[j] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var preBlock = document.getElementById(array[j - 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] < array[j - 1]) {
                  $("#" + array[j - 1] + "B").removeClass("numBlockR");
                  $("#" + array[j] + "B").removeClass("numBlockB");
                  // Swap numbers
                  var temp = array[j];
                  array[j] = array[j - 1];
                  array[j - 1] = temp;
                  // Swap
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  preBlock.style.height = (array[j - 1] + 1) * 2 + "px";
                  preBlock.id = array[j - 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j - 1] + "B").addClass("numBlockB");
                  $("#" + array[j] + "B").addClass("numBlockR");
                  setTimeout(function () {
                    comparisons++;
                    j--;
                  }, 3);
                } else {
                  setTimeout(function () {
                    comparisons++;
                    isSum = true;
                  }, 3);
                }
              }, 250);
            }, 1);
          } else if (speed == 1000) {
            setTimeout(function () {
              // Fix color iteration
              if (j < size - 1) {
                $("#" + array[j + 1] + "B").removeClass("numBlockR");
                $("#" + array[j + 1] + "B").removeClass("numBlockG");
                $("#" + array[j + 1] + "B").removeClass("numBlockB");
                $("#" + array[j + 1] + "B").addClass("numBlock");
              }
              $("#" + array[i] + "B").addClass("numBlockR");
              $("#" + array[i] + "B").removeClass("numBlockG");
              $("#" + array[i] + "B").removeClass("numBlockB");
              $("#" + array[i] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").removeClass("numBlockG");
              $("#" + array[j - 1] + "B").removeClass("numBlockB");
              $("#" + array[j - 1] + "B").removeClass("numBlock");
              $("#" + array[j] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").addClass("numBlockR");
              $("#" + array[j] + "B").addClass("numBlockB");

              // Set the current and the next
              var currentBlock = document.getElementById(array[j] + "B");
              var preBlock = document.getElementById(array[j - 1] + "B");

              setTimeout(function () {
                // Replace between the numbers
                if (array[j] < array[j - 1]) {
                  $("#" + array[j - 1] + "B").removeClass("numBlockR");
                  $("#" + array[j] + "B").removeClass("numBlockB");
                  // Swap numbers
                  var temp = array[j];
                  array[j] = array[j - 1];
                  array[j - 1] = temp;
                  // Swap
                  currentBlock.style.height = (array[j] + 1) * 2 + "px";
                  currentBlock.id = "currentID";
                  preBlock.style.height = (array[j - 1] + 1) * 2 + "px";
                  preBlock.id = array[j - 1] + "B";
                  currentBlock.id = array[j] + "B";
                  replacments++;
                  $("#" + array[j - 1] + "B").addClass("numBlockB");
                  $("#" + array[j] + "B").addClass("numBlockR");
                  setTimeout(function () {
                    comparisons++;
                    j--;
                  }, 3);
                } else {
                  setTimeout(function () {
                    comparisons++;
                    isSum = true;
                  }, 3);
                }
              }, 500);
            }, 1);
          }
        } else {
          if (i < size - 1) {
            if (j > 0) {
              $("#" + array[j - 1] + "B").removeClass("numBlock");
              $("#" + array[j - 1] + "B").removeClass("numBlockR");
              $("#" + array[j - 1] + "B").removeClass("numBlockB");
              $("#" + array[j - 1] + "B").addClass("numBlockG");
            }
            for (var k = j; k <= i; k++) {
              $("#" + array[k] + "B").removeClass("numBlockR");
              $("#" + array[k] + "B").removeClass("numBlockB");
              $("#" + array[k] + "B").removeClass("numBlock");
              $("#" + array[k] + "B").addClass("numBlockG");
            }
            i++;
            j = i;
            isSum = false;
          } else {
            // Reset and update the text and dyes
            for (var k = 0; k < size; k++) {
              $("#" + array[k] + "B").removeClass("numBlockR");
              $("#" + array[k] + "B").removeClass("numBlockB");
              $("#" + array[k] + "B").removeClass("numBlock");
              $("#" + array[k] + "B").addClass("numBlockG");
            }
            printArray();
            isStoped = true;
            clearInterval(insertionInterval);
          }
        }
      }
    } else clearInterval(insertionInterval);
  }, speed);
}

function mergeSort(arr) {
  if (arr == null) {
    return;
  }

  if (arr.length > 1) {
    // Set middle pointer
    var middle = parseInt(arr.length / 2);

    // Set left-half sub array
    var left = Array(middle).fill(0);
    for (i = 0; i < middle; i++) {
      left[i] = arr[i];
    }

    // Set right-half sub array
    var right = Array(arr.length - middle).fill(0);
    for (i = middle; i < arr.length; i++) {
      right[i - middle] = arr[i];
    }

    // Sort on both halves
    mergeSort(left);
    mergeSort(right);
    callStep();

    async function callStep(){
      await step();
    }

    function step() {
      var i = 0;
      var j = 0;
      var k = 0;
      mergeInterval = setInterval(function () {
        if (!isStoped) {
          if (!isPaused) {
            updateStats();
            if (i < left.length && j < right.length) {
              if (speed == 50) {
                setTimeout(function () {
                  // Fix color iteration
                  $("#" + left[i] + "B").removeClass("numBlockB");
                  $("#" + right[j] + "B").removeClass("numBlockR");
                  $("#" + left[i] + "B").removeClass("numBlock");
                  $("#" + right[j] + "B").removeClass("numBlock");
                  $("#" + left[i] + "B").addClass("numBlockR");
                  $("#" + right[j] + "B").addClass("numBlockB");

                  // Set the current and the next
                  var currentBlock = document.getElementById(arr[j] + "B");
                  var preBlock = document.getElementById(arr[j - 1] + "B");

                  setTimeout(function () {
                    // Replace between the numbers
                    if (left[i] < right[j]) {
                      $("#" + left[i] + "B").removeClass("numBlockR");
                      $("#" + right[j] + "B").removeClass("numBlockB");
                      // Swap numbers
                      var temp = arr[j];
                      arr[j] = arr[j - 1];
                      arr[j - 1] = temp;
                      // Swap
                      currentBlock.style.height = (arr[j] + 1) * 2 + "px";
                      currentBlock.id = "currentID";
                      preBlock.style.height = (arr[j - 1] + 1) * 2 + "px";
                      preBlock.id = arr[j - 1] + "B";
                      currentBlock.id = arr[j] + "B";
                      replacments++;
                      $("#" + arr[j - 1] + "B").addClass("numBlockB");
                      $("#" + arr[j] + "B").addClass("numBlockR");
                      setTimeout(function () {
                        comparisons++;
                        j--;
                      }, 3);
                    } else {
                      setTimeout(function () {
                        comparisons++;
                        isSum = true;
                      }, 3);
                    }
                  }, 25);
                }, 1);
              }
              setTimeout(function () {
                if (left[i] < right[j]) {
                  arr[k] = left[i];
                  i++;
                } else {
                  arr[k] = right[j];
                  j++;
                }
                k++;
              }, 1);
            } else {
              if (i < left.length) {
                arr[k] = left[i];
                i++;
                k++;
              } else if (j < right.length) {
                arr[k] = right[j];
                j++;
                k++;
              } else {
                //end of step()
                printArray();
                clearInterval(mergeInterval);
                return new Promise((resolve) => {
                  resolve("resolved");
                });
              }
            }
          }
        }
      }, speed);
    }
  }
}

function timeCount() {
  showTime = setInterval(function () {
    if (!isStoped) {
      if (!isPaused) {
        time++;
        $("#timing0").text("Time: ");
        $("#timing1").text(Math.floor(time / 100) + "." + (time % 100));
      }
    } else clearInterval(showTime);
  }, 10);
}

// Reset and update the text
function updateStats() {
  $("#replacements0").text("Replacements: ");
  $("#replacements1").text(replacments);
  $("#comparisons0").text("Comparisons: ");
  $("#comparisons1").text(comparisons);
}

function printArray() {
  for (var i = 0; i < size; i++) {
    console.log(i + ". " + array[i]);
  }
}
