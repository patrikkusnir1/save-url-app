
let myLeads = `["www.awesomelead.com"]`;
// turn myLeads into an array 
// push new value to the array
// turn the array into string again
// console.log string using typeof

myLeads = JSON.parse(myLeads);
myLeads.push("www.lead2.com");
myLeads = JSON.stringify(myLeads);
console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

// less efficient way
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Refactor the code below to use a template string
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
    `
  }
  ulEl.innerHTML = listItems;
}


// alternative - more efficient way
// function renderLead() {
//   let listItem = "<li>" + inputEl.value + "</li>";
//   ulEl.innerHTML += listItem;
// }


