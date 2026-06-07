// Variables and constants for agent selection
const agentBtn = document.querySelector("#agent");
const agentOut = document.querySelector("#outputAgent");
let agentCounter = -1;
let agentValue = "";

// Variables and constants for location selection
const locationBtn = document.querySelector("#location");
const locationOut = document.querySelector("#outputLocation");
let locationCounter = -1;
let locationValue = "";

// Variables and constants for loadout selection
const loadoutBtn = document.querySelector("#loadout");
const loadoutOut = document.querySelector("#outputLoadout");
let loadoutCounter = -1;
let loadoutValue = "";

// Variables and constants for objective selection
const objectiveBtn = document.querySelector("#objective");
const objOut = document.querySelector("#outputObj");
let objCounter = -1;
let objValue = "";

// Variables and constants for mission risk selection
const riskBtn = document.querySelector("#risk");
const riskOut = document.querySelector("#outputRisk");
let riskCounter = -1;
let riskValue = "";

// Constants for briefing function
const briefingBtn = document.querySelector("#briefing");
const briefingOut = document.querySelector("#outputBriefing");

// Constants for randomization and reset functions
const randomBtn = document.querySelector("#random");
const resetBtn = document.querySelector("#reset");

// Arrays storing the possible options for each category
let agentList = ["Doom Slayer", "Samuel Hayden", "Commander Thira", "King Novik"];
let locationList = ["Exultia", "Mars Core", "Nekravol", "Urdak"];
let weaponList = ["Combat Shotgun", "Heavy Assault Rifle", "Plasma Rifle", "Ballista"];
let objectiveList = ["Rescue Hostage", "Retrieve Briefcase", "Sabotage Supply Chain"];
let riskList = ["Low", "Medium", "High", "Very High"];

// Event listeners that activate when a given button is pressed
agentBtn.addEventListener("click", agentCycle);
locationBtn.addEventListener("click", locationCycle);
loadoutBtn.addEventListener("click", loadoutCycle);
objectiveBtn.addEventListener("click", objectiveCycle);
riskBtn.addEventListener("click", riskCycle);
briefingBtn.addEventListener("click", briefingGen);
randomBtn.addEventListener("click", randomizer);
resetBtn.addEventListener("click", resetMission);

/* Runs when agentBtn is clicked
* Increments agentCounter up to 4, where it then is set to 0
* Then stores the selected value in a variable and shares the value with the user
*/
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

/* Runs when locationBtn is clicked
* Increments locationCounter up to 4, where it then is set to 0
* Then stores the selected value in a variable and shares the value with the user
*/
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

/* Runs when loadoutBtn is clicked
* Increments loadoutCounter up to 4, where it then is set to 0
* Then stores the selected value in a variable and shares the value with the user
*/
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

/* Runs when objBtn is clicked
* Increments objCounter up to 3, where it then is set to 0
* Then stores the selected value in a variable and shares the value with the user
*/
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

/* Runs when riskBtn is clicked
* Increments riskCounter up to 4, where it then is set to 0
* Then stores the selected value in a variable and shares the value with the user
*/
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

/* Runs when briefingBtn is clicked
* Checks if the user has values selected for all categories and returns a mission briefing if true
* Otherwise it warns the user about incomplete selections
*/
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

/* Runs when randomBtn is pressed
* Randomizes the value of each variable
* Then shares each value with the user and returns a mission briefing
*/
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

/* Runs when resetBtn is clicked
* Resets the value of each variable and clears the screen
*/
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