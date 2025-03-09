let input;

function reset() {
  d3.selectAll('svg').remove();
}

function createElemArray() {
  reset();
  let inputText = document.getElementById("array-input")
  document.querySelector('#visual-title').innerHTML = "Current Array";
  if (inputText.value !== '') {
      input = inputText.value.trim().split(/\s+|\,+/g).map((num) => parseInt(num));
      return createArr(input)
  }
}

function createArr(arr) {
  arrayContainer = createContainer("array-visual", arr, arr.length * 60, 100);
  // let tree = new Tree()
  // tree.createBinaryTree(input)
  return createArray(arr, 2, 30, 50, 50);
}

function bubbleSortt(){
  let inputText = document.getElementById("array-input")
  arr = createElemArray();
  // console.log(arr);
  bubbleSort(arr,arr.length);
}

function insertionSortt(){
  let inputText = document.getElementById("array-input")
  arr = createElemArray();
  // console.log(arr);
  insertionSort(arr,arr.length);
}

function selectionSortt(){
  let inputText = document.getElementById("array-input")
  arr = createElemArray();
  // console.log(arr);
  selectionSort(arr,arr.length);
}

//default values
input = [10, 20, 60, 30, 70, 40, 50];
let inputTest = document.getElementById("array-input")
inputTest.value = input;
createArr(input);