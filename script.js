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

const tableTasks = () => {
  const table = document.querySelector(".tasks");
  const inputName = document.querySelector(".name");
  const inputDescription = document.querySelector(".description");
  const inputDate = document.querySelector(".duedate");
  const newTask = document.createElement("tr");
  const inName = document.createElement("td");
  const inDescription = document.createElement("td");
  const inDueDate = document.createElement("td");
  const statu = document.createElement("td");
  const selectStatu = document.createElement("select");
  const subButton = document.querySelector(".submit");

  const inputs = [inputName, inputDescription, inputDate];
  const selectOptions = ["select", "todo", "doing", "done"];

  subButton.addEventListener("click", () => {
    inputs.forEach((input) => {
      inName.innerHTML = inputName.value;
      inDescription.innerHTML = inputDescription.value;
      inDueDate.innerHTML = inputDate.value;
      table.appendChild(newTask);
      newTask.appendChild(inName);
      newTask.appendChild(inDescription);
      newTask.appendChild(inDueDate);
      newTask.appendChild(statu);
      statu.appendChild(selectStatu);
    });

    for (i = 0; i < selectOptions.length; i++) {
      option = document.createElement("option");
      option.value = selectOptions[i];
      option.text = selectOptions[i];
      selectStatu.appendChild(option);
    }
  });
};

tableTasks();
