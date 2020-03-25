
const totalCounter = document.getElementById('totalCases');
const deathCounter = document.getElementById('totalDeath');
const recoveryCounter = document.getElementById('totalRecovered');
const url = 'https://coronavirus-19-api.herokuapp.com/all';


// Global Stats

// fetch confirmed cases

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        totalCounter.textContent = data.cases;
        deathCounter.textContent = data.deaths;
        recoveryCounter.textContent = data.recovered;
    })

//Stats by Country

const totalCounterByCountry = document.getElementById('totalCasesByCountry');
const deathCounterByCountry = document.getElementById('totalDeathByCountry');
const recoveryCounterByCountry = document.getElementById('totalRecoveredByCountry');
const CasesToday = document.getElementById('totalCasesToday');
const deathsToday = document.getElementById('totalDeathsToday');

const countryName = "";

function getDataByCountry() {

    const countryName = document.getElementById('countryName').value;
    const countryUrl = `https://coronavirus-19-api.herokuapp.com/countries/${countryName}`;
    document.getElementById("currentCountry").innerText = 'Current Stats showing for ' + countryName;

    // fetch cases

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => totalCounterByCountry.textContent = data.cases)

    // fetch deaths

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => deathCounterByCountry.textContent = data.deaths)

    // fetch recovered

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => recoveryCounterByCountry.textContent = data.recovered)

    // fetch todays cases
    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => CasesToday.textContent = data.todayCases)

    // fetch todays deaths
    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => deathsToday.textContent = data.todayDeaths)

}