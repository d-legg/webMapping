orchardsData = {
  "type": "FeatureCollection",
  "features": [
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.6410934,46.28025735 ]
   },
   "properties": {
   "orchardName":"O'Brien Farms",
   "City":"Prosser",
   "State":"Washington",
   "Breeds":"Fuji, Gala, Granny Smith, Red Delicious, Pink Lady, Koru, Cosmic Crisp",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.617528,46.62848641 ]
   },
   "properties": {
   "orchardName":"Lopez Orchards",
   "City":"Cowiche",
   "State":"Washington",
   "Breeds":"Red Delicious, Golden Delicious, Gala, Honeycrisp, Cosmic Crisp",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7683486,47.26169588 ]
   },
   "properties": {
   "orchardName":"MM Orchards",
   "City":"Quincy",
   "State":"Washington",
   "Breeds":"Gala, KIKU, Ambrosia, Fuji, Honeycrisp, Red Delicious, Cosmic Crisp",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2168894,47.40253871 ]
   },
   "properties": {
   "orchardName":"CMI Orchards",
   "City":"Wenatchee",
   "State":"Washington",
   "Breeds":"KIKU, Kanzi, Smitten, Honeycrisp, Gala",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.2112153,47.64894824 ]
   },
   "properties": {
   "orchardName":"Orondo Orchards",
   "City":"Orondo",
   "State":"Washington",
   "Breeds":"Gala, Honeycrisp, Fuji, Envy, Sugarbee",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -120.1847896,47.91591125 ]
   },
   "properties": {
   "orchardName":"Carleton Orchards",
   "City":"Manson",
   "State":"Washington",
   "Breeds":"Golden Delicious, Granny Smith, Fuji, Honeycrisp, Pink Lady, Cosmic Crisp, Gala",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.9199993,48.0728536 ]
   },
   "properties": {
   "orchardName":"Stennes Orchards",
   "City":"Pateros",
   "State":"Washington",
   "Breeds":"Fuji, Honeycrisp, Gala, Granny Smith, Golden Delicious",
   "Address":"",
   "GMapsLink":""
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -119.7881616,48.10160403 ]
   },
   "properties": {
   "orchardName":"Schoenwald Orchards",
   "City":"Brewster",
   "State":"Washington",
   "Breeds":"Cosmic Crisp, Pink Lady, Rockit, Sugarbee, Gala, Golden Delicious, Red Delicious, Granny Smith, Honeycrisp",
   "Address":"",
   "GMapsLink":""
   }
 },
//  {
//    "type": "Feature",
//    "geometry": {
//       "type": "Point",
//       "coordinates":  { }
//    },
//    "properties": {
//    "orchardName":"Thornton's Farms",
//    "City":"Tonasket",
//    "State":"Washington",
//    "Breeds":"SugarBee, Cosmic Crisp, Honeycrisp, Fuji, Granny Smith, Pink Lady",
//    "Address":"",
//    "GMapsLink":""
//    }
//  },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -123.005628,44.011659 ]
   },
   "properties": {
   "orchardName":"ME & Moore Farm",
   "City":"Eugene",
   "State":"Oregon",
   "Breeds":["Gravenstein", "Akane", "Gala", "Honeycrisp", "Jonagold", "Empire", "Rome Beauty", "Golden Delicious", "Spitzenberg", "Braeburn", "Fuji"],
   "Address":"34137 Seavey Loop Rd, Eugene, OR 97405",
   "GMapsLink":"https://www.google.com/maps/place/ME+%26+Moore+and+Evenfall/@44.0117443,-123.0103962,15z/data=!4m6!3m5!1s0x54c0e000e73d521b:0xa1e25b4b59fb98f1!8m2!3d44.0119277!4d-123.0055971!16s%2Fg%2F1ptxq5jg_?authuser=0&entry=ttu"
   }
 }
]
}
//  –––––––––––––––––––––––––––––––––––––––– END  ––––––––––––––––––––––––––––––––––––––––

//  –––––––––––––––––––––––––––––––––––––––– Global vars, misc  ––––––––––––––––––––––––––––––––––––––––
// Colors from Paletton (light to dark)
// #9F87D6
// #785BBC
// #5D3DA8 -> DATA POINT SHADE
// #46209E
// #321479

var lightPurple = "#9F87D6"
var darkPurple = "#321479"

var panel = document.getElementById('infoPanel')
var clearButton = document.getElementById('clearPanel')
// const appleLayerName = 'appletime-doevwn'
// const mapboxSourceName = 'appleTime-doevwn'
const appleLayerName = 'appletime02-aiz0q7'
const mapboxSourceName = 'appleTime02-aiz0q7'

var currentID = 0
var currentDiv 
var pointID
const expandButton = document.getElementById('expandButton')
const orchardContainer = document.getElementById('orchardContainer')


// –––––––––––––––––––––––––––––––––––––––– END  ––––––––––––––––––––––––––––––––––––––––


// –––––––––––––––––––––––––––––––––––––––– MAP HANDLERS –––––––––––––––––––––––––––––––––––––––– 
const bounds = [
  [-130.2102074123973, 40.98336280311873], // Southwest coordinates
  [-110.43831658760334, 51.77076348214101] // Northeast coordinates
];

