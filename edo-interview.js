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

const dayTemps = [];
let total = 0;

const log = (temperature) => {
    dayTemps.push(temperature);
    total += temperature;

    if (dayTemps.length > 86400) {
        total -= dayTemps.shift();
    }
};

const avg = (dayTemps) => {
    // let output = dayTemps.reduce((acc, curr) => {
    //   let total = acc + curr
    //   let count = 0

    //   count++

    //   return total / count

    // }, 0)

    // count is arr.length
    //

    // let total = 0
    // let count = 0

    // for (let i = 0; i < dayTemps.length; i++) {
    //   total += dayTemps[i]
    //   count++
    // }

    // return total / count

    return total / dayTemps.length;
};

// ... 24hr
// log(100)

const range = (dayTemps) => {
    // 22 -> 20-30
    // 24 -> 20-30
    // 30 -> 30-40
    // 55 -> 50-60
    // -1 -> -10-0

    let output = dayTemps.reduce((acc, curr) => {
        let convert = Math.floor(curr / 10);

        if (acc[convert]) {
            acc[convert * 10]++;
        } else {
            acc[convert * 10] = 1;
        }

        return acc;
    }, {});

    return output;
};

// log , avg
log(1); // total -> 1
log(0); // total -> 1
log(1); // total -> 2
log(-1); // total -> 1
console.log(avg(dayTemps)); // -> 0.25
console.log(range(dayTemps));

for (var i = 0; i < 86400; i++) {
    log(10);
}

// total -> 864000
// log(11) -> 864001
console.log(avg(dayTemps)); // -> 10
console.log(range(dayTemps));
