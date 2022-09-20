/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const showPlace = document.getElementById("show");
console.log(showPlace);

const generateTable = () => {
  showPlace.innerHTML = "";
  const tb = document.createElement("table");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");

  //Ceating columns
  const column = document.createElement("tr");
  for (let i = 0; i < tableInfo.tableHeader.length; i++) {
    let item = document.createElement("th");
    item.textContent = tableInfo.tableHeader[i];
    //console.log(item);
    column.appendChild(item);
  }
  //console.log(column);
  tHead.appendChild(column);
  //console.log(tHead);

  //creating all cells
  for (let i = 0; i < tableInfo.tableContent.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < tableInfo.tableHeader.length; j++) {
      const cell = document.createElement("td");
      cell.textContent = Object.values(tableInfo.tableContent[i])[j];
      //console.log(cell);
      row.appendChild(cell);
    }
    console.log(row);
    tBody.appendChild(row);
  }
  tb.appendChild(tHead);
  tb.appendChild(tBody);
  //console.log(tb);
  showPlace.appendChild(tb);
};
const tableBtn = document.querySelector("#btn");
tableBtn.addEventListener("click", generateTable);

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//generate ordered list
const generateOrderedList = () => {
  showPlace.innerHTML = "";
  const orderedList = document.createElement("ol");
  for (let i = 0; i < list.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = list[i];
    orderedList.appendChild(listItem);
  }
  showPlace.appendChild(orderedList);
};

const olBtn = document.querySelector("#olbtn");
olBtn.addEventListener("click", generateOrderedList);

//generate unordered list
const generateUnorderedList = () => {
  showPlace.innerHTML = "";
  const unorderedList = document.createElement("ul");
  for (let i = 0; i < list.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = list[i];
    unorderedList.appendChild(listItem);
  }
  showPlace.appendChild(unorderedList);
};

const ulBtn = document.querySelector("#ulbtn");
ulBtn.addEventListener("click", generateUnorderedList);

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const generateDropDownList = () => {
  showPlace.innerHTML = "";
  const dropDown = document.createElement("select");
  for (let i = 0; i < dropDownList.length; i++) {
    let options = document.createElement("option");
    options.textContent = dropDownList[i].content;
    let att = document.createAttribute("value");
    att.textContent = dropDownList[i].value;
    dropDown.appendChild(options);
  }
  showPlace.appendChild(dropDown);
};

const dropDownBtn = document.querySelector("#dropdownbtn");
dropDownBtn.addEventListener("click", generateDropDownList);
