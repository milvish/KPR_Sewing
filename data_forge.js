
//const fs = require('fs')
const dataForge = require('data-forge')
const dataForgeFs = require('data-forge-fs')

const df = dataForgeFs.readFileSync('measurements.csv').parseCSV();
const df1 = new dataForge.DataFrame(df).setIndex("Measurements")

//const text = fs.readFileSync("Measurements1.csv", "utf-8")
//const data = dataForge.fromCSV(text)
//console.log(df.toArray())
//console.log(df.head(5).toString())
//console.log(df.toString())
console.log(df1.toString())
//console.log(df1.at("OG"))
console.log(df1.getSeries('Size_40').at('OB'))
let date_OB = 0
let date_VB = 0
let date_OT = 0
let n = 'Size_40'

function measurements(n){
    date_OB = df1.getSeries(n).at('OB')
    date_VB = df1.getSeries(n).at('VB')
    date_OT = df1.getSeries(n).at('OT')
    return date_OB, date_VB, date_OT
}
date_OB, date_VB, date_OT = measurements(n)
console.log('OB = ',date_OB,', VB = ', date_VB,', OT =', date_OT)
function choose_size(value){

    document.getElementById('id_OT').innerHTML = df1.getSeries((value).at('OT'))
    document.getElementById('id_OB').innerHTML = df1.getSeries(value).at('OB')
    document.getElementById('id_VB').innerHTML = df1.getSeries(value).at('VB')

}

choose_size(date_OB, date_VB, date_OT)