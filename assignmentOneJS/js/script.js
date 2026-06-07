const agentBtn = document.querySelector("agent");
const locationBtn = document.querySelector("location");
const loadoutBtn = document.querySelector("loadout");
const objectiveBtn = document.querySelector("objective");
const riskBtn = document.querySelector("risk");
const briefingBtn = document.querySelector("briefing");
const output = document.querySelector("output");


let agentList = ["Ghost", "Shadow", "Viper", "Nova"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

agentBtn.addEventListener("click", agentCycle);

function agentCycle()
{
    
}