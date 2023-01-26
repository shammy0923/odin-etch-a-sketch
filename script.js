// Document Element Variables

const sketchGrid = document.getElementById("sketch-grid");

// Setup the Etch-a-sketch grid

function makeRows(rows, cols) {
    sketchGrid.style.setProperty("--grid-rows", rows);
    sketchGrid.style.setProperty("--grid-cols", cols);
    for (var i = 0; i < (rows * cols); i++) {

        const divBlock = document.createElement("div");
        divBlock.classList.add("div-block");

        sketchGrid.appendChild(divBlock);

        // Changing Div Block Color

        divBlock.addEventListener("mouseover", function() {
            divBlock.classList.remove("div-block");
            divBlock.classList.add("div-block-hovered");
        })
    }
}

makeRows(16, 16);