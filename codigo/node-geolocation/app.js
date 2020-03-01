
require('dotenv').config()
const csv = require('csvtojson')
const fs = require('fs')
const geolocate = require('./geolocate.js')
const argv = require('yargs').argv

const csvFilePath ='./viviendas_turisticas.csv'
const googleApiKey = process.env.GOOGLE_API_KEY

let start = argv.start
let end = argv.end

//Valencian turistic apartments, to geolocate with google.
csv()
.fromFile(csvFilePath)
.then(async (jsonObj)=>{
    jsonObj = jsonObj.filter(vivienda => {
      return vivienda.municipio == "València"
    })
    //We pack our progress in batches for easily readability, debugging and for avoiding majors errors.
    end = end < jsonObj.length ? end : jsonObj.length
    for(var i = start; i < end; i++){
      jsonObj[i].piso = jsonObj[i].direccion.match(/(p|P)iso\s[0-9]/gm) ? jsonObj[i].direccion.match(/(p|P)iso\s[0-9]/gm)[0] : '-'
      jsonObj[i].address = jsonObj[i].direccion + ',' + jsonObj[i].municipio + ',' + jsonObj[i].provincia + ', España'
      let geolocationInfo = await geolocate(jsonObj[i].address)
      if (geolocationInfo) {
        await Object.assign(jsonObj[i], geolocationInfo)
        await sleep(500)
      } else {
        console.log(`Error in ${jsonObj[i].address}`)
        await sleep(5000)
      }
    }
    console.log(`END EQUAL TO ${end}`)
    jsonObj = jsonObj.slice(start, end + 1)
    fs.writeFileSync(`viviendas_turisticas${start}.json`, JSON.stringify(jsonObj, null, 4))
})


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
