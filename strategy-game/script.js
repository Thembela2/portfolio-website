//configuration
const GRID_SIZE = 10;
const gridElement = document.getElementById("grid");

const gridData = [];
let selectedTile = null;

//create grid data
function createGridData() {
 for (let row = 0; row < GRID_SIZE; row++) {
    const rowArray = [];   
    for (let col = 0; col < GRID_SIZE; col++) {
        const terrainTypes = ["grass", "mountain", "water"];
        const randomTerrain = terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
        rowArray.push({
            row: row,
            col: col,
            terrain: randomTerrain,
            unit: null
        });
}
gridData.push(rowArray);
}
}

//render grid data
function renderGrid() {
    gridElement.innerHTML = "";

    gridData.forEach(row => {
        row.forEach(tile => {
            const tileDiv = document.createElement("div");
            tileDiv.classList.add("tile", tile.terrain);

            // add tile highlights
            if (selectedTile && selectedTile.row === tile.row && selectedTile.col === tile.col ) {
                tileDiv.classList.add("selected");
            }
            tileDiv.dataset.row = tile.row;
            tileDiv.dataset.col = tile.col;
            tileDiv.addEventListener("click", () => {
            handleTileClick(tile);
            });

    gridElement.appendChild(tileDiv);
        });
    });
}

// tile clicks
function handleTileClick(tile) {

//deselect if same time is clicked twice
if (selectedTile && selectedTile.row === tile.row && selectedTile.col === tile.col) {selectedTile = null;
    } else {selectedTile = tile;
    }
renderGrid();
}

//game initialisation
function initGame() {
    createGridData();
    renderGrid();
}

// Start the game
    initGame();