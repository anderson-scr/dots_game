const gameTable = document.querySelector("#container-gameTable");
const iptNumberColumns = document.querySelector("#columnNumber");
const iptNumberRows = document.querySelector("#rowNumber");

let tableStructureData = {};


const generateTable = () => {
  gameTable.innerHTML = "";

  for(colId = 0; colId < iptNumberColumns.value; colId++) {
    let column = `<div class='column col${colId}'>`;

    for(squareId = 0; squareId < iptNumberRows.value; squareId++) {
      const square = `
      <div class="square sqr${colId}-${squareId}"> ${colId}-${squareId}
        <div class="cornerDot topLeft"></div>
        <div class="cornerDot topRight" ></div>
        <div class="cornerDot bottomLeft"></div>
        <div class="cornerDot bottomRight"></div>
      </div>`;
      column += square;
      buildObjectDataForTable(colId, squareId);
    };
    
    column += "</div>";
    gameTable.innerHTML += column;
  };
  gatherSquaresElements();
  console.log(tableStructureData);
};

function buildObjectDataForTable(colId, squareID) {
  let key = "sqr" + colId + "-" + squareID;
  tableStructureData[key] = {
    element: undefined,
    left: false,
    top: false,
    right: false,
    bottom: false
  };
};

function gatherSquaresElements() {
  Object.keys(tableStructureData).forEach(key => {
    tableStructureData[key].element = document.querySelector(`.${key}`)
  });
};