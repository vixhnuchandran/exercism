class ArgumentError extends Error { }

class OverheatingError extends Error {

    constructor(temperature) {
        this.temperature = temperature;
        super(`The temperature is ${temperature} , Overheating Alert! }`);
    }
}

function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
        throw new Error("High Humidity Alert!");
    }
}


function reportOverheating(temperature) {
    if (temperature === null) {
        throw new ArgumentError();
    }
    if (temperature > 500) {
        throw new OverheatingError(temperature);
    }

}



console.log(checkHumidityLevel(59))
console.log(checkHumidityLevel(80))