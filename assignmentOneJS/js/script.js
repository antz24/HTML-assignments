const agentBtn = document.querySelector("#agent");
const agentOut = document.querySelector("#outputAgent");
let agentCounter = 0;

const locationBtn = document.querySelector("#location");
const locationOut = document.querySelector("#outputLocation");
let locationCounter = 0;

const loadoutBtn = document.querySelector("#loadout");
const loadoutOut = document.querySelector("#outputLoadout");
let loadoutCounter = 0;

const objectiveBtn = document.querySelector("#objective");
const objOut = document.querySelector("#outputObj");
let objCounter = 0;

const riskBtn = document.querySelector("#risk");
const riskOut = document.querySelector("#outputRisk");
let riskCounter = 0;

const briefingBtn = document.querySelector("#briefing");
const briefingOut = document.querySelector("#outputBriefing");



let agentList = ["Doom Slayer", "Samuel Hayden", "Commander Thira", "King Novik"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

agentBtn.addEventListener("click", agentCycle);
locationBtn.addEventListener("click", locationCycle);

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

}