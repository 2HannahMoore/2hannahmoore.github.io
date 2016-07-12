$(function(){

var latinCountries = ['Mexico', 'Spain', 'Cuba','Mexico' ,'Argentina','Bolivia','Brazil',
'Chile','Colombia','Costa Rica','Cuba','Dominican Republic','Ecuador',
'Equatorial Guinea','El Salvador','Guatemala','Honduras','Nicaragua','Panama',
 'Paraguay','Player','Puerto Rico','Spain','Uruguay','Venezuela', 'Peru'];

var englishCountries = ['United States', 'Bahamas','Canada', 'United Kingdom', 'Guyana', 'Falkland Islands', 'Zambia', 'Zimbabwe', 'Papua New Guinea', 'Solomon Islands'];

var frenchCountries = ['Belgium','Gabon', 'France', 'Benin', 'Burkina', 'Faso', 'Burundi', 'Cameroon', 
'Central', 'Chad', 'Comoros', "Cote d'Ivoire",'Djibouti', 'Guinea','Haiti', 'French Guiana', 'Mali', 'Rwanda', 'Togo', 'Tunisia', 'New Caledonia', 'Vanuatu'];

var portuguese = ['Mozambige', 'Portugal']

var china = ['China']

var russia = ['Russia']

var bengali = ['Bangladesh']

var mongolia = ['Mongolia']

var finland = ['Finland']

var sweden = ['Sweden']

var norway = ['Norway']

var kazakhstan = ['Kazakhstan']

var gaelic = ['Ireland']

var korean = ['North Korea', 'South Korea']

var japanese = ['Japan']

var cambodia = ['Cambodia']

var kyrgyzstan = ['Kyrgyzstan']

var uzbekistan = ['Uzbekistan']

var dutch = ['Suriname', 'Netherlands', 'Flanders', 'Indonesia', 'Iceland']

var australia = ['Australia']

var malay = ['Malaysia']

var polish = ['Poland']

var maori = ['New Zealand']

var slovak = ['Slovakia']

var vietnamese = ['Vietnam']

var filipino = ['Philippines']

var thai = ['Thailand']

var greenland = ['Greenland']

var dari = ['Afghanistan']

var laos = ["Lao People's Democratic Republic"]

var angola = ['Angola']

var botswana = ['Botswana']

var arabic = ['Egypt', 'Libya', 'Morocco', 'Algeria', 'Tajikistan', 'Algeria', 'Bahrain', 'Chad', 'Eritrea', 'Iraq', 'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Mauritania', 'Oman', 'Qatar', 'Saudi Arabia', 'Syria', 'United Arab Emirates', 'Yemen', 'Palestine', 'Western Sahara']

var ethiopia = ['Ethiopia']

var fijian = ['Fiji']

var greek = ['Greece']

var ghana = ['Ghana']

var sudan = ['Sudan']

var madagascar = ['Madagascar']

var italian = ['Italy']

var creole = ['Jamaica']

var nordic = ['Denmark', 'Finland', 'Svalbard and Jan Mayen', 'Norway']

var urdu = ['Pakistan']

var hungarian = ['Hungary']

var romanian = ['Romania']

var german = ['Germany', 'Austria', 'Switzerland', 'Liechtenstein', 'Luxemburg', 'Belgium']

var swahili = ['Kenya', 'Tanzania', 'Zanzibar', 'Uganda', 'Democratic Republic of Congo', 'Zambia', 'Mozambique', 'Malawi', 'Rwanda', 'Burundi', 'Somalia', 'Comoro Islands']

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

//below function will name the country that has been clicked.
map.addListener("clickMapObject", function (event) {
  console.log(event.mapObject.title)

    document.getElementById("info").innerHTML = 'Country:' + event.mapObject.id + ' (' + event.mapObject.title + ')';


// if country selected is in the array then index will not be -1 (i.e. country was found)
if (englishCountries.indexOf(event.mapObject.title) !== -1){
  console.log ('Hello!')
  $('#greeting').html('');
  $('#greeting').html('Hello!');
} else {
  console.log('not an english country');
}

if (latinCountries.indexOf(event.mapObject.title) !== -1) {
 console.log('Hola!');
  $('#greeting').html('');
  $('#greeting').html('Hola!');
} else {
  console.log('not a latin country');
}

if (nordic.indexOf(event.mapObject.title) !== -1) {
 console.log('Χαίρετε');
  $('#greeting').html('');
  $('#greeting').html('Χαίρετε');
} else {
  console.log('not greek');
}
if (greek.indexOf(event.mapObject.title) !== -1) {
 console.log('Hallo!');
  $('#greeting').html('');
  $('#greeting').html('Hallo!');
} else {
  console.log('not nordic');
}
if (polish.indexOf(event.mapObject.title) !== -1) {
 console.log('cześć');
  $('#greeting').html('');
  $('#greeting').html('cześć');
} else {
  console.log('not polish');
}

if (filipino.indexOf(event.mapObject.title) !== -1) {
 console.log('Kamusta!');
  $('#greeting').html('');
  $('#greeting').html('Kamusta!');
} else {
  console.log('not filipino');
}
if (creole.indexOf(event.mapObject.title) !== -1) {
 console.log('alo!');
  $('#greeting').html('');
  $('#greeting').html('Alo!');
} else {
  console.log('not creole');
}
if (hungarian.indexOf(event.mapObject.title) !== -1) {
 console.log('Helló');
  $('#greeting').html('');
  $('#greeting').html('Helló!');
} else {
  console.log('not hungarian');
}

if (frenchCountries.indexOf(event.mapObject.title) !== -1){
  console.log ('Bonjour')
  $('#greeting').html('');
  $('#greeting').html('Bonjour!');
} else{
  console.log('not a french country');
}

if (bengali.indexOf(event.mapObject.title) !== -1){
  console.log ('হ্যালো')
  $('#greeting').html('');
  $('#greeting').html('হ্যালো');
} else{
  console.log('not bengali');
}
if (arabic.indexOf(event.mapObject.title) !== -1){
  console.log ('Salaam Aleikum')
  $('#greeting').html('');
  $('#greeting').html('Salaam Aleikum');
} else{
  console.log('Not arabic');
}

if (slovak.indexOf(event.mapObject.title) !== -1){
  console.log ('Ahoj')
  $('#greeting').html('');
  $('#greeting').html('Ahoj!');
} else{
  console.log('Not slovak');
}

if (romanian.indexOf(event.mapObject.title) !== -1){
  console.log ('buna')
  $('#greeting').html('');
  $('#greeting').html('Buna!');
} else{
  console.log('Not romanian');
}

if (gaelic.indexOf(event.mapObject.title) !== -1){
  console.log ('Dia dhuit')
  $('#greeting').html('');
  $('#greeting').html('Dia dhuit!');
} else{
  console.log('Not gaelic');
}

if (fijian.indexOf(event.mapObject.title) !== -1){
  console.log ('bula!')
  $('#greeting').html('');
  $('#greeting').html('Bula!');
} else{
  console.log('Not fijian');
}
if (maori.indexOf(event.mapObject.title) !== -1){
  console.log ('Kia ora')
  $('#greeting').html('');
  $('#greeting').html('Kia ora!');
} else{
  console.log('Not maori');
}

if (ethiopia.indexOf(event.mapObject.title) !== -1){
  console.log ('Teanastellen')
  $('#greeting').html('');
  $('#greeting').html('Teanastellen');
} else{
  console.log('Not ethiopia');
}
if (urdu.indexOf(event.mapObject.title) !== -1){
  console.log ('ہیلو')
  $('#greeting').html('');
  $('#greeting').html('ہیلو');
} else{
  console.log('Not urdu');
}
if (dari.indexOf(event.mapObject.title) !== -1){
  console.log (' سلام')
  $('#greeting').html('');
  $('#greeting').html(' سلام');
} else{
  console.log('Not dari');
}


if (italian.indexOf(event.mapObject.title) !== -1){
  console.log ('Ciao')
  $('#greeting').html('');
  $('#greeting').html('Ciao!');
} else{
  console.log('Not italian');
}

if (angola.indexOf(event.mapObject.title) !== -1){
  console.log ('Bom Dia')
  $('#greeting').html('');
  $('#greeting').html('Bom Dia!');
} else{
  console.log('Not angola');
}

if (german.indexOf(event.mapObject.title) !== -1){
  console.log ('Hallo')
  $('#greeting').html('');
  $('#greeting').html('Hallo!');
} else{
  console.log('Not german');
}

if (swahili.indexOf(event.mapObject.title) !== -1){
  console.log ('Habari')
  $('#greeting').html('');
  $('#greeting').html('Habari!');
} else{
  console.log('Does not speak Swahili');
}
if (ghana.indexOf(event.mapObject.title) !== -1){
  console.log ('Ete-sen')
  $('#greeting').html('');
  $('#greeting').html('Ete-sen!');
} else{
  console.log('Not ghana');
}

if (botswana.indexOf(event.mapObject.title) !== -1){
  console.log ('Dumela mma')
  $('#greeting').html('');
  $('#greeting').html('Dumela mma!');
} else{
  console.log('Not Botswana');
}
if (china.indexOf(event.mapObject.title) !== -1){
  console.log ('nĭ hăo!')
  $('#greeting').html('');
  $('#greeting').html('nĭ hăo!');
} else{
  console.log('not China');
 } 

 if (russia.indexOf(event.mapObject.title) !== -1){
  console.log ('Здравствуйте!')
  $('#greeting').html('');
  $('#greeting').html('Здравствуйте!');
} else{
  console.log('not russia');
 } 

 if (portuguese.indexOf(event.mapObject.title) !== -1){
  console.log ('Bom Dia')
  $('#greeting').html('');
  $('#greeting').html('Bom Dia!');
} else{
  console.log('Not portuguese');
}

  if (mongolia.indexOf(event.mapObject.title) !== -1){
  console.log ('Сайн уу')
  $('#greeting').html('');
  $('#greeting').html('Сайн уу');
} else{
  console.log('not mongolia');
 } 

if (madagascar.indexOf(event.mapObject.title) !== -1){
  console.log ('Salama')
  $('#greeting').html('');
  $('#greeting').html('Salama!');
} else{
  console.log('Not madagascar');
}
  if (finland.indexOf(event.mapObject.title) !== -1){
  console.log ('Hei')
  $('#greeting').html('');
  $('#greeting').html('Hei');
} else{
  console.log('not finland');
 } 
if (sweden.indexOf(event.mapObject.title) !== -1){
  console.log ('Hallå')
  $('#greeting').html('');
  $('#greeting').html('Hallå');
} else{
  console.log('not Sweden');
 } 

if (norway.indexOf(event.mapObject.title) !== -1){
  console.log ('Hallo')
  $('#greeting').html('');
  $('#greeting').html('Hallo');
} else{
  console.log('not norway');
 } 


if (kazakhstan.indexOf(event.mapObject.title) !== -1){
  console.log ('Сәлем! ')
  $('#greeting').html('');
  $('#greeting').html('Сәлем! ');
} else{
  console.log('not kazakhstan');
 } 

if (sudan.indexOf(event.mapObject.title) !== -1){
  console.log ('mar ha ban')
  $('#greeting').html('');
  $('#greeting').html('Mar ha ban!');
} else{
  console.log('not sudan');
}


if (korean.indexOf(event.mapObject.title) !== -1){
  console.log ('여보세요')
  $('#greeting').html('');
  $('#greeting').html('여보세요');
} else{
  console.log('not a korean country');
 } 

if (japanese.indexOf(event.mapObject.title) !== -1){
  console.log ('こんにちは')
  $('#greeting').html('');
  $('#greeting').html('こんにちは');
} else{
  console.log('not japan');
 }  

 if (kyrgyzstan.indexOf(event.mapObject.title) !== -1){
  console.log ('Salam')
  $('#greeting').html('');
  $('#greeting').html('Salam!');
} else{
  console.log('not Kyrgyzstan');
 }  

  if (greenland.indexOf(event.mapObject.title) !== -1){
  console.log ('Aluu')
  $('#greeting').html('');
  $('#greeting').html('Aluu!');
} else{
  console.log('not greenland');
 }  

  if (uzbekistan.indexOf(event.mapObject.title) !== -1){
  console.log ('Salom')
  $('#greeting').html('');
  $('#greeting').html('Salom!');
} else{
  console.log('not uzbekistan');
 }  


  if (dutch.indexOf(event.mapObject.title) !== -1){
  console.log ('Hallo!')
  $('#greeting').html('');
  $('#greeting').html('Hallo!');
} else{
  console.log('not dutch');
 }  

   if (australia.indexOf(event.mapObject.title) !== -1){
  console.log ("G'day!")
  $('#greeting').html('');
  $('#greeting').html("G'Day!");
} else{
  console.log('not australian');
 }  

    if (malay.indexOf(event.mapObject.title) !== -1){
  console.log ("Selamat datang!")
  $('#greeting').html('');
  $('#greeting').html("Selamat datang!");
} else{
  console.log('not Malaysia');
 }  

    if (vietnamese.indexOf(event.mapObject.title) !== -1){
  console.log ("chào bạn")
  $('#greeting').html('');
  $('#greeting').html("chào bạn");
} else{
  console.log('not vietnamese');
 }  
  if (cambodia.indexOf(event.mapObject.title) !== -1){
  console.log ("ជំរាបសួរ")
  $('#greeting').html('');
  $('#greeting').html("ជំរាបសួរ");
} else{
  console.log('not cambodia');
 }  
  if (thai.indexOf(event.mapObject.title) !== -1){
  console.log ("สวัสดี")
  $('#greeting').html('');
  $('#greeting').html("สวัสดี");
} else{
  console.log('not thai');
}
    if (laos.indexOf(event.mapObject.title) !== -1){
  console.log ("ສະບາຍດີ")
  $('#greeting').html('');
  $('#greeting').html("ສະບາຍດີ");
} else{
  console.log('not laos');

 }  
})
});