mapboxgl.accessToken = 'pk.eyJ1IjoiZGxlZ2c0OCIsImEiOiJjbHBpcjhucDkwMXp5MmxvdXZ4OTA3ajIzIn0.VrClHW1R9SYZLfcmTzvrLA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dlegg48/cluao316i02hz01oigktb1l0s', // Choose your map style
    center: [-120.324262, 45.468905], // Starting position [lng, lat]
    zoom: 5.5,
    minZoom: 5.5,
    projection: 'globe',
    maxBounds: bounds  
});
map.getCanvas().style.cursor = 'auto';
map.dragRotate.disable()
map.touchZoomRotate.disableRotation();
map.addControl(new mapboxgl.NavigationControl({}), 'top-left');

// –––––––––––––––––––––––––––––––––––––––– END MAP HANDLERS –––––––––––––––––––––––––––––––––––––––– 



// –––––––––––––––––––––––––––––––––––––––– clicking on land/water will clear info panel ––––––––––––––––––––––––––––––––––––––––
map.on('click', 'landcover', () => {
  if ((panel.classList.contains('clicked')) || (currentDiv!=undefined && (currentDiv.classList.contains('clicked')))) {
    clearPanel()
    noHover(currentID)
    clearOrchardContainer()
    d3.selectAll('.selectedOrchard').classed('selectedOrchard', false)

  }
})
map.on('click', 'water', () => {
  if ((panel.classList.contains('clicked')) || (currentDiv!=undefined && (currentDiv.classList.contains('clicked')))) {
    clearPanel()
    noHover(currentID)
    clearOrchardContainer()
    d3.selectAll('.selectedOrchard').classed('selectedOrchard', false)

  }
})
// –––––––––––––––––––––––––––––––––––––––– END –––––––––––––––––––––––––––––––––––––––– 


// –––––––––––––––––––––––––––––––––––––––– Load orchard container div –––––––––––––––––––––––––––––––––––––––– 
for (var orchardIDX in orchardsData.features){

  currentOrchard = orchardsData.features[orchardIDX]
  oName = currentOrchard.properties.orchardName
  oState = currentOrchard.properties.State
  oAddress = currentOrchard.properties.Address
  oGMaps = currentOrchard.properties.GMapsLink
  // console.log(orchardIDX)
  var idx = parseInt(orchardIDX)+1
  // console.log(idx)
  
  divName = "info" + (idx).toString()
  var div = document.createElement('div')
  div.id = divName
  div.classList.add('scrollInfo')
  div.setAttribute("onclick", `containerClick(${div.id})`);
  
  div.innerHTML = `
      '<h1 class=containerOrchardName><u>${oName}</u></h1>
      <p class=containerOrchardText>${oState}<br><br>
      Adsress: <a class="infoAddress" href=${oGMaps} target="_blank"> ${oAddress} </a><br>
      Phone Number:
      </p>
  `;
  
  document.getElementById('orchardGrouped').appendChild(div)
}
// –––––––––––––––––––––––––––––––––––––––– END –––––––––––––––––––––––––––––––––––––––– 


// –––––––––––––––––––––––––––––––––––––––– START MAP.LOAD ––––––––––––––––––––––––––––––––––––––––
map.on('load', () => {
  // setting paint property of circles to be dependent on feature-state (if hovered or not)
  map.setPaintProperty(appleLayerName, 'circle-color', [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    '#F7E922',
    '#5D3DA8'
  ]);

  // handles hover features
  map.on('mouseenter', appleLayerName, (e) => {
    // e is the data point and its features -> e.features for geojson object
    var id = e.features[0].id
    console.log(e)
    map.getCanvas().style.cursor = 'pointer';

    if ( !panel.classList.contains('clicked')) {
      console.log('at hover cond')
      // set feature state of circle to hovered
      currentID = id
      yesHover(currentID)
      setInfoPanel(e)
    }
  })

  // handles leaving hover
  map.on('mouseleave', appleLayerName, (e) => {
    // e is the data point and its features -> e.features for geojson object    
    map.getCanvas().style.cursor = 'auto';

    if (!panel.classList.contains('clicked')) {
      noHover(currentID)    
      panel.innerHTML = ''
    }
  })

}); 
// –––––––––––––––––––––––––––––––––––––––– END MAP.LOAD ––––––––––––––––––––––––––––––––––––––––
  

// –––––––––––––––––––––––––––––––––––––––– Clicking a point ––––––––––––––––––––––––––––––––––––––––
map.on('click', appleLayerName, (e) => {
  // CLEAR OLD HIGHLIGHT FIRST
  noHover(currentID)
  var id = e.features[0].id
  panel.classList.add('clicked')
  clearButton.style.display='block'
  
  setInfoPanel(e)
  currentID=id
  yesHover(currentID)
})
// –––––––––––––––––––––––––––––––––––––––– END ––––––––––––––––––––––––––––––––––––––––









