const gameTable = document.querySelector("#container-gameTable");
const iptNumberColumns = document.querySelector("#columnNumber");
const iptNumberRows = document.querySelector("#rowNumber");

let tableStructureData = {};


const generateTable = () => {
  gameTable.innerHTML = "";

  for(colId = 0; colId < iptNumberColumns.value; colId++) {
    let column = `<div class='column col${colId}'>`;

    for(squareId = 0; squareId < iptNumberRows.value; squareId++) {
      let square = `
      <div class="square sqr${colId}-${squareId}"> ${colId}-${squareId}
        <div class="cornerDot topLeft toolTip"></div>
        <div class="cornerDot bottomLeft toolTip"></div>
      </div>`;

      if(iptNumberColumns.value == colId + 1) {
         square = `
          <div class="square sqr${colId}-${squareId}"> ${colId}-${squareId}
            <div class="cornerDot topLeft toolTip"></div>
            <div class="cornerDot topRight toolTip"></div>
            <div class="cornerDot bottomLeft toolTip"></div>
            <div class="cornerDot bottomRight toolTip"></div>
          </div>`;
      }
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