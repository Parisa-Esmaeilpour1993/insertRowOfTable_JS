//Q3
const table = document.getElementById("sampleTable");
const addRow = document.getElementById("buttonForAddRow");
let i = 2;
function insert_Row() {
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  i++;
  cell1.innerHTML = `Row${i} Cell1`;
  cell2.innerHTML = `Row${i} Cell2`;
  console.log(row);
}

// addRow.addEventListener("click", insert_Row);

// Q4;
// const selectColor = document.getElementById("colorSelect");

// function removecolor() {
//   let selectValue = selectColor.selectedIndex;
//   console.log(selectValue);
//   selectColor.remove(selectValue);
// }
// console.log(selectColor);
