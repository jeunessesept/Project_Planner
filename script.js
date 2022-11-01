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



const sortTable = () => {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector(".tasks");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
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
}


setInterval(displayHours, 1000);

const subButton = document.querySelector(".submit");

subButton.addEventListener("click", () => {
  tableTasks();
});




const sorteSelect = document.getElementById("sorte");

sorteSelect.addEventListener("change", () => {
  if (sorteSelect.value === "name"){
    sortTable();
  }
})