window.onload = function () {
    createHud();
    createCircleParent();
}

var balls = 0;
var invisibleBalls = 0;

function createRedCircle() {
    balls++;
    const redCircle = document.createElement("div");
    redCircle.className = "circle";
    redCircle.id = `red-circle-${balls}`;
    redCircle.style.backgroundColor = balls % 3 == 1 ? "red" : balls % 3 == 2 ? "blue" : "green";
    redCircle.onclick = function () {
        invisibleBalls++;
        redCircle.style.display = "none";
        document.getElementById("score").innerHTML = setScore();
    }
    document.getElementById("score").innerHTML = setScore();
    document.getElementById("circle-parent").appendChild(redCircle);
}

function createCircleParent() {
    const parent = document.createElement("div");
    parent.id = "circle-parent";
    parent.className = "circle-parent";
    document.body.appendChild(parent);
}

function createHud() {
    const hud = document.createElement("div");
    hud.id = "hud";
    hud.className = "hud";
    const tutorial = createTutorial();
    const score = createScoreElement();
    const button = createButtonsDiv();
    hud.appendChild(tutorial);
    hud.appendChild(score);
    hud.appendChild(button);
    document.body.appendChild(hud);
}

function createTutorial() {
    const tutorial = document.createElement("div");
    tutorial.id = "tutorial";
    tutorial.className = "tutorial";
    tutorial.innerHTML = "Bem vindo ao Disappearing Circles.\nClique no botão abaixo para adicionar novos círculos.\nClique nos círculos para removê-los."
    return tutorial;
}

function createScoreElement() {
    const score = document.createElement("div");
    score.id = "score";
    score.className = "score";
    score.innerHTML = setScore();
    return score;
}

function createButtonsDiv() {
    const buttons = document.createElement("div");
    buttons.id = "buttons-div";
    buttons.className = "buttons-div";
    const addButton = createAddButton();
    const removeButton = createRemoveButton();
    const showAllButton = createShowAllButton();
    buttons.appendChild(addButton);
    buttons.appendChild(removeButton);
    buttons.appendChild(showAllButton);
    document.body.appendChild(buttons);
    return buttons;
}

function createAddButton() {
    const button = document.createElement("button");
    button.id = "add-circle-button";
    button.innerHTML = "Adicionar círculo";
    button.className = "button";
    button.onclick = function () {
        createRedCircle();
    };
    return button;
}

function createRemoveButton() {
    const button = document.createElement("button");
    button.id = "remove-circles-button";
    button.innerHTML = "Remover todos círculos";
    button.className = "button";
    button.onclick = function () {
        var children = document.getElementById("circle-parent").childNodes;
        children.forEach((child) => {
            invisibleBalls = balls;
            child.style.display = "none";
            document.getElementById("score").innerHTML = setScore();
        });
    };
    return button;
}

function createShowAllButton() {
    const button = document.createElement("button");
    button.id = "show-circles-button";
    button.innerHTML = "Mostrar todos círculos";
    button.className = "button";
    button.onclick = function () {
        var children = document.getElementById("circle-parent").childNodes;
        children.forEach((child) => {
            child.style.display = "block";
            invisibleBalls = 0;
            document.getElementById("score").innerHTML = setScore();
        });
    };
    return button;
}

function setScore() {
    return `Número de círculos: ${balls - invisibleBalls}`;
}