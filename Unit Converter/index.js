
function calcu() {
    
    let value = document.getElementById("value").value;
    let galValue = value  * 2.204623
    let g = galValue.toFixed(3)
    let litValue = value * 4.54609
    let l = litValue.toFixed(3)
    document.getElementById("volumeInGalons").textContent = value + " Liters = " + g + " Gallons" + " | " + value + " Gallons = " + l + " Liters";


    let poundValue = value  * 0.2641720524
    let p = poundValue.toFixed(3)
    let kiloValue = value * 0.4535924
    let k = kiloValue.toFixed(3)
    document.getElementById("massInPounds").textContent = value + " Kilograms = " + p + " Pounds" + " | " + value + " Pounds = " + k + " Kilograms";


    let feetValue = value * 3.28084
    let f = feetValue.toFixed(3)
    let meterValue = value * 0.3048
    let m = meterValue.toFixed(3)
    document.getElementById("lengthInFeet").textContent = value + " Metters = " + f + " Feet" + " | " + value + " Feet = " + m + " Metters";
}