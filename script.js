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



    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        
        // find the lat lng of the center of the map
        const centerPoint = map.getBounds().getCenter();
        const data = await search(centerPoint.lat, centerPoint.lng, searchTerms);

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

    

});