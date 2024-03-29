document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);

    var Stadia_StamenWatercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});

// Define greenIcon
var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// Create a MarkerClusterGroup
let markers = L.markerClusterGroup();

// Create markers and add them to the cluster group
leaf = L.marker([1.2845886, 103.8646566], { icon: greenIcon }).bindPopup(`<b>Welcome to Gardens by the Bay</b><br><img src="./Four square/1. Garden by the bay.jpg" style="width:300px; height:auto;">${address.gardensByTheBay}`);
markers.addLayer(leaf );

leaf  = L.marker([1.3157133526629585, 103.81606665227358], { icon: greenIcon }).bindPopup(`<b>Welcome to National Orchid Garden</b><br><img src="./Four square/3.National Orchid Garden.jpg" style="width:300px; height:auto;">${address.nationalorchidgarden}`);
markers.addLayer(leaf );

leaf  = L.marker([1.3117707874872062, 103.8147790725891], { icon: greenIcon }).bindPopup(`<b>Welcome to National Orchid Garden</b><br><img src="./Four square/3.National Orchid Garden.jpg" style="width:300px; height:auto;">${address.nationalorchidgarden}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2839574616274565, 103.86580837638425], { icon: greenIcon }).bindPopup(`<b>Welcome to Cloud Forest</b><br><img src="./Four square/4.cloud forest.jpg" style="width:300px; height:auto;">${address.cloudforest}`);
markers.addLayer(leaf );

leaf  = L.marker([1.4043617283957168, 103.7924327069517], { icon: greenIcon }).bindPopup(`<b>Welcome to Singapore Zoo</b><br><img src="./Four square/5.Singapore Zoo.jpg" style="width:300px; height:auto;">${address.singaporezoo}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2882675480352717, 103.86613366212326], { icon: greenIcon }).bindPopup(`<b>Welcome to Marina Bay</b><br><img src="./Four square/6.Marina bay.jpg" style="width:300px; height:auto;">${address.marinabay}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2890897444659277, 103.86291645470041], { icon: greenIcon }).bindPopup(`<b>Welcome to Singapore Flyer</b><br><img src="./Four square/7.Singapore Flyer.jpg" style="width:300px; height:auto;">${address.singaporeflyer}`);
markers.addLayer(leaf );

leaf = L.marker([1.3335404433692934, 103.67842101649347], { icon: greenIcon }).bindPopup(`<b>Welcome to Singapore Discovery Centre</b><br><img src="./Four square/8.singapore discovery centre.jpg" style="width:300px; height:auto;">${address.singaporediscoverycentre}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2822412783186132, 103.86380477057844], { icon: greenIcon }).bindPopup(`<b>Welcome to Supertree Grove</b><br><img src="./Four square/9.Supertree Grove.jpg" style="width:300px; height:auto;">${address.supertreegrove}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2853590094093568, 103.86121353301888], { icon: greenIcon }).bindPopup(`<b>Sands Skypark Observation Deck</b><br><img src="./Four square/10.Sands Skypark Observataion Deck.jpg" style="width:300px; height:auto;">${address.sandsskyparkobservationdeck}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2814621285101353, 103.844720052923], { icon: greenIcon }).bindPopup(`<b>Welcome to China Town</b><br><img src="./Four square/11.China Town.jpg" style="width:300px; height:auto;">${address.chinatown}`);
markers.addLayer(leaf );

leaf  = L.marker([1.3048836453075898, 103.832083861968], { icon: greenIcon }).bindPopup(`<b>Welcome to Orchard Road</b><br><img src="./Four square/12.Orchard road.jpg" style="width:300px; height:auto;">${address.orchardroad}`);
markers.addLayer(leaf );

