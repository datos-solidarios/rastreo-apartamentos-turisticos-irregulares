# Rastreo de apartamentos turísticos ilegales
## Contexto
La explosión de apartamentos turísticos, tipo Airbnb, que están experimentando muchas ciudades españolas, ha hecho saltar las alarmas de algunas asociaciones vecinales, que temen los efectos negativos del turismo descontrolado para los inquilinos tradicionales. Aunque muchos municipios han regulado la oferta de apartamentos turísticos, las asociaciones denuncian que las irregularidades son frecuentes y que la administración no actúa con la contundencia necesaria. Ante esta situación, los datos se convierten en  una herramienta clave para visibilizar el problema y sostener las denuncias ante las autoridades.
## Objetivos
Crear una aplicación para descargar y geolocalizar el [listado oficial](http://comunitatvalenciana.com/viaje/alojamiento/viviendas-turisticas) de apartamentos turísticos de la Comunidad Valenciana. Además, permite identificar apartamentos situados en pisos 2º y superiores, ya que municipios como Valencia los prohíben expresamente.
## Cómo usarlo
### Node geolocation
 - `npm install` en el directorio de node-geolocation
 - Crea una developer account en www.here.com, coloca tu api key en un .env file en el directorio node-geolocation
 - Node app.js coje dos parametros --start --end, recomendamos usar los parametros para correr el programa por grupos de datos. Eg:
  - node app.js --start 0 --end 500 Generaria un archivo con los primeros 500 datos geolocalizados. Despues podriamos ejecutar --start 500 --end 1000. Y asi sucesivamente hasta procesar toda la informacion.
 - mergeViviendas.js junta los archivos extraidos anteriormente en un solo archivo, require modificar el codigo especificando los archivos a juntar.

### Datos
* [viviendas_turisticas_raw.csv](https://github.com/datos-solidarios/rastreo-apartamentos-turisticos-irregulares/blob/master/datos/viviendas_turisticas_raw.csv): datos en bruto, extraídos directamente del [listado oficial](http://comunitatvalenciana.com/viaje/alojamiento/viviendas-turisticas).
* [viviendas_valencia_cleansed.xlsx](https://github.com/datos-solidarios/rastreo-apartamentos-turisticos-irregulares/blob/master/datos/viviendas_valencia_cleansed.xlsx): apartamentos de la ciudad de Valencia, geolocalizados y con la dirección estandarizada.
### Código
* [Web-scraping](https://github.com/datos-solidarios/rastreo-apartamentos-turisticos-irregulares/tree/master/codigo/web-scrapping): Jupyter Notebook para descargar los datos del listado oficial.
* [Geolocalización](https://github.com/datos-solidarios/rastreo-apartamentos-turisticos-irregulares/tree/master/codigo/geolocalizacion): código Node.js para geolocalizar los apartamentos.
### Información del proyecto
Puedes conocer más detalles del proyecto en la [web oficial](https://sites.google.com/view/datos-solidarios/proyectos/rastreo-de-apartamentos-tur%C3%ADsticos-irregulares?authuser=0).
