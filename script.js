document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);
    
    L.marker([1.2845886,103.8646566]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup()
   
    let SingaporebotanicgardensMarker = L.marker([1.3157133526629585, 103.81606665227358]);;
    SingaporebotanicgardensMarker.addTo(map);
   
    let NationalorchidgardenMarker = L.marker([1.3117707874872062, 103.8147790725891]);;
    NationalorchidgardenMarker.addTo(map);

    let CloudForestMarker = L.marker([1.2839574616274565, 103.86580837638425]);;
    CloudForestMarker.addTo(map);

    let SingaporezooMarker = L.marker([1.4043617283957168, 103.7924327069517]);;
    SingaporezooMarker.addTo(map);
    
    let MarinabayMarker = L.marker([1.2882675480352717, 103.86613366212326]);;
    MarinabayMarker.addTo(map);

    let SingaporeFlyerMarker = L.marker([1.2890897444659277, 103.86291645470041]);;
    SingaporeFlyerMarker.addTo(map);

    let SingaporeDiscoveryCentreMarker = L.marker([1.3335404433692934, 103.67842101649347]);;
    SingaporeDiscoveryCentreMarker.addTo(map);

    let SupertreeGroveMarker = L.marker([1.2822412783186132, 103.86380477057844]);;
    SupertreeGroveMarker.addTo(map);

    let SandsSkyparkObservataionDeckMarker = L.marker([1.2853590094093568, 103.86121353301888]);;
    SandsSkyparkObservataionDeckMarker.addTo(map);

    let ChinatownMarker = L.marker([1.2814621285101353, 103.844720052923]);;
    ChinatownMarker.addTo(map);

    let OrchardroadMarker = L.marker([1.3048836453075898, 103.832083861968]);;
    OrchardroadMarker.addTo(map);
     
    let BuddhaToothRelicTempleandMuseumMarker = L.marker([1.282920884840201, 103.84420506879974]);;
    BuddhaToothRelicTempleandMuseumMarker.addTo(map);

    let MerlionParkMarker = L.marker([1.2868055885099114, 103.85443895552905]);;
    MerlionParkMarker.addTo(map);

    let WaterfrontPromenadeMarker = L.marker([1.289432980298925, 103.85529121560053]);;
    WaterfrontPromenadeMarker.addTo(map);

    let FlowerDomeMarker = L.marker([1.2845578803730962, 103.86502848084663]);;
    FlowerDomeMarker.addTo(map);

    let NationalMuseumofSingaporeMarker = L.marker([1.2967968909521277, 103.84847573941556]);;
    NationalMuseumofSingaporeMarker.addTo(map);

    let SingaporeMassRapidTransitMarker = L.marker([1.3597258939468875, 103.85220438043015]);;
    SingaporeMassRapidTransitMarker.addTo(map);

    let JewelChangiAirportMarker = L.marker([1.3606167491250998, 103.99043853094469]);;
    JewelChangiAirportMarker.addTo(map);

    let SingaporecablecarMarker = L.marker([1.271326641380478, 103.81963483981161]);;
    SingaporecablecarMarker.addTo(map);

    let ClarqueQuayMarker = L.marker([1.2908153164072156, 103.8463385518567]);;
    ClarqueQuayMarker.addTo(map);

    let NightsafariMarker = L.marker([1.402302409754913, 103.78796951121687]);;
    NightsafariMarker.addTo(map);

    let MaxwellFoodcentreMarker = L.marker([1.402302409754913, 103.78796951121687]);;
    MaxwellFoodcentreMarker.addTo(map);

    let SriThendayuthapaniswamiTempleMarker = L.marker([ 1.2945666562975833, 103.8431739529228]);;
    SriThendayuthapaniswamiTempleMarker.addTo(map);

   







    











    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        
        // find the lat lng of the center of the map
        const centerPoint = map.getBounds().getCenter();
        const data = await search(centerPoint.lat, centerPoint.lng, searchTerms);
        console.log(data)
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