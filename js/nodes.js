var regFill = "turquoise";
var highlightFill = "red";

var regFillText = "black";
var highlightFillText = "white";

let treeContainer;
let arrayContainer;
let start;

const xSpacing = 200;
const ySpacing = 100;
// function Node(value, index, depth, cx, cy) {
//   this.value = value;
//   this.index = index;
//   this.depth = depth;
//   this.radius = radius;
//   this.cx = cx;
//   this.cy = cy;
//   this.left = null;
//   this.right = null;
//   this.fill = regFill;
//   this.highlighted = false;
// }

function createArray(arr, x, y, width, height) {
  var arrayData = arr.map((value, i) => {
    if (i > 0) {
      x += 50
    }
    return {
      x: x,
      y: y,
      width: width,
      height: height,
      color: regFill,
      value: value
    }
  })

  var elementsArr = arrayContainer.selectAll("rect")
    .data(arrayData)
    .enter()
    .append("rect")
    .on("click", addHighlight);

  d3.select("#array-visual").attr("align","center")

  elementsArr.attr("x", d => d.x)
              .attr("y", d => d.y)
              .attr("width", d => d.width)
              .attr("height", d => d.height)
              .attr("fill", d => d.color)
              .attr("stroke", "black")

  arrayContainer.selectAll("text.rect")
    .data(arrayData)
    .enter()
    .append("text")
    .attr("class", "rect")
    .on("click", addHighlight)
    .attr("x", d => d.x + (d.width / 2) - (d.value.toString().length*4))
    .attr("y", d => d.y + 30)
    .text(d => d.value)
    .call(textAttr, regFillText, "sans-serif", "1em")

  arrayContainer.selectAll("text.index")
    .data(arrayData)
    .enter()
    .append("text")
    .attr("class", "index")
    .text((d, i) => `[ ${i} ]`)
    .attr("x", d => d.x + 15)
    .attr("y", d => d.y - 15)
    .call(textAttr, regFillText, "sans-serif", "15px")

  return arrayData;
}

function textAttr(selection, fill, fontFamily, fontSize) {
  selection
    .attr("fill", fill)
    .attr("font-family", fontFamily)
    .attr("font-size", fontSize);
}

function createLineAttr(selection, stroke, x1, y1, x2, y2) {
  selection
  .style("stroke", stroke)
  .attr("x1", x1)
  .attr("y1", 0)
  .attr("x2", x2)
  .attr("y2", 0)
  .transition()
  .duration(100)
  .attr("y1", y1)
  .attr("y2", y2)
}

function addHighlight(data, index, color) {
  // console.log(color);
  if(color === undefined){
    removeHighlight();
    color = highlightFill;
  }
  function indexMatch(d, i) {return i == index ? this : null};
  d3.selectAll("rect").select(indexMatch).attr("fill", color);
  d3.selectAll("text.rect").select(indexMatch).attr("fill", highlightFillText);
}

function removeHighlightIndex(index) {
  function indexMatch(d, i) {return i == index ? this : null};
  d3.selectAll("rect").select(indexMatch).attr("fill", regFill);
  d3.selectAll("text.rect").select(indexMatch).attr("fill", regFillText);
}

function removeHighlight() {
  d3.selectAll("rect").attr("fill", regFill)
  d3.selectAll("text.rect").attr("fill", regFillText);
}

function calcDimensions(arr) {
  let depth = Math.ceil(Math.log2((arr.length - 1) + 2)) - 1;
  return { width: Math.pow(2, depth), height: ySpacing + ySpacing * depth, depth: depth }
}

function createContainer(id, arr, width, height) {
  let box = calcDimensions(arr);

  let depth = Math.ceil(Math.log2((arr.length - 1) + 2)) - 1 || 1;

  let container = d3.select(`div#${id}`)
    .append('svg')
    .attr('width', width || box.width * 600 * (.8 / depth) * .75)
    .attr('height', height || box.height)

  return container;
}