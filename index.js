/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 foot = 0.305 meter
1 gallon = 4.546 liter
1 pound = 0.456 kilogram
*/

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.305;
const literToGallon = 0.264;
const gallonToLiter = 4.546;
const kilogramToPound = 2.204;
const poundToKilogram = 0.456;

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    lengthEl.textContent = `
        ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters
    `;
    volumeEl.textContent = `
        ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters
    `;
    massEl.textContent = `
        ${baseValue} kilograms = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(3)} kilograms
    `;
})