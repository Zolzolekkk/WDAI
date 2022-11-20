var countries = [];
async function fetchCountries(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    var data = await response.json();
    countries.push(data);
    console.log(countries);
    countries[0].sort(function(a,b) {
        if (a.subregion < b.subregion) {return -1;}
        if (a.subregion > b.subregion) {return 1;}
        return 0;
    })
    console.log(countries);
    createDynamicTable();
    return countries;
}
var nowecountry;
nowecountry = fetchCountries();



const createDynamicTable = () => {
    const tableInside = document.getElementById("insidetable");
    myString = "";
    countries[0].forEach((e) => {
    let tableRow = document.createElement('tr');
    tableInside.appendChild(tableRow);
        if (e.subregion != myString){
            myString = e.subregion;
            let tableSub = document.createElement('th');
            tableSub.innerText = e.subregion;
            tableRow.appendChild(tableSub);
        }   
            tableRow = document.createElement('tr');
            tableInside.appendChild(tableRow);
            let tableCountry = document.createElement('td');
            tableCountry.innerText = e.name.official;
            tableRow.appendChild(tableCountry);
            tableCountry = document.createElement('td');
            tableCountry.innerText = e.capital;
            tableRow.appendChild(tableCountry);
            tableCountry = document.createElement('td');
            tableCountry.innerText = e.population;
            tableRow.appendChild(tableCountry);
            tableCountry = document.createElement('td');
            tableCountry.innerText = e.area;
            tableRow.appendChild(tableCountry);
    })
}