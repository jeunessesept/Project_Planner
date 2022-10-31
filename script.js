////Heure et date, dans .firstContainer

const displayHours = () => {
  const dateHours = document.querySelector(".dateHours");
  const dateAndHours = new Date();
  let day = dateAndHours.getDate();
  let year = dateAndHours.getFullYear();
  let month = dateAndHours.getMonth();
  let hoursDay = dateAndHours.getHours();
  let minutesDay = dateAndHours.getMinutes();
  let secondesDay = dateAndHours.getSeconds();

  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  hoursDay = hoursDay < 10 ? "0" + hoursDay : hoursDay;
  minutesDay = minutesDay < 10 ? "0" + minutesDay : minutesDay;
  secondesDay = secondesDay < 10 ? "0" + secondesDay : secondesDay;

  let dateHoursOfToday =
    weekday[dateAndHours.getDay()] +
    "  " +
    day +
    " " +
    months[dateAndHours.getMonth()] +
    " " +
    year +
    " -  " +
    hoursDay +
    ": " +
    minutesDay +
    ": " +
    secondesDay;
  dateHours.innerHTML = dateHoursOfToday;
};
setInterval(displayHours, 1000);

/// table

//const tableTasks = () => {
//   const table = document.querySelector(".tasks");
//   const inputName = document.querySelector(".name");
//   const inputDescription = document.querySelector(".description");
//   const inputDate = document.querySelector(".duedate");
//   const newTask = document.createElement("tr");
//   const inName = document.createElement("td");
//   const inDescription = document.createElement("td");
//   const inDueDate = document.createElement("td");
//   const statu = document.createElement("td");
//   const selectStatu = document.createElement("select");
//   const subButton = document.querySelector(".submit");
//   const tableBody = document.querySelector(".tbody");

//   console.log(newTask.firstChild)

//   inName.textContent = inputName.value;

//   const selectOptions = ["select", "todo", "doing", "done"];

//   subButton.addEventListener("click", () => {
//     const newTask = document.createElement("tr");
//     newTask.classList.add("newtask");
//     inName.innerHTML = inputName.value;
//     inDescription.innerHTML = inputDescription.value;
//     inDueDate.innerHTML = inputDate.value;
//     tableBody.appendChild(newTask);
//     newTask.insertAdjacentHTML("beforeBegin", `<td> ${inName.outerHTML} </td>`);
//     newTask.insertAdjacentHTML("afterBegin", `<td> ${inDescription.outerHTML} </td>`);
//     newTask.appendChild(inDueDate);
//     newTask.appendChild(statu);
//     statu.appendChild(selectStatu);
//     console.log(newTask.firstChild)
//   });
//   for (i = 0; i < selectOptions.length; i++) {
//     option = document.createElement("option");
//     option.value = selectOptions[i];
//     option.text = selectOptions[i];
//     selectStatu.appendChild(option);
//   }
// };

//newTask.appendChild(inName);
//newTask.appendChild(inDescription);
///newTask.appendChild(inDueDate);

// const list1 = [];
// const list2 = [];
// const list3 = [];

// let n = 1;
// let x = 0;


const dateAndHours = new Date();




const tableTasks = () => {
  const dateAndHours = new Date();
  const list1 = [];
  const list2 = [];
  const list3 = [];
  const list4 = [];

  console.log(dateAndHours)
  
  let n = 1;
  let x = 0;

  const addRow = document.querySelector(".tasks");
  const newRow = addRow.insertRow(n);

  const inputName = document.querySelector(".name");
  const inputDescription = document.querySelector(".description");
  const dueDate = document.querySelector(".duedate").value;

  localStorage.setItem("name", inputName.value)
  localStorage.setItem("description", inputDescription.value)

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];



  list1[x] = document.querySelector(".name").value;
  list2[x] = document.querySelector(".description").value;
  list3[x] = dateAndHours.getDate() + months[dateAndHours.getMonth()] + dateAndHours.getFullYear();
 

  

  const cel1 = newRow.insertCell(0);
  const cel2 = newRow.insertCell(1);
  const cel3 = newRow.insertCell(2);
  const cel4 = newRow.insertCell(3);
  const cel5 = newRow.insertCell(4);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];

  n++;
  x++;

  const selectStatu = document.createElement("select");
  const selectOptions = ["select", "todo", "doing", "done"];

  cel5.appendChild(selectStatu);

  for (i = 0; i < selectOptions.length; i++) {
    option = document.createElement("option");
    option.value = selectOptions[i];
    option.text = selectOptions[i];
    selectStatu.appendChild(option);
  }
};

const subButton = document.querySelector(".submit");

subButton.addEventListener("click", () => {
  tableTasks();
});



