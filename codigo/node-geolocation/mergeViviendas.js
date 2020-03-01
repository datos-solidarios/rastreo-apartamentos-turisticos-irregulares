const fs = require('fs')
const viviendas0 = require('./viviendas/viviendas_turisticas0.json')
const viviendas1000 = require('./viviendas/viviendas_turisticas1000.json')
const viviendas2000 = require('./viviendas/viviendas_turisticas2000.json')
const viviendas3000 = require('./viviendas/viviendas_turisticas3000.json')

//Write here the file names of the viviendas files you want to concat
let viviendas = viviendas0.concat(viviendas1000,viviendas2000,viviendas3000)
viviendas.forEach(vivienda => {
  vivienda.Latitude = vivienda["displayCoordenates"] ? vivienda["displayCoordenates"]["Latitude"] : "-"
  vivienda.Longitude = vivienda["displayCoordenates"] ? vivienda["displayCoordenates"]["Longitude"] : "-"
})
console.log(viviendas.length)
fs.writeFileSync(`./viviendas/viviendas_final.json`, JSON.stringify(viviendas, null, 4))
