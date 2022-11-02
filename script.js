////Heure et date, dans .firstContainer

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

const displayHours = () => {
  const dateHours = document.querySelector(".dateHours");
  const dateAndHours = new Date();
  let day = dateAndHours.getDate();
  let year = dateAndHours.getFullYear();
  let month = dateAndHours.getMonth();
  let hoursDay = dateAndHours.getHours();
  let minutesDay = dateAndHours.getMinutes();
  let secondesDay = dateAndHours.getSeconds();

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

const tasksform = document.querySelector(".tasksform");
const table = document.querySelector(".tasks");
const nameInput = tasksform["name"];
const descriptionInput = tasksform["description"];
const dateInput = document.getElementById("duedate");
const statusSelector = tasksform["status"];

console.log(statusSelector.value);

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = (name, description, duedate, statu) => {
  tasks.push({
    name,
    description,
    duedate,
    statu,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return { name, description, duedate, statu };
};

const newTaskRow = ({ name, description, duedate, statu }) => {
  const newRow = document.createElement("tr");
  const taskName = document.createElement("td");
  const taskDescription = document.createElement("td");
  const taskCreatedDate = document.createElement("td");
  const taskDuedate = document.createElement("td");
  const taskStatus = document.createElement("td");
  const statuValue = document.getElementById("selecstatus");

  const dateAndHours = new Date();

  let difference = dateInput.valueAsNumber - dateAndHours.getTime();
  let remainDays = Math.ceil(difference / (1000 * 3600 * 24));

  taskName.innerHTML = name;
  taskDescription.innerHTML = description;
  taskCreatedDate.innerHTML =
    dateAndHours.getDate() +
    months[dateAndHours.getMonth()] +
    dateAndHours.getFullYear();
  taskDuedate.innerHTML = "in " + duedate + " days";
  (taskStatus.innerHTML = statu),
    newRow.append(
      taskName,
      taskDescription,
      taskCreatedDate,
      taskDuedate,
      taskStatus
    );
  table.appendChild(newRow);
};

tasks.forEach(newTaskRow);

tasksform.onsubmit = (e) => {
  e.preventDefault();

  const newTask = addTask(
    nameInput.value,
    descriptionInput.value,
    Math.ceil(
      (new Date(dateInput.value).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    ),
    statusSelector.value
  );

  newTaskRow(newTask);

  nameInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  statusSelector.value = "";
};

//// other way to create table's rows, mais moins lisible
const tableTasks = () => {
  let n = 1;

  const addRow = document.querySelector(".tasks");
  const newRow = addRow.insertRow(n);

  const inputName = document.querySelector(".name");
  const inputDescription = document.querySelector(".description");
  const dateInput = document.getElementById("duedate");

  const dateAndHours = new Date();

  let difference = dateInput.valueAsNumber - dateAndHours.getTime();
  let remainDays = Math.ceil(difference / (1000 * 3600 * 24));

  localStorage.setItem("name", inputName.value);
  localStorage.setItem("description", inputDescription.value);
  localStorage.setItem(
    "created",
    dateAndHours.getDate() +
      months[dateAndHours.getMonth()] +
      dateAndHours.getFullYear()
  );
  localStorage.setItem("remaindays", remainDays);

  const cel1 = newRow.insertCell(0);
  const cel2 = newRow.insertCell(1);
  const cel3 = newRow.insertCell(2);
  const cel4 = newRow.insertCell(3);
  const cel5 = newRow.insertCell(4);

  cel1.innerHTML = localStorage.getItem("name");
  cel2.innerHTML = localStorage.getItem("description");
  cel3.innerHTML = localStorage.getItem("created");
  cel4.innerHTML = dateInput.value + " / " + remainDays + " days";

  n++;

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

//// sorte the table by name

const sortTableName = (table, rows, switching, i, x, y, shouldSwitch) => {
  table = document.querySelector(".tasks");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};

////filter by status
const filterStatus = document.getElementById("filterstatus");

///calling things

setInterval(displayHours, 1000);

const sorteSelect = document.getElementById("sorte");

sorteSelect.addEventListener("change", () => {
  if (sorteSelect.value === "name") {
    sortTableName();
  }
});
