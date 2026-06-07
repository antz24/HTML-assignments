const agentBtn = document.querySelector("#agent");
const agentOut = document.querySelector("#outputAgent");
let agentCounter = -1;
let agentValue = "";

const locationBtn = document.querySelector("#location");
const locationOut = document.querySelector("#outputLocation");
let locationCounter = -1;
let locationValue = "";

const loadoutBtn = document.querySelector("#loadout");
const loadoutOut = document.querySelector("#outputLoadout");
let loadoutCounter = -1;
let loadoutValue = "";

const objectiveBtn = document.querySelector("#objective");
const objOut = document.querySelector("#outputObj");
let objCounter = -1;
let objValue = "";

const riskBtn = document.querySelector("#risk");
const riskOut = document.querySelector("#outputRisk");
let riskCounter = -1;
let riskValue = "";

const briefingBtn = document.querySelector("#briefing");
const briefingOut = document.querySelector("#outputBriefing");

const randomBtn = document.querySelector("#random");
const resetBtn = document.querySelector("#reset");

let agentList = ["Doom Slayer", "Samuel Hayden", "Commander Thira", "King Novik"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

agentBtn.addEventListener("click", agentCycle);
locationBtn.addEventListener("click", locationCycle);
loadoutBtn.addEventListener("click", loadoutCycle);
objectiveBtn.addEventListener("click", objectiveCycle);
riskBtn.addEventListener("click", riskCycle);
briefingBtn.addEventListener("click", briefingGen);
randomBtn.addEventListener("click", randomizer);
resetBtn.addEventListener("click", resetMission);
function agentCycle()
{
    if (agentCounter === agentList.length - 1)
    {
        agentCounter = 0;
    }
    else
    {
        agentCounter++;
    }
    agentValue = agentList[agentCounter];
    agentOut.textContent = agentValue;
}

function locationCycle()
{
     if (locationCounter === locationList.length - 1)
        {
            locationCounter = 0;
        }
        else
        {
            locationCounter++;
        }
    locationValue = locationList[locationCounter];
    locationOut.textContent = locationValue;
}

function loadoutCycle()
{
     if (loadoutCounter === weaponList.length - 1)
        {
            loadoutCounter = 0;
        }
        else
        {
            loadoutCounter++;
        }
    loadoutValue = weaponList[loadoutCounter];
    loadoutOut.textContent = loadoutValue;
}

function objectiveCycle()
{
     if (objCounter === objectiveList.length - 1)
        {
            objCounter = 0;
        }
        else
        {
            objCounter++;
        }
    objValue = objectiveList[objCounter];
    objOut.textContent = objValue;
}

function riskCycle()
{
     if (riskCounter === riskList.length - 1)
        {
            riskCounter = 0;
        }
        else
        {
            riskCounter++;
        }
    riskValue = riskList[riskCounter];
    riskOut.textContent = riskValue;
}

function briefingGen()
{
    if (agentValue !== "" && locationValue !== "" && loadoutValue !== "" && objValue !== "" && riskValue !== "")
    {
        briefingOut.textContent = ("MISSION BRIEFING \n\n Agent:  " + agentValue + "\n Location:  " + locationValue + "\nWeapon:  " + loadoutValue + "\nObjective:  " + objValue + "\nRisk:  " + riskValue);
    }
    else
    {
        briefingOut.textContent = "WARNING! Selections incomplete!";
    }
}

function randomizer()
{
    agentValue = agentList[Math.floor(Math.random() * 4)];
    agentOut.textContent = agentValue;

    locationValue = locationList[Math.floor(Math.random() * 4)];
    locationOut.textContent = locationValue;

    loadoutValue = weaponList[Math.floor(Math.random() * 4)];
    loadoutOut.textContent = loadoutValue;

    objValue = objectiveList[Math.floor(Math.random() * 3)];
    objOut.textContent = objValue;

    riskValue = riskList[Math.floor(Math.random() * 4)];
    riskOut.textContent = riskValue;

    briefingOut.textContent = ("MISSION BRIEFING \n\n Agent:  " + agentValue + "\n Location:  " + locationValue + "\nWeapon:  " + loadoutValue + "\nObjective:  " + objValue + "\nRisk:  " + riskValue);
}

function resetMission()
{
    agentValue = "";
    agentOut.textContent = agentValue;
    
    locationValue = "";
    locationOut.textContent = locationValue;

    loadoutValue = "";
    loadoutOut.textContent = loadoutValue;

    objValue = "";
    objOut.textContent = objValue;

    riskValue = "";
    riskOut.textContent = riskValue;

    briefingOut.textContent = "";
}
// This javascript was written using help from lecture content, https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent and https://www.w3schools.com/JS/js_random.asp