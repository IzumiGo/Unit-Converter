const lengthP = document.getElementById("length")
const volumeP = document.getElementById("volume")
const massP = document.getElementById("mass")
const convBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convBtn.addEventListener("click", function() {
    const valeur = Number(inputEl.value)

    const metersToFeet = (valeur * 3.28084).toFixed(3)
    const feetToMeters = (valeur / 3.28084).toFixed(3)

    const litersToGallons = (valeur * 0.2642).toFixed(3)
    const gallonsToLiters = (valeur / 0.2642).toFixed(3)

    const kilosToPounds = (valeur * 2.20462).toFixed(3)
    const poundsToKilos = (valeur / 2.20462).toFixed(3)

    lengthP.textContent = `${valeur} meters = ${metersToFeet} feet | ${valeur} feet = ${feetToMeters} meters`
    volumeP.textContent = `${valeur} liters = ${litersToGallons} gallons | ${valeur} gallons = ${gallonsToLiters} liters`
    massP.textContent = `${valeur} kilos = ${kilosToPounds} pounds | ${valeur} pounds = ${poundsToKilos} kilos`
})
