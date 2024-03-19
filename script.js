document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);

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

// Create markers using greenIcon
L.marker([1.2845886, 103.8646566], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Gardens by the Bay.");
L.marker([1.3157133526629585, 103.81606665227358], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore Botanic Gardens.");
L.marker([1.3117707874872062, 103.8147790725891], { icon: greenIcon }).addTo(map).bindPopup("Welcome to National Orchid Garden.");
L.marker([1.2839574616274565, 103.86580837638425], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Cloud Forest.");
L.marker([1.4043617283957168, 103.7924327069517], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore Zoo.");
L.marker([1.2882675480352717, 103.86613366212326], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Marina Bay.");
L.marker([1.2890897444659277, 103.86291645470041], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore Flyer.");
L.marker([1.3335404433692934, 103.67842101649347], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore Discovery Centre.");
L.marker([1.2822412783186132, 103.86380477057844], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Supertree Grove.");
L.marker([1.2853590094093568, 103.86121353301888], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Sands Skypark Observation Deck.");
L.marker([1.2814621285101353, 103.844720052923], { icon: greenIcon }).addTo(map).bindPopup("Welcome to chinatown.");
L.marker([1.3048836453075898, 103.832083861968], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Orchard road.");
L.marker([1.282920884840201, 103.84420506879974], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Buddha Tooth Relic Temple and Museum.");
L.marker([1.2868055885099114, 103.85443895552905], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Merlion park.");
L.marker([1.289432980298925, 103.85529121560053], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Waterfront Promenade.");
L.marker([1.2845578803730962, 103.86502848084663], { icon: greenIcon }).addTo(map).bindPopup("Welcome to FLower Dome.");
L.marker([1.2967968909521277, 103.84847573941556], { icon: greenIcon }).addTo(map).bindPopup("Welcome to National Museum of Singapore.");
L.marker([1.3597258939468875, 103.85220438043015], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore Mass Rapid Transit.");
L.marker([1.3606167491250998, 103.99043853094469], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Jewel Changi Airport.");
L.marker([1.271326641380478, 103.81963483981161], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Singapore cable Car.");
L.marker([1.2908153164072156, 103.8463385518567], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Clarque Quay.");
L.marker([1.402302409754913, 103.78796951121687], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Night safari.");
L.marker([1.2807436926638787, 103.8448099090604], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Maxwell Food Centre.");
L.marker([1.2945666562975833, 103.8431739529228], { icon: greenIcon }).addTo(map).bindPopup("Welcome to Sri Thendayuthapani swami Temple.");

// Define LeafIcon
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

// Create a green leaf icon using LeafIcon
var greenLeafIcon = new LeafIcon({ iconUrl: 'leaf-green.png' });

const hh = "Hello";

// Bind popups with HTML content to the markers
L.marker([1.2845886, 103.8646566], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Gardens by the Bay</b><br><img src="./Four square/1. Garden by the bay.jpg" style="width:300px; height:auto;">${address.gardensByTheBay}`);
L.marker([1.3157133526629585, 103.81606665227358], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Botanic Gardens</b><br><img src="./Four square/2. Singapore Botanic Gardens.jpg" style="width:300px; height:auto;">${address.singaporebotanicgardens}`);
L.marker([1.3117707874872062, 103.8147790725891], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to National Orchid Garden</b><br><img src="./Four square/3.National Orchid Garden.jpg" style="width:300px; height:auto;">${address.nationalorchidgarden}`);
L.marker([1.2839574616274565, 103.86580837638425], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Cloud Forest</b><br><img src="./Four square/4.cloud forest.jpg" style="width:300px; height:auto;">${address.cloudforest}`);
L.marker([1.4043617283957168, 103.7924327069517], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Zoo</b><br><img src="./Four square/5.Singapore Zoo.jpg" style="width:300px; height:auto;">${address.singaporezoo}`);
L.marker([1.2882675480352717, 103.86613366212326], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Marina Bay</b><br><img src="./Four square/6.Marina bay.jpg" style="width:300px; height:auto;">${address.marinabay}`);
L.marker([1.2890897444659277, 103.86291645470041], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Flyer</b><br><img src="./Four square/7.Singapore Flyer.jpg" style="width:300px; height:auto;">${address.singaporeflyer}`);
L.marker([1.3335404433692934, 103.67842101649347], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Discovery Centre</b><br><img src="./Four square/8.singapore discovery centre.jpg" style="width:300px; height:auto;">${address.singaporediscoverycentre}`);
L.marker([1.2822412783186132, 103.86380477057844], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Supertree Grove</b><br><img src="./Four square/9.Supertree Grove.jpg" style="width:300px; height:auto;">${address.supertreegrove}`);
L.marker([1.2853590094093568, 103.86121353301888], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Sands Skypark Observation Deck</b><br><img src="./Four square/10.Sands Skypark Observataion Deck.jpg" style="width:300px; height:auto;">${address.sandsskyparkobservationdeck}`);
L.marker([1.2814621285101353, 103.844720052923], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to China Town</b><br><img src="./Four square/11.China Town.jpg" style="width:300px; height:auto;">${address.chinatown}`);
L.marker([1.3048836453075898, 103.832083861968], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Orchard Road</b><br><img src="./Four square/12.Orchard road.jpg" style="width:300px; height:auto;">${address.orchardroad}`);
L.marker([1.282920884840201, 103.84420506879974], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Buddha Tooth Relic Temple and Museum</b><br><img src="./Four square/13.Buddha Tooth Relic Temple and Museum.jpg" style="width:300px; height:auto;">${address.buddhatoothrelictempleandmuseum}`);
L.marker([1.2868055885099114, 103.85443895552905], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Merlion Park</b><br><img src="./Four square/14.Merlion Park.jpg" style="width:300px; height:auto;">${address.merlionpark}`);
L.marker([1.289432980298925, 103.85529121560053], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Water front Promenade</b><br><img src="./Four square/15.Waterfront Promenade.jpg" style="width:300px; height:auto;">${address.waterfrontpromenade}`);
L.marker([1.2845578803730962, 103.86502848084663], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Flower Dome</b><br><img src="./Four square/16.Flower Dome.jpg" style="width:300px; height:auto;">${address.flowerdome}`);
L.marker([1.2967968909521277, 103.84847573941556], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to National Museum of Singapore</b><br><img src="./Four square/17.National Museum of Singapore.jpg" style="width:300px; height:auto;">${address.nationalmuseumofsingapore}`);
L.marker([1.3597258939468875, 103.85220438043015], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Mass Rapid Transit</b><br><img src="./Four square/18.Singapore Mass Rapid Transit.jpg" style="width:300px; height:auto;">${address.singaporemassrapidtransit}`);
L.marker([1.3606167491250998, 103.99043853094469], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Jewel Changi Airport</b><br><img src="./Four square/19.Jewel Changi Airport.jpg" style="width:300px; height:auto;">${address.jewelchangiairport}`);
L.marker([1.271326641380478, 103.81963483981161], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Singapore Cable Car</b><br><img src="./Four square/20.Singapore cable car.jpg" style="width:300px; height:auto;">${address.singaporecablecar}`);
L.marker([1.2908153164072156, 103.8463385518567], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Clarque Quay</b><br><img src="./Four square/21.Clarque Quay.jpg" style="width:300px; height:auto;">${address.clarquequay}`);
L.marker([1.402302409754913, 103.78796951121687], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Night Safari</b><br><img src="./Four square/22.Night safari.jpg" style="width:300px; height:auto;">${address.nightsafari}`);
L.marker([1.2807436926638787, 103.8448099090604], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Maxwell Food centre</b><br><img src="./Four square/23.maxwell food centre.jpg" style="width:300px; height:auto;">${address.maxwellfoodcentre}`);
L.marker([1.2945666562975833, 103.8431739529228], { icon: greenLeafIcon }).addTo(map).bindPopup(`<b>Welcome to Sri ThendayudhabaniSwami Temple</b><br><img src="./Four square/24.Sri ThendayudhabaniSwami Temple.jpg" style="width:300px; height:auto;">${address. srithendayudhabaniswamitemple}`);

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



        
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", function () {
            document.getElementById("searchTerms").value = spans[i].innerHTML;
        });
    }
})