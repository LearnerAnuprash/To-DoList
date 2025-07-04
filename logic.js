let hour = document.getElementById("hourBox"); // gets element by ID
let minute = document.getElementById("minuteBox");
let second = document.getElementById("secondBox");
let theme = document.querySelector(".changeModeContainer");
let shootingStarBackground = document.getElementById("bgVideo");
let body = document.body;
let isDark = false;
let videoToggleBtn = document.getElementById("videoToggleButton");
//Making functional theme toggle button

function themeChange() {
  if (isDark === false) {
    // Switch to dark mode
    body.classList.add("dark-mode");
    shootingStarBackground.style.display = "block";
    videoToggleBtn.style.display = "block";
    shootingStarBackground.play();
    isDark = true;
  } else {
    // Switch to light mode
    body.classList.remove("dark-mode");
    shootingStarBackground.style.display = "none";
    shootingStarBackground.pause();
    videoToggleBtn.style.display = "none";
    isDark = false;
  }
}

shootingStarBackground.playbackRate = 0.7;
theme.addEventListener("click", themeChange);

let count = 1;

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Manipulation using DOM

  hour.innerHTML = String(hours).padStart(
    2,
    "0"
  ); /*  String(hours) :  converts hours to string

                                                       padStart(2,'0'): adds padding of 0 unless
                                                                        the no. of characters become
                                                                        two                */
  minute.innerHTML = String(minutes).padStart(2, "0");

  second.innerHTML = String(seconds).padStart(2, "0");
}

updateTime(); //Loads time immediately without delay

setInterval(updateTime, 1000);

//For making task adding functional:

let toAddTask = document.querySelector(".addedTask");
let taskButton = document.querySelector(".addButtonContainer");
let inputList = document.getElementById("inputBox");

let listCount = 1;

function addsTask() {
  if (inputList.value === "") {
    alert("Please Enter a task!");
  } else {
    let containerList = document.createElement("div");
    containerList.classList.add("containerForList");

    let listElement = document.createElement("li");
    let listNumber = document.createElement("p");
    let tick = document.createElement("img");
    let dustbin = document.createElement("img");

    tick.src = "media/tickIcon.png";
    tick.classList.add("tickImage");

    tick.addEventListener("click", () => {
      containerList.style.textDecoration = "line-through";
      listElement.style.background = "rgba(248, 248, 248, 0.5)";
    });

    dustbin.src = "media/dustbinIcon.png";
    dustbin.classList.add("dustbinImage");

    dustbin.addEventListener("click", () => {
      containerList.remove();
    });

    toAddTask.appendChild(containerList);
    containerList.appendChild(listNumber);
    containerList.appendChild(listElement);
    containerList.appendChild(tick);
    containerList.appendChild(dustbin);

    listNumber.innerHTML = listCount;
    listElement.innerHTML = inputList.value;
    inputList.value = "";
    listCount++;
  }
}

taskButton.addEventListener("click", addsTask);

inputList.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addsTask();
  }
});

videoToggleBtn.addEventListener("click", () => {
  if (shootingStarBackground.paused) {
    shootingStarBackground.play();
    videoToggleBtn.innerText = "Pause Video";
  } else {
    shootingStarBackground.pause();
    videoToggleBtn.innerText = "Play Video";
  }
});
