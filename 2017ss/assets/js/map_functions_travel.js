(function($){
    'use strict';
	
	
	//Travel map
	var styleArray = [
	  {
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#65ac4c"
		  }
		]
	  }
	];

	var mapOptions = {
	  center: new google.maps.LatLng(55.864237,-4.251806),
	  zoom: 09,
	  styles: styleArray,
	  scrollwheel: false,
	  backgroundColor: 'transparent',
		mapTypeControl: false,          
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
	  mapOptions);        
	var myLatlng = new google.maps.LatLng(55.864237,-4.251806);      
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  icon: 'images/map-icon.png'
	});
	
	
})(jQuery);	  