leaf  = L.marker([1.282920884840201, 103.84420506879974], { icon: greenIcon }).bindPopup(`<b>Welcome to Buddha Tooth Relic Temple and Museum</b><br><img src="./Four square/13.Buddha Tooth Relic Temple and Museum.jpg" style="width:300px; height:auto;">${address.buddhatoothrelictempleandmuseum}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2868055885099114, 103.85443895552905], { icon: greenIcon }).bindPopup(`<b>Welcome to Merlion Park</b><br><img src="./Four square/14.Merlion Park.jpg" style="width:300px; height:auto;">${address.merlionpark}`);
markers.addLayer(leaf );

leaf  = L.marker([1.289432980298925, 103.85529121560053], { icon: greenIcon }).bindPopup(`<b>Welcome to Water front Promenade</b><br><img src="./Four square/15.Waterfront Promenade.jpg" style="width:300px; height:auto;">${address.waterfrontpromenade}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2845578803730962, 103.86502848084663], { icon: greenIcon }).bindPopup(`<b>Welcome to Flower Dome</b><br><img src="./Four square/16.Flower Dome.jpg" style="width:300px; height:auto;">${address.flowerdome}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2967968909521277, 103.84847573941556], { icon: greenIcon }).bindPopup(`<b>Welcome to National Museum of Singapore</b><br><img src="./Four square/17.National Museum of Singapore.jpg" style="width:300px; height:auto;">${address.nationalmuseumofsingapore}`);
markers.addLayer(leaf );

leaf  = L.marker([1.3597258939468875, 103.85220438043015], { icon: greenIcon }).bindPopup(`<b>Welcome to Singapore Mass Rapid Transit</b><br><img src="./Four square/18.Singapore Mass Rapid Transit.jpg" style="width:300px; height:auto;">${address.singaporemassrapidtransit}`);
markers.addLayer(leaf );

leaf  = L.marker([1.3606167491250998, 103.99043853094469], { icon: greenIcon }).bindPopup(`<b>Welcome to Jewel Changi Airport</b><br><img src="./Four square/19.Jewel Changi Airport.jpg" style="width:300px; height:auto;">${address.jewelchangiairport}`);
markers.addLayer(leaf );

leaf  = L.marker([1.271326641380478, 103.81963483981161], { icon: greenIcon }).bindPopup(`<b>Welcome to Singapore Cable Car</b><br><img src="./Four square/20.Singapore cable car.jpg" style="width:300px; height:auto;">${address.singaporecablecar}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2908153164072156, 103.8463385518567], { icon: greenIcon }).bindPopup(`<b>Welcome to Clarque Quay</b><br><img src="./Four square/21.Clarque Quay.jpg" style="width:300px; height:auto;">${address.clarquequay}`);
markers.addLayer(leaf );

leaf  = L.marker([1.402302409754913, 103.78796951121687], { icon: greenIcon }).bindPopup(`<b>Welcome to Night Safari</b><br><img src="./Four square/22.Night safari.jpg" style="width:300px; height:auto;">${address.nightsafari}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2807436926638787, 103.8448099090604], { icon: greenIcon }).bindPopup(`<b>Welcome to Maxwell Food centre</b><br><img src="./Four square/23.maxwell food centre.jpg" style="width:300px; height:auto;">${address.maxwellfoodcentre}`);
markers.addLayer(leaf );

leaf  = L.marker([1.2945666562975833, 103.8431739529228], { icon: greenIcon }).bindPopup(`<b>Welcome to Sri ThendayudhabaniSwami Temple</b><br><img src="./Four square/24.Sri ThendayudhabaniSwami Temple.jpg" style="width:300px; height:auto;">${address. srithendayudhabaniswamitemple}`);
markers.addLayer(leaf );

let basemaps = {
    'map1': map,
    'map2': Stadia_StamenWatercolor
}
let places = {
    "Attractions": markers
};

L.control.layers(basemaps, places).addTo(map);



// Define LeafIcon
var leaf  = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});


document.querySelector("#searchBtn").addEventListener("click", async function () {
const searchTerms = document.querySelector("#searchTerms").value;        
        // find the lat lng of the center of the map
        const centerPoint = map.getBounds().getCenter();
        const data = await search(centerPoint.lat, centerPoint.lng, searchTerms);
        console.log(data);
        // adding markers to the map for the search results
        addMarkersToMap(data, searchLayer, map);
        

    });

    document.querySelector("#toggleSearchBtn").addEventListener("click", function(){
        
        const searchContainer = document.querySelector("#search-container");
        const style = window.getComputedStyle(searchContainer);
        // if the search container is already visible, we'll hide it
        if (style.display != "none") {
            searchContainer.style.display = "none";
        } else {
              // otherwise, show it
              searchContainer.style.display = 'block';
        }

      
    })



    // Adding event listeners to spans using a loop    
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", function () {
            document.getElementById("searchTerms").value = spans[i].innerHTML;
        });
    }
})
// Added a nested loop
for (let i = 0; i < 5; i++) {
    console.log(`Outer loop iteration ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Inner loop iteration ${j}`);
        if (j === 1) {
            console.log("Continue inner loop");
            continue;
        }
        if (i === 3) {
            console.log("Break outer loop");
            break;
        }
    }
}






