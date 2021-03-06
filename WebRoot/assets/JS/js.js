//js script
   require([
         "esri/widgets/Track",
       "esri/Map",
       "esri/views/MapView",

       "esri/layers/FeatureLayer",

       "dojo/domReady!"
     ],
     function(
       Track, Map, MapView,
       FeatureLayer
     ) {
       var featureLayer = new FeatureLayer({
         url: "http://services.arcgis.com/Qo2anKIAMzIEkIJB/arcgis/rest/services/OxfordHackCampusDraft1/FeatureServer/0"
       });


       var map = new Map({
         basemap: "streets"
       });

       var view = new MapView({
         container: "viewDiv",
         map: map,

         extent: { // autocasts as new Extent()
           xmin: -9177811,
           ymin: 4247000,
           xmax: -9176791,
           ymax: 4247784,
           spatialReference: 102100
           }
         });

       /********************
        * Add feature layer
        ********************/

       // Carbon storage of trees in Warren Wilson College.
    var track = new Track({
       view: view
     });

     view.ui.add(track, "top-left");
     map.add(featureLayer);

     view.then(function() {
       track.start();
     });
  });
