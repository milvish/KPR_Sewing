const fs = require("fs");
const { parse } = require("csv-parse");

var measurements = [];
let m;
fs.createReadStream("./measurements.csv")
    .pipe(
        parse({
            delimiter: ";",
            columns: true,
            ltrim: true,
        })
    )
    .on("data", function (row) {
        // 👇 push the object row into the array
        measurements.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        // 👇 log the result array
        //console.log("parsed csv data:");
        //console.log(measurements);
    });

const additions = [];

fs.createReadStream("./additions.csv")
    .pipe(
        parse({
            delimiter: ";",
            columns: true,
            ltrim: true,
        })
    )
    .on("data", function (row) {
        // 👇 push the object row into the array
        additions.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        // 👇 log the result array
        //console.log("parsed csv data:");
        //console.log(additions);
    });


console.log(measurements)