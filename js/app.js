var boxwidth = $('.line_box').width();
// var arrowMagrin = boxwidth/2 + 60;
// $('#down_mid_i').css('margin-right', arrowMagrin+'px' );
$('.line_box').height(boxwidth);

$( window ).resize(function() {
	boxwidth = $('.line_box').width();
	$('.line_box').height(boxwidth);


});
$("#down_arrow_div").click(function() {

  $('html, body').animate({
    scrollTop: $("#content").offset().top
  }, 400);

});

$( "#send_btn" ).click(function(){
	swal("Sent!", "You message has been sent into the void!", "success");
	$('.form_item').val("");
});

$( "#ticket_btn" ).click(function(){
	swal("Sold Out!", "We had 0 tickets available, but they are all sold out", "error");
});



function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  if( $( window ).width() < 992){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 18,
      draggable: false
    });
  }
  else{
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 18
    });
  }
  var geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, map);
}
function geocodeAddress(geocoder, resultsMap) {
  var address = '77 Massachusetts Ave';
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}