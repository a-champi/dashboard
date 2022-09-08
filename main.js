import data from './data.json'  assert {type:'json'};

let arrayColors =
[
    // {activity: "work",color: 'hsl(15, 100%, 70%)' },
    // {activity: "play",color: 'hsl(195, 74%, 62%)' },
    // {activity: "study",color: 'hsl(348, 100%, 68%)' },
    // {activity: "exercise",color: 'hsl(145, 58%, 55%)' },
    // {activity: "social",color: 'hsl(264, 64%, 52%)' },
    // {activity: "self care",color: 'hsl(43, 84%, 70%)' },
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 70%)' 
];

//console.log(arrayColors[0].color);
let dailyArray = data.map(d => d.timeframes.daily);
let weeklyArray = data.map(w => w.timeframes.weekly);
let monthlyArray = data.map(m => m.timeframes.monthly);

let secondSection = document.querySelector(".second-section");

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

// let dailyBtn = document.querySelector("#daily");
// let weeklyBtn = document.querySelector("#weekly");
// let monthlyBtn = document.querySelector("#monthly");


dailyBtn.addEventListener("click", () => drawElements(dailyArray));
weeklyBtn.addEventListener("click", () => drawElements(weeklyArray));
monthlyBtn.addEventListener("click", () => drawElements(monthlyArray));
 

const drawElements = (array)  => {
    
    secondSection.innerHTML = '';
    array.forEach((element, index) => { 

        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();  
        
        if(titleLowerCase == "self care"){
            titleLowerCase = "self-care";
        }
        
        
        // let chooseColor = arrayColors.find(e => e.title === titleLowerCase);
       

        secondSection.innerHTML += `
            <div class="card">
                    <div class="card-background" style ="background-color:${arrayColors[index]};">                
                        <img class="card-image"src="./image/icon-${titleLowerCase}.svg" alt="card-image">
                    </div>
                    <div class="card-details">
                        <div class="card-object">
                            <p class="card-title">${title}</p>
                            <img class="card-dots" src="./image/icon-ellipsis.svg" alt="dots">
                        </div>
                        <div class="card-time">
                            <p class="card-title__hours">${element.current}hrs</p>
                            <p class="card-title__previous">previous - ${element.previous}hrs</p>
                        </div>              
                    </div>
            </div>  `
        });      
};
//start
drawElements(dailyArray);
