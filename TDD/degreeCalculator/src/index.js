
//calculate celsius
function toCelsius(value, fromUnit) {
    if (fromUnit === "C") return value;
    if (fromUnit === "F") return (value - 32) * (5 / 9);
    if (fromUnit === "K") return value - 273.15;
    throw new Error("Invalid 'from' unit. Use C, F, or K.");
}
//convert celsius to fahrenheit and kelvin
function fromCelsius(celsius, toUnit) {
    if (toUnit === "C") return celsius;
    if (toUnit === "F") return celsius * (9 / 5) + 32;
    if (toUnit === "K") return celsius + 273.15;
    throw new Error("Invalid 'to' unit. Use C, F, or K.");
}
//function to receive value and convert to temperature
function convertTemperature(value, fromUnit, toUnit) {
    if (typeof value !== "number" || isNaN(value)) {
        throw new Error("Value must be a valid number.");
    }
    const celsius = toCelsius(value, fromUnit);
    return fromCelsius(celsius, toUnit);
}

module.exports = {
    toCelsius,
    fromCelsius,
    convertTemperature
};