// ––––––––––––––––––––––––––––––––––––––––  Function Time –––––––––––––––––––––––––––––––––––––––– 
// sets TRUE hover feature state of circle
function yesHover(pointID){
  map.setFeatureState(
    { source: 'composite', sourceLayer: mapboxSourceName, id: pointID},
    { hover: true }
  );
}
// sets FALSE hover feature state of cicrle
function noHover(pointID){
  map.setFeatureState(
    { source: 'composite', sourceLayer: mapboxSourceName, id: pointID},
    { hover: false }
  );
}

// sets the information in the top right info panel.
function setInfoPanel(point, idx=0){
  const city = point.features[idx].properties.City;
  const state = point.features[idx].properties.State;
  const orchardName = point.features[idx].properties.orchardName;
  const orchardAddress = point.features[idx].properties.Address
  const orchardGMaps = point.features[idx].properties.GMapsLink
  panel.innerHTML = `
    <h1 class=panelName>${orchardName}</h1>
    <p class=panelText>${city}, ${state}<br><br>
    Address: <a class="infoAddress" href=${orchardGMaps} target="_blank">${orchardAddress}</a><br>
    Phone Number:
    </p>
  `;

}

// clears the information in the top right info panel, and the highlighted circle
function clearPanel(){
  noHover(currentID)
  panel.classList.remove('clicked')
  panel.innerHTML=""
  clearButton.style.display='none'
  if(currentDiv){
    currentDiv.classList.remove('clicked')
    currentDiv.style.backgroundColor = "#785BBC"
  }
}

// clears panel and then highlights the circle that the sidebar selection is
function containerClick(div){
  console.log('containerClick()')
  // clear highlight of previous click
  if(!(currentDiv==undefined)){
    // console.log('here')
    if(currentDiv.style.backgroundColor=="rgb(159, 135, 214)"){
      d3.selectAll('.selectedOrchard').classed('selectedOrchard', false)
      // currentDiv.style.backgroundColor = "#785BBC"
      currentDiv.classList.remove('clicked')
      // console.log(pointID)
      noHover(pointID)
      clearPanel()
    }
  }
  if(panel.classList.contains('clicked')){
    // console.log('NEW STUFF')
    clearPanel()
  }

  currentDiv = div
  pointID = div.id.slice(4,)
  currentID=pointID
  currentDiv.classList.add('clicked')

  // if panel does not have clicked class onto it
  if(!panel.classList.contains('clicked')){
    console.log(pointID-1)
    panel.classList.add('clicked')
    clearButton.style.display='block'
    currentDiv.style.backgroundColor = lightPurple

    yesHover(pointID)
    setInfoPanel(orchardsData, (pointID-1))
  }

  d3.select(div).classed('selectedOrchard', true)

}

// on click of land, water, or exit button clear the side bar highlight and panel
function clearOrchardContainer(){
  console.log('clearOrchardContainer')
  noHover(currentID)
  panel.classList.remove('clicked')
  if(currentDiv){
    currentDiv.style.backgroundColor = "#785BBC"
  }
  d3.selectAll('.selectedOrchard').classed('selectedOrchard', false)

}

function changeOrchardContainer(){

  // this expands the div
  if(expandButton.classList.contains('fa-angle-double-down')){
    // console.log('oh yeah')
    expandButton.classList.remove('fa-angle-double-down')
    expandButton.classList.add('fa-angle-double-up')
    orchardContainer.style.height = '550px'
  }

  // this will shrink the div
  else if(expandButton.classList.contains('fa-angle-double-up')){
    expandButton.classList.remove('fa-angle-double-up')
    expandButton.classList.add('fa-angle-double-down')
    orchardContainer.style.height = '40px'

  }
}

// handles reset button functions
function resetButton(){
  clearOrchardContainer()
  clearPanel()
  resetFilters()
  d3.select('#washingtonButton').classed('lightBackground', false)
  d3.select('#oregonButton').classed('lightBackground', false)
  d3.select('#washingtonButton').style('border-style', 'outset')
  d3.select('#oregonButton').style('border-style', 'outset')
  document.getElementById('searchInput').value = null;
}

//handles oregon and washington buttons
function oregonFilter(){
  console.log('oregonFilter()')
  resetButton()
  matchFilter = 
  [
    'all',
    ['==', 'State', 'Oregon']
  ]
  map.setFilter(appleLayerName, matchFilter)
  d3.select('#washingtonButton').classed('lightBackground', false)
  d3.select('#oregonButton').classed('lightBackground', true)
  d3.select('#oregonButton').style('border-style', 'inset')
  d3.select('#washingtonButton').style('border-style', 'outset')


}

function washingtonFilter(){
  console.log('washingtonFilter()')
  resetButton()
  matchFilter = 
  [
    'all',
    ['==', 'State', 'Washington']
  ]
  map.setFilter(appleLayerName, matchFilter)
  d3.select('#washingtonButton').classed('lightBackground', true)
  d3.select('#oregonButton').classed('lightBackground', false)
  d3.select('#washingtonButton').style('border-style', 'inset')
  d3.select('#oregonButton').style('border-style', 'outset')
}

function resetFilters(){
  map.setFilter(appleLayerName, null)
}