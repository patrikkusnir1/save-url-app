
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
];

tabBtn.addEventListener("click", function() {
  // Grab the URL of the current tab!
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id; // or do whatever you need
  });
  
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // turn array into the string
  render(myLeads);
})


// less efficient way
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads);
});




// alternative - more efficient way
// function renderLead() {
//   let listItem = "<li>" + inputEl.value + "</li>";
//   ulEl.innerHTML += listItem;
// }


