const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const IMAGES = [
    {name: "icon-work.svg", class: "work"},
    {name: "icon-play.svg", class: "play"},
    {name: "icon-study.svg", class: "study"},
    {name: "icon-exercise.svg", class: "exercise"},
    {name: "icon-social.svg", class: "social"},
    {name: "icon-self-care.svg", class: "selfcare"}
];

let boxContent;

daily.addEventListener("click",function(){getTimeReport("daily")});
weekly.addEventListener("click",function(){getTimeReport("weekly")});
monthly.addEventListener("click",function(){getTimeReport("monthly")});

