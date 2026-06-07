const agentBtn = document.querySelector("#agent");
const agentOut = document.querySelector("#outputAgent");
let agentCounter = 0;

const locationBtn = document.querySelector("#location");
const locationOut = document.querySelector("#outputLocation");

const loadoutBtn = document.querySelector("#loadout");
const loadoutOut = document.querySelector("#outputLoadout");

const objectiveBtn = document.querySelector("#objective");
const objOut = document.querySelector("#outputObj");

const riskBtn = document.querySelector("#risk");
const riskOUt = document.querySelector("#outputRisk");

const briefingBtn = document.querySelector("#briefing");
const briefingOut = document.querySelector("#outputBriefing");



let agentList = ["Ghost", "Shadow", "Viper", "Nova"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

agentBtn.addEventListener("click", agentCycle);

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