const tabLar = document.querySelectorAll(".tabcontent");
const btns = document.querySelectorAll(".tabheader__item");
function removeTab(index) {
  tabLar.forEach((item) => {
    item.style.display = "none";
  });
  tabLar[index].style.display = "block";
  sikl();
  btns[index].classList.add("tabheader__item_active");
}

function sikl() {
  btns.forEach((item, index) => {
    item.classList.remove("tabheader__item_active");
    item.addEventListener("click", () => {
      removeTab(index);
    });
  });
}

removeTab(0);

const slider = document.querySelector(".offer__slider-wrapper");
const sliders = document.querySelectorAll(".offer__slide");
const current = document.getElementById("current");
const total = document.getElementById("total");
const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
let i = 0;

total.innerHTML = "0" + sliders.length;

function bg(index) {
  sliders.forEach((item) => {
    item.style.display = "none";
    item.classList.add("fade");
  });

  sliders[index].style.display = "block";
  current.innerHTML = "0" + (index + 1);
}

prev.addEventListener("click", () => {
  if (i == 0) {
    i = sliders.length - 1;
  } else {
    i--;
  }
  bg(i);
});

function nextSlide() {
    if (i == sliders.length - 1) {
        i = 0;
      } else {
        i++;
      }
      bg(i);
}
next.addEventListener("click",nextSlide);
setInterval(nextSlide,3000)

bg(i);

const modal = document.querySelector(".modal");
const button = document.querySelectorAll(".button");
const modal__close = document.querySelector(".modal__close");

button.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  });
});

modal__close.addEventListener("click", () => {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = "";
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.style.display = "none";
  }
});

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}, 1000);

const deadline = new Date("2023-01-01");

function getVaqt(endTime) {
  const timer = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(timer / (1000 * 60 * 60 * 24)),
    hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((timer / (1000 * 60)) % 60),
    seconds = Math.floor((timer / 1000) % 60);
  return {
    timer,
    days,
    hours,
    minutes,
    seconds,
  };
}

function fixingTime(time){
    if(time<10) {
        return '0' + time
    } else {
        return time
    }
}

function getSelector(timer, endTime) {
    const days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds");
function setTime() {
    const ummumiyvaqt = getVaqt(endTime);
    days.innerHTML = fixingTime(ummumiyvaqt.days);
    hours.innerHTML = fixingTime(ummumiyvaqt.hours);
    minutes.innerHTML = fixingTime(ummumiyvaqt.minutes),
    seconds.innerHTML = fixingTime(ummumiyvaqt.seconds);
  }

  setInterval(setTime,1000)
}

getSelector(document.querySelector(".timer"), deadline);
