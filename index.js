
const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

clcBtn.addEventListener("click", calcWakeUpTimes);
refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcWakeUpTimes() {
    // this is an object with a key of timeStyle and a value of short
    const option = {
        timeStyle: "short"
    }
    const fallAsleepTime = new Date();
    fallAsleepTime.setMinutes(fallAsleepTime.getMinutes()+ 14)
    // console.log(fallAsleepTime.toLocaleTimeString("en-US", option))

    const wakeUpTime = new Date(fallAsleepTime);
    // const wakeUpTimes = []
    wakeUpHoursDiv.innerHTML = "";
    for(let i = 1; i <= 6; i++) {
        wakeUpTime.setMinutes(wakeUpTime.getMinutes()+ 90);
        const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", option);
        //console.log(`Sleep cycle ${i}: ${wakeUpTimeString}`)
        // wakeUpTimes.push(wakeUpTimeString)
        // const cycleDiv = document.getElementById(`cycle-${i}`);
        // cycleDiv.textContent = wakeUpTimeString;
        const cycleDiv = document.createElement("div");
        cycleDiv.classList.add("cycle");
        cycleDiv.setAttribute("id", `cycle-${i}`);
        cycleDiv.textContent = wakeUpTimeString;
        wakeUpHoursDiv.appendChild(cycleDiv);
    }
    // console.log(wakeUpTimes.join(", "))
    promptSection.classList.add("hidden");
    imageContainer.classList.add("hidden");
    resultSection.classList.remove("hidden");
}


