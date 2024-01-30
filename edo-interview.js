// You are working with a team of meteorologists studying temperatures in
// a city. They have asked you to build a system that will track temperatures and provide metrics.

// Your system should provide a function 'log(temperature)' that they will call once per second to record measured temperatures, as well as functions to query their data for useful metrics. Initially, they would like to be able to know:

// 1) the average of temperatures from the last 24 hours, and
// 2) the number of samples from the last 24 hours grouped by 10 degree range i.e. how many samples were in 20-30, 30-40,40-50, etc.

// As an example, if the meteorologists wanted to know the maximum temperature recorded for all time, your solution might look like this:

// Let max = NULL

// Log(temperature):
//   IF max IS NULL
//     Set max = temperature
//   ELSE IF temperature > max
//     Set max = temperature

// GetMaxAllTime:
//   Return max

class TemperatureTracker {
    constructor() {
        this.temperatureLog = [];
    }

    log(temperature) {
        const currentTime = Date.now();
        this.temperatureLog.push({ temperature, timestamp: currentTime });
        this.cleanup();
    }

    cleanup() {
        const currentTime = Date.now();
        this.temperatureLog = this.temperatureLog.filter(
            (entry) => currentTime - entry.timestamp <= 24 * 60 * 60 * 1000
        );
    }

    getAverageLast24Hours() {
        let sum = 0;
        let count = 0;
        const currentTime = Date.now();
        for (const entry of this.temperatureLog) {
            if (currentTime - entry.timestamp <= 24 * 60 * 60 * 1000) {
                sum += entry.temperature;
                count++;
            }
        }
        return count === 0 ? null : sum / count;
    }

    getTemperatureDistribution() {
        const distribution = {};
        const currentTime = Date.now();
        for (const entry of this.temperatureLog) {
            if (currentTime - entry.timestamp <= 24 * 60 * 60 * 1000) {
                const bucket = Math.floor(entry.temperature / 10) * 10;
                distribution[bucket] = (distribution[bucket] || 0) + 1;
            }
        }
        return distribution;
    }
}

// Example usage
const tracker = new TemperatureTracker();
tracker.log(23);
tracker.log(30);
tracker.log(35);
console.log(tracker.getAverageLast24Hours());
console.log(tracker.getTemperatureDistribution());
