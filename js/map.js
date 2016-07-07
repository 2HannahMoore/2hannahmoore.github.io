var latinCountries = ['Mexico', 'Spain', 'Cuba','Mexico' ,'Argentina','Bolivia','Brazil',
'Chile','Colombia','Costa Rica','Cuba','Dominican Republic','Ecuador',
'Equatorial Guinea','El Salvador','Guatemala','Hondorus','Nicaragua','Panama',
 'Paraguay','Player','Puerto Rico','Spain','Uruguay','Venezuela', 'Peru'];

var englishCountries = ['United States', 'Canada', 'United Kingdom'];

var frenchCountries = ['France', 'Belgium', 'Benin', 'Burkina', 'Faso', 'Burundi', 'Cameroon', 'Canada', 
'Central', 'Chad', 'Comoros', 'Djibouti', 'Guinea', 'Haiti', 'Madagascar'];

var map = AmCharts.makeChart("chartdiv", {

  "type": "map",
    "theme": "none",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": false,
    //"selectedColor": "#CC0000",
    "selectedColor": "#159594",
    "selectable": true
  },
  "smallMap": {}
});

map.addListener("clickMapObject", function (event) {
  console.log(event.mapObject.title)

    document.getElementById("info").innerHTML = 'Clicked ID: ' + event.mapObject.id + ' (' + event.mapObject.title + ')';


// if country selected is in the array then index will not be -1 (i.e. country was found)
if (englishCountries.indexOf(event.mapObject.title) !== -1){
  console.log ('Hello!')
} else {
  console.log('not an english country');
}

if (latinCountries.indexOf(event.mapObject.title) !== -1) {
 console.log('Hola!');
} else {
  console.log('not a latin country');
}

if (frenchCountries.indexOf(event.mapObject.title) !== -1){
  console.log ('Bonjour')
} else{
  console.log('not a french country');
}

});