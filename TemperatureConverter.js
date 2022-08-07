// celcius to fahrenheit conversion

    function toFahrenheit(celcius) {
        const fahrenheit = (celcius * 9/5) + 32;
        return fahrenheit;
    }

    const celciusTemperature = 32;
    console.log(toFahrenheit(celciusTemperature));


// fahrenheit to celcius conversion

    function toCelcius(fahrenheit) {
        const celcius = (fahrenheit - 32) * 5/9;
        return celcius;
    }

    const fahrenheitTemperature = 200;
    console.log(toCelcius(fahrenheitTemperature));
