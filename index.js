
let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Save the myLeads array to localStorage
  // PS: remember JSON.stringify()

  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads();

  // verify that works
  console.log(localStorage.getItem("myLeads"))
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


