document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);

    let GardensbythebayMarker = L.marker([1.2845886, 103.8646566]);
    GardensbythebayMarker.addTo(map);
    let paragraph1 = document.createElement('p');
    paragraph1.innerHTML = `<p>Welcome to Gardens by the Bay</p><img src="./Four square/1. Garden by the bay.jpg" style="width:250px; height:auto;">`;
    GardensbythebayMarker.bindPopup(paragraph1).openPopup();


        let SingaporebotanicgardensMarker = L.marker([1.3157133526629585, 103.81606665227358]);
        SingaporebotanicgardensMarker.addTo(map);
        let paragraph2 = document.createElement('p');
        paragraph2.innerHTML = `<p>Welcome to Singapore botanic gardens</p> <img src="./Four square/2. Singapore Botanic Gardens.jpg" style="width:250px; height:auto;">`;
        SingaporebotanicgardensMarker.bindPopup(paragraph2);
    
        let NationalorchidgardenMarker = L.marker([1.3117707874872062, 103.8147790725891]);;
        NationalorchidgardenMarker.addTo(map);
        let paragraph3 = document.createElement('p');
        paragraph3.innerHTML = `<p>Welcome to National orchid Garden</p><img src="./Four square/3.National Orchid Garden.jpg" style="width:250px; height:auto;">`;
        NationalorchidgardenMarker.bindPopup(paragraph3);
    

        let CloudForestMarker = L.marker([1.2839574616274565, 103.86580837638425]);;
        CloudForestMarker.addTo(map);
        let paragraph4 = document.createElement('p');
        paragraph4.innerHTML = `<p>Welcome to Cloud Forest</p><img src="./Four square/4.cloud forest.jpg" style="width:250px; height:auto;">`;
        CloudForestMarker.bindPopup(paragraph4);

        let SingaporezooMarker = L.marker([1.4043617283957168, 103.7924327069517]);;
        SingaporezooMarker.addTo(map);
        let paragraph5 = document.createElement('p');
        paragraph5.innerHTML = `<p>Welcome to Singapore Zoo</p><img src="./Four square/5.Singapore Zoo.jpg" style="width:250px; height:auto;">`;
        SingaporezooMarker.bindPopup(paragraph5);
        
        let MarinabayMarker = L.marker([1.2882675480352717, 103.86613366212326]);;
        MarinabayMarker.addTo(map);
        let paragraph6 = document.createElement('p');
        paragraph6.innerHTML = `<p>Welcome to Marina bay</p><img src="./Four square/6.Marina bay.jpg" style="width:250px; height:auto">`;
        MarinabayMarker.bindPopup(paragraph6);

        let SingaporeFlyerMarker = L.marker([1.2890897444659277, 103.86291645470041]);;
        SingaporeFlyerMarker.addTo(map);
        let paragraph7 = document.createElement('p');
        paragraph7.innerHTML = `<p>Welcome to Marina bay</p><img src="./Four square/7.Singapore Flyer.jpg" style="width:250px; height:auto;">`;
        SingaporeFlyerMarker.bindPopup(paragraph7);

        let SingaporeDiscoveryCentreMarker = L.marker([1.3335404433692934, 103.67842101649347]);;
        SingaporeDiscoveryCentreMarker.addTo(map);
        let paragraph8 = document.createElement('p');
        paragraph8.innerHTML = `<p>Welcome to Singapore Discovery centre</p><img src="./Four square/8.singapore discovery centre.jpg" style="width:250px; height:auto;">`;
        SingaporeDiscoveryCentreMarker.bindPopup(paragraph8);

        let SupertreeGroveMarker = L.marker([1.2822412783186132, 103.86380477057844]);;
        SupertreeGroveMarker.addTo(map);
        let paragraph9 = document.createElement('p');
        paragraph9.innerHTML = `<p>Welcome to Super tree Grove</p><img src="./Four square/9.Supertree Grove.jpg" style="width:250px; height:auto;">`;
        SupertreeGroveMarker.bindPopup(paragraph9);

        let SandsSkyparkObservataionDeckMarker = L.marker([1.2853590094093568, 103.86121353301888]);;
        SandsSkyparkObservataionDeckMarker.addTo(map);
        let paragraph10 = document.createElement('p');
        paragraph10.innerHTML = `<p>Welcome to Sands Skypark Observataion Deck</p><img src="./Four square/10.Sands Skypark Observataion Deck.jpg" style="width:250px; height:auto;">`;
        SandsSkyparkObservataionDeckMarker.bindPopup(paragraph10);

        let ChinatownMarker = L.marker([1.2814621285101353, 103.844720052923]);;
        ChinatownMarker.addTo(map);
        let paragraph11 = document.createElement('p');
        paragraph11.innerHTML = `<p>Welcome to China town</p><img src="./Four square/11.Chinatown.jpeg" style="width:250px; height:auto;">`;
        ChinatownMarker.bindPopup(paragraph11);

        let OrchardroadMarker = L.marker([1.3048836453075898, 103.832083861968]);;
        OrchardroadMarker.addTo(map);
        let paragraph12 = document.createElement('p');
        paragraph12.innerHTML = `<p>Welcome to Orchard road</p><img src="./Four square/12.Orchard road.jpg" style="width:250px; height:auto;">`;
        OrchardroadMarker.bindPopup(paragraph12);
        
        let BuddhaToothRelicTempleandMuseumMarker = L.marker([1.282920884840201, 103.84420506879974]);;
        BuddhaToothRelicTempleandMuseumMarker.addTo(map);
        let paragraph13 = document.createElement('p');
        paragraph13.innerHTML = `<p>Welcome to Buddha Tooth Relic Temple and Museum</p><img src="./Four square/13.Buddha Tooth Relic Temple and Museum.jpg" style="width:250px; height:auto;">`;
        BuddhaToothRelicTempleandMuseumMarker.bindPopup(paragraph13);

        let MerlionParkMarker = L.marker([1.2868055885099114, 103.85443895552905]);;
        MerlionParkMarker.addTo(map);
        let paragraph14 = document.createElement('p');
        paragraph14.innerHTML = `<p>Welcome to Merlion Park</p><img src="./Four square/14.Merlion Park.jpg" style="width:250px; height:auto;">`;
        MerlionParkMarker.bindPopup(paragraph14);

        let WaterfrontPromenadeMarker = L.marker([1.289432980298925, 103.85529121560053]);;
        WaterfrontPromenadeMarker.addTo(map);
        let paragraph15 = document.createElement('p');
        paragraph15.innerHTML = `<p>Welcome to Water front Promenade</p><img src="./Four square/15.Waterfront Promenade.jpg" style="width:250px; height:auto;">`;
        WaterfrontPromenadeMarker.bindPopup(paragraph15);

        let FlowerDomeMarker = L.marker([1.2845578803730962, 103.86502848084663]);;
        FlowerDomeMarker.addTo(map);
        let paragraph16 = document.createElement('p');
        paragraph16.innerHTML = `<p>Welcome to Flower Dome</p><img src="./Four square/16.Flower Dome.jpg" style="width:250px; height:auto;">`;
        FlowerDomeMarker.bindPopup(paragraph16);

        let NationalMuseumofSingaporeMarker = L.marker([1.2967968909521277, 103.84847573941556]);;
        NationalMuseumofSingaporeMarker.addTo(map);
        let paragraph17 = document.createElement('p');
        paragraph17.innerHTML = `<p>Welcome to National Museum of Singapore</p><img src="./Four square/17.National Museum of Singapore.jpg" style="width:250px; height:auto;">`;
        NationalMuseumofSingaporeMarker.bindPopup(paragraph17);

        let SingaporeMassRapidTransitMarker = L.marker([1.3597258939468875, 103.85220438043015]);;
        SingaporeMassRapidTransitMarker.addTo(map);
        let paragraph18 = document.createElement('p');
        paragraph18.innerHTML = `<p>Welcome to Singapore Mass Rapid Transit</p><img src="./Four square/18.Singapore Mass Rapid Transit.jpg" style="width:250px; height:auto;">`;
        SingaporeMassRapidTransitMarker.bindPopup(paragraph18);

        let JewelChangiAirportMarker = L.marker([1.3606167491250998, 103.99043853094469]);;
        JewelChangiAirportMarker.addTo(map);
        let paragraph19 = document.createElement('p');
        paragraph19.innerHTML = `<p>Welcome to Jewel Changi Airport</p><img src="./Four square/19.Jewel Changi Airport.jpg" style="width:250px; height:auto;">`;
        JewelChangiAirportMarker.bindPopup(paragraph19);


        let SingaporecablecarMarker = L.marker([1.271326641380478, 103.81963483981161]);;
        SingaporecablecarMarker.addTo(map);
        let paragraph20 = document.createElement('p');
        paragraph20.innerHTML = `<p>Welcome to Singapore cable cable</p><img src="./Four square/20.Singapore cable car.jpg" style="width:250px; height:auto;">`;
        SingaporecablecarMarker.bindPopup(paragraph20);

        let ClarqueQuayMarker = L.marker([1.2908153164072156, 103.8463385518567]);;
        ClarqueQuayMarker.addTo(map);
        let paragraph21 = document.createElement('p');
        paragraph21.innerHTML = `<p>Welcome to Clarque Quay</p><img src="./Four square/21.Clarque Quay.jpg" style="width:250px; height:auto;">`;
        ClarqueQuayMarker.bindPopup(paragraph21);

        let NightsafariMarker = L.marker([1.402302409754913, 103.78796951121687]);;
        NightsafariMarker.addTo(map);
        let paragraph22 = document.createElement('p');
        paragraph22.innerHTML = `<p>Welcome to Night safari</p><img src="./Four square/22.Night safari.jpg" style="width:250px; height:auto;">`;
        NightsafariMarker.bindPopup(paragraph22);

        let MaxwellFoodcentreMarker = L.marker([1.402302409754913, 103.78796951121687]);;
        MaxwellFoodcentreMarker.addTo(map);
        let paragraph23 = document.createElement('p');
        paragraph23.innerHTML = `<p>Welcome to Maxwell Food centre</p><img src="./Four square/23.maxwell food centre.jpg" style="width:250px; height:auto;">`;
        MaxwellFoodcentreMarker.bindPopup(paragraph23);

        let SriThendayuthapaniswamiTempleMarker = L.marker([ 1.2945666562975833, 103.8431739529228]);;
        SriThendayuthapaniswamiTempleMarker.addTo(map);
        let paragraph24 = document.createElement('p');
        paragraph24.innerHTML = `<p>Welcome to Sri Thendayuthapani swami Temple </p><img src="./Four square/24.Sri Dhandayudhabani Swami Temple.jpg" style="width:250px; height:auto;">`;
        SriThendayuthapaniswamiTempleMarker.bindPopup(paragraph24);

    







    











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