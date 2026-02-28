//configuration
const GRID_SIZE = 10;
const gridElement = document.getElementById("grid");

const gridData = [];
let selectedTile = null;
const units = [];

//add units
class Unit {
    constructor(name, hp, attack, movement, row, col, team) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.movement = movement;
        this.row = row;
        this.col = col;
        this.team = team; // "player" or "enemy"
    }
}

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

//add units
function spawnUnits() {
    const playerUnit = new Unit("Knight", 100, 20, 3, 0, 0, "player");//players
    const enemyUnit = new Unit("Raider", 100, 15, 3, 9, 9, "enemy"); //enemy
    units.push(playerUnit);
    units.push(enemyUnit);
    gridData[playerUnit.row][playerUnit.col].unit = playerUnit;
    gridData[enemyUnit.row][enemyUnit.col].unit = enemyUnit;
}

//render grid data
function renderGrid() {
    gridElement.innerHTML = "";

    gridData.forEach(row => {
        row.forEach(tile => {
            const tileDiv = document.createElement("div");
            tileDiv.classList.add("tile", tile.terrain);

            // add tile highlights
            if ( selectedTile && selectedTile.row === tile.row &&  selectedTile.col === tile.col) {
            tileDiv.classList.add("selected");
        }

        // Render unit if exists
        if (tile.unit) {
            const unitDiv = document.createElement("div");
            unitDiv.classList.add("unit");

            if (tile.unit.team === "player") {
                unitDiv.classList.add("player-unit");
                unitDiv.textContent = "P";
            } else {
                unitDiv.classList.add("enemy-unit");
                unitDiv.textContent = "E";
            }

            tileDiv.appendChild(unitDiv);
        }

        tileDiv.addEventListener("click", () => {
            handleTileClick(tile);
        });

        gridElement.appendChild(tileDiv);
    });

});

}

// tile clicks
function handleTileClick(tile) {

//deselect if same tile is clicked twice
if (selectedTile && selectedTile.row === tile.row && selectedTile.col === tile.col) {selectedTile = null;
    } else {selectedTile = tile;
    }
renderGrid();
}

//game initialisation
function initGame() {
    createGridData();
    spawnUnits();
    renderGrid();
}

// Start the game
    initGame();