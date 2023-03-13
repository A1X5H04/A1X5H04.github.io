const wrapper = document.getElementById("grid-tiles")

let columns = Math.floor(document.body.clientHeight / 50),
    rows = Math.floor(document.body.clientWidth / 50);




function handleOnMouseMove(index) {
    anime({
        targets: ".tile",
        backgroundColor: "#00ff95",
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

function createTile(index) {
    const tile = document.createElement("div");
    tile.classList.add('tile');
    return tile
}

function createTiles(quantity) {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}


function createGrid() {
    wrapper.innerHTML = ""

    columns = Math.floor(document.body.clientHeight / 5),
    rows = Math.floor(document.body.clientWidth / 5);

    wrapper.style.setProperty("--columns", columns)
    wrapper.style.setProperty("--rows", rows)

    createTiles(rows * columns)
}

createGrid();

window.onresize = () => createGrid();
