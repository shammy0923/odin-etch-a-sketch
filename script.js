// Document Element Variables

const sketchGrid = document.getElementById("sketch-grid");

// Setup the Etch-a-sketch grid

for (var i = 0; i <= 256; i++) {

    var divBlock = document.createElement("div");
    divBlock.classList.add("div-block");

    sketchGrid.appendChild(divBlock);

}