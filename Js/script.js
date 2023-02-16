// Select the node that will be observed for mutations
const targetNode = document.querySelector('.messages-list');


// Options for the observer (which mutations to observe)
const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = function(mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            // console.log('A child node has been added or removed.');
            let test = mutation.addedNodes[0].querySelector(".rcx-message-body > div > p")
            console.log(test.innerText)
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
// ========================================================================================================== //


const gameTable = document.querySelector("#container-gameTable");
const iptNumberColumns = document.querySelector("#columnNumber");
const iptNumberRows = document.querySelector("#rowNumber");
const iptPlay = document.querySelector("#iptEnterPlay")

let tableStructureData = {};


const generateTable = () => {
  gameTable.innerHTML = "";

  for(colId = 0; colId < iptNumberColumns.value; colId++) {
    let column = `<div class='column col${colId}'>`;

    for(squareId = 0; squareId < iptNumberRows.value; squareId++) {
      let square = `
      <div class="square sqr${colId}-${squareId}">
        <div class="cornerDot topLeft toolTip" data-tooltip="${colId}${squareId}"></div>
        <div class="cornerDot bottomLeft toolTip" data-tooltip="${colId}${squareId + 1}"></div>
      </div>`;

      if(iptNumberColumns.value == colId + 1) {
         square = `
          <div class="square sqr${colId}-${squareId}">
            <div class="cornerDot topLeft toolTip" data-tooltip="${colId}${squareId}"></div>
            <div class="cornerDot topRight toolTip" data-tooltip="${colId + 1}${squareId}"></div>
            <div class="cornerDot bottomLeft toolTip" data-tooltip="${colId}${squareId + 1}"></div>
            <div class="cornerDot bottomRight toolTip" data-tooltip="${colId + 1}${squareId + 1}"></div>
          </div>`;
      }
      column += square;
      buildObjectDataForTable(colId, squareId);
    };
    
    column += "</div>";
    gameTable.innerHTML += column;
  };
  gatherSquaresElements();
};

function buildObjectDataForTable(colId, squareID) {
  let key = "sqr" + colId + "-" + squareID;
  tableStructureData[key] = {
    element: undefined,
    left: {
      used: false,
      cornerValue1: `${colId}${squareID}`,
      cornerValue2: `${colId}${squareID + 1}`
    },
    top: {
      used: false,
      cornerValue1: `${colId}${squareID}`,
      cornerValue2: `${colId + 1}${squareID}`
    },
    right: {
      used: false,
      cornerValue1: `${colId + 1}${squareID}`,
      cornerValue2: `${colId + 1}${squareID + 1}`
    },
    bottom: {
      used: false,
      cornerValue1: `${colId}${squareID + 1}`,
      cornerValue2: `${colId + 1}${squareID + 1}`
    },
  };
};

function gatherSquaresElements() {
  Object.keys(tableStructureData).forEach(key => {
    tableStructureData[key].element = document.querySelector(`.${key}`)
  });
};

function setPlay() {
  let playValue = iptPlay.value;
  let splitPlayerPlay = playValue.split(" ");

  Object.entries(tableStructureData).forEach(
    ([key, value]) => {

      // Verify left play
      if(verifyPlay(splitPlayerPlay, value.left)) {
        if(value.left.used) {
          window.alert("Line already used. Please, chose another one");
          return;
        }

        value.element.style.borderLeft = "2px solid #f1fa8c";
        tableStructureData[key].left.used = true;
        verifyCompleteSquare(tableStructureData[key]);
        return;
      };

      // Verify top play
      if(verifyPlay(splitPlayerPlay, value.top)) {
        if(value.top.used) {
          window.alert("Line already used. Please, chose another one");
          return;
        }

        value.element.style.borderTop = "2px solid #f1fa8c";
        tableStructureData[key].top.used = true;
        verifyCompleteSquare(tableStructureData[key]);
        return;
      };

      // Verify right play
      if(verifyPlay(splitPlayerPlay, value.right)) {
        if(value.right.used) {
          window.alert("Line already used. Please, chose another one");
          return;
        }

        value.element.style.borderRight = "2px solid #f1fa8c";
        tableStructureData[key].right.used = true;
        verifyCompleteSquare(tableStructureData[key]);
        return;
      };

      // Verify bottom play
      if(verifyPlay(splitPlayerPlay, value.bottom)) {
        if(value.bottom.used) {
          window.alert("Line already used. Please, chose another one");
          return;
        }

        value.element.style.borderBottom = "2px solid #f1fa8c";
        tableStructureData[key].bottom.used = true;
        verifyCompleteSquare(tableStructureData[key]);
        return;
      };
    }
  );
}

function verifyPlay(splitPlayerPlay, sideValue) {
  if((splitPlayerPlay[0] == sideValue.cornerValue1 || splitPlayerPlay[1] == sideValue.cornerValue1) && (splitPlayerPlay[0] == sideValue.cornerValue2 || splitPlayerPlay[1] == sideValue.cornerValue2)) {
    return true;
  } else false;
};

function verifyCompleteSquare(square) {
  if(square.left.used && square.top.used && square.right.used && square.bottom.used) {
    square.element.innerHTML += "X"
  }
}