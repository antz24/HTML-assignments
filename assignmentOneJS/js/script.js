const agentBtn = document.querySelector("#agent");
const agentOut = document.querySelector("#outputAgent");
let agentCounter = -1;

const locationBtn = document.querySelector("#location");
const locationOut = document.querySelector("#outputLocation");
let locationCounter = -1;

const loadoutBtn = document.querySelector("#loadout");
const loadoutOut = document.querySelector("#outputLoadout");
let loadoutCounter = -1;

const objectiveBtn = document.querySelector("#objective");
const objOut = document.querySelector("#outputObj");
let objCounter = -1;

const riskBtn = document.querySelector("#risk");
const riskOut = document.querySelector("#outputRisk");
let riskCounter = -1;

const briefingBtn = document.querySelector("#briefing");
const briefingOut = document.querySelector("#outputBriefing");



let agentList = ["Doom Slayer", "Samuel Hayden", "Commander Thira", "King Novik"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

agentBtn.addEventListener("click", agentCycle);
locationBtn.addEventListener("click", locationCycle);
loadoutBtn.addEventListener("click", loadoutCycle);
objectiveBtn.addEventListener("click", objectiveCycle);

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
    agentOut.textContent = agentList[agentCounter];
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
    locationOut.textContent = locationList[locationCounter];
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
    loadoutOut.textContent = weaponList[loadoutCounter];
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
    objOut.textContent = objectiveList[objCounter];
}