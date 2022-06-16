// JS Total File

//JS FILE Index
// 1. SMS SETUP         : 10-40
// 1. SMS List          : 43-115    
// 1. SMS Module        : 120-191
// 1. SMS Report        : Pending


//SMS SETUP
// Character Counter And Reset Button
const textfield = document.getElementById("myInput");
const clearBtn = document.getElementById("clrbtn");
const subject = document.getElementById("subject");
const chrtCount = document.getElementById("charNum");
var clear = document.getElementById("CtgSelect");

function countChars(obj) {
    // var maxLength = 20;
    // var strLength = obj.value.length;
    // if (strLength <= maxLength) {
    chrtCount.innerHTML = + obj.value.length;
    // }
    // else {
    //     document.getElementById("cnt").innerHTML = '<p style="color: blue;">' + strLength + ' out of ' + maxLength + ' characters</p>';
    // }

}
clearBtn.onclick = () => {
    textfield.value = "";
    chrtCount.innerHTML = "0";
    subject.value = "";
    for (var i = 0; i < clear.length; i++) {
        if (clear.options[i].selected) {
            clear.options[i].selected = false;
        }
    }
}
// Character Counter And Reset Button
//SMS SETUP


//SMS List
// SMS Subject Title(Dropdonw With Text Search)
const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
// SMS Subject Title(Dropdonw With Text Search)


// Character Counter And Reset Button
const clearSmsList = document.getElementById("smsListReset");
// const dateReset = document.getElementById("date");
var SmsListCtg = document.getElementById("CtgSmS");

clearSmsList.onclick = () => {
    document.getElementById("date").value = "";
    document.getElementById("to").value = "";
    document.getElementById("messageSearch").innerHTML = "Select One";
    for (var i = 0; i < SmsListCtg.length; i++) {
        if (SmsListCtg.options[i].selected) {
            SmsListCtg.options[i].selected = false;
        }
    }

}

// Date & Time Picker
format = {
    dateFormat: "d-m-Y",
}
flatpickr("input[type=datetime-local]", format);
// Date & Time Picker

// Character Counter And Reset Button
//SMS List




// SMS Module
// Time & Date Live 
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var today = new Date();  /* new date object */
var date = today.getDate() + ' - ' + month[(today.getMonth())] + ' - ' + today.getFullYear();
/* display current date */
document.getElementById("currentDate").innerHTML = date;

/* Auto refreshing clock time */
function startTime() {
    var today = new Date(); /* new date object */
    /* getting minutes hours and seconds from date object */
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    /* 12 hour time formate */
    var amPm = "AM";
    if (hours > 13) {
        amPm = "PM";
        hours = hours - 12;
    }
    /* put zero before numbers < 10 */
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var time = hours + ' : ' + minutes + ' : ' + seconds + '  ' + amPm;
    /* display current time */
    document.getElementById("currentTime").innerHTML = time;

    /* Auto refreshing time every 1 second */
    setTimeout(function () { startTime() }, 1000);
}
// Time & Date Live


// Select Check Box & Counter
var checkboxes = document.querySelectorAll('.checkbox');
var count = 0;
document.getElementById("check-all").onclick = function () {
    count = 0;
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
        if (checkbox.checked == true) {
            count++;
            document.getElementById("selectCount").innerHTML = count;
        }
        else {
            count = 0;
            document.getElementById("selectCount").innerHTML = count;

        }
    }
}
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function () {
        if (this.checked == true) {
            count++;
        }
        else {
            count--;
        }
        document.getElementById("selectCount").innerHTML = count;
    })
}
// Select Check Box & Counter
// SMS